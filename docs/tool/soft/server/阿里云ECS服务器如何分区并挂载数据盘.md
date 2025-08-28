# 阿里云ECS服务器如何分区并挂载数据盘



### Step1：如何验证数据磁盘是否挂载

有多个命令可以用来检查磁盘的挂载状态，以下是几种最常用和有效的方法：

#### 1. 使用 `df` 命令 (推荐)

`df` 命令用于显示文件系统的磁盘空间使用情况，通过它可以快速查看所有已挂载的磁盘。

bash

```
df -h
```

-   **`-h`** 选项表示以人类可读的格式（如 G, M）显示大小。
-   **输出解读**：查看 `Mounted on` 这一列，这里显示的就是挂载点。如果你预期的磁盘（比如 `/dev/sdb1`, `/dev/nvme0n1p1` 等）和挂载点（如 `/data`）出现在列表中，就说明已挂载。

#### 2. 使用 `lsblk` 命令 (更直观)

`lsblk` 命令以树状形式列出所有块设备（包括磁盘和分区），清晰地显示它们的挂载点。

bash

```
lsblk
```

或者为了更清晰：

bash

```
lsblk -f
```

-   **`-f`** 选项会同时显示文件系统类型（如 ext4, xfs）和挂载点。
-   **输出解读**：找到你的数据磁盘（根据大小识别），查看其分区下的 `MOUNTPOINT` 列。如果该列不为空，显示了一个路径（如 `/mnt/data`），则表示已挂载。如果为空，则表示未挂载。

**示例输出：**

text

```
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0   20G  0 disk
├─sda1   8:1    0    1G  0 part /boot
└─sda2   8:2    0   19G  0 part /
sdb      8:16   0  100G  0 disk
└─sdb1   8:17   0  100G  0 part /data  <-- 这个就是已挂载的数据盘
```

*(这里 `sdb1` 的挂载点是 `/data`)*

#### 3. 查看 `/proc/mounts` 文件

这个文件是内核维护的，记录了所有当前挂载的文件系统。

bash

```
cat /proc/mounts | grep -i sdb
```

或者直接搜索你预期的挂载点：

bash

```
cat /proc/mounts | grep -i '/data'
```

#### 4. 使用 `mount` 命令

`mount` 命令不加任何参数时，会列出所有已挂载的文件系统。

bash

```
mount | grep -i '/dev/sd'
```

或

bash

```
mount | grep -i '/data'
```

------

### Step2：如果未挂载，如何实现挂载

如果通过上述命令发现你的数据磁盘（例如 `/dev/sdb1`）没有挂载点，请按照以下步骤操作：

**警告：操作前请务必确认磁盘设备名，错误操作可能导致系统盘数据丢失！**

#### 步骤 1：确认磁盘和设备分区

1.  **列出所有磁盘**：

    bash

    ```
    lsblk
    ```

    或者使用 `fdisk`：

    bash

    ```
    sudo fdisk -l
    ```

    通过磁盘大小判断哪个是你的数据磁盘（例如：`/dev/sdb`）。

2.  **检查是否有分区**：

    -   如果 `lsblk` 输出显示你的磁盘（如 `/dev/sdb`）下面有分区（如 `/dev/sdb1`），那么你需要挂载的是这个分区。
    -   如果磁盘下面没有任何分区（直接是一个设备，如 `/dev/sdb`），**这通常是不推荐的**，但你可以直接挂载整个磁盘。**最佳实践是先为磁盘创建分区**。

#### 步骤 2：创建文件系统（如果磁盘是全新的，未初始化）

**如果磁盘是全新的，或者你想要格式化它（注意：格式化会删除所有数据！），你需要为其创建文件系统。**

bash

```
# 假设你要格式化的分区是 /dev/sdb1，格式化为 ext4 文件系统
sudo mkfs.ext4 /dev/sdb1
```

-   常用的文件系统还有 `xfs` (`sudo mkfs.xfs /dev/sdb1`)，根据需求选择。

**如果磁盘已有数据且已有文件系统（如 ext4, xfs），请跳过此步骤，否则数据会被清空！**

#### 步骤 3：创建挂载点

挂载点就是一个目录，通过这个目录来访问磁盘上的文件。

bash

```
# 创建一个目录，例如 /data
sudo mkdir /data
```

#### 步骤 4：临时挂载磁盘

使用 `mount` 命令可以临时挂载磁盘，重启后失效。适合测试或临时使用。

bash

```
# 将 /dev/sdb1 挂载到 /data 目录
sudo mount /dev/sdb1 /data
```

#### 步骤 5：验证临时挂载是否成功

再次运行 `df -h` 或 `lsblk`，检查 `/dev/sdb1` 的挂载点是否已经变为 `/data`。

bash

```
df -h /data
lsblk /dev/sdb1
```

#### 步骤 6：配置自动挂载（永久挂载）

为了确保服务器重启后磁盘能自动挂载，需要修改 `/etc/fstab` 文件。

1.  **备份 `fstab` 文件（非常重要！）**：

    bash

    ```
    sudo cp /etc/fstab /etc/fstab.bak
    ```

2.  **获取分区的 UUID（推荐使用 UUID，更稳定）**：

    bash

    ```
    sudo blkid /dev/sdb1
    ```

    输出中会显示 `UUID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"`，复制这个 UUID。

3.  **编辑 `/etc/fstab` 文件**：

    bash

    ```
    sudo vi /etc/fstab
    ```

4.  **在文件末尾添加一行配置**：

    text

    ```
    UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   /data   ext4    defaults        0       0
    ```

    -   **第一字段 (UUID)**：使用刚才复制的 UUID。也可以使用设备名（如 `/dev/sdb1`），但 UUID 更可靠，因为设备名可能会变。
    -   **第二字段 (挂载点)**：你创建的目录路径，例如 `/data`。
    -   **第三字段 (文件系统)**：分区格式，如 `ext4`, `xfs`，必须与 `blkid` 显示的一致。
    -   **第四字段 (挂载选项)**：通常使用 `defaults`。
    -   **第五字段 (dump)**：是否被 dump 备份工具使用，一般设为 `0`。
    -   **第六字段 (fsck)**：开机磁盘检查顺序。根目录 `/` 是 `1`，数据盘设为 `0` 表示不检查。

5.  **测试 `fstab` 配置是否正确**：
    **这是一个极其重要的步骤，错误的 `fstab` 配置可能导致系统无法启动！**

    bash

    ```
    sudo mount -a
    ```

    这条命令会尝试挂载 `fstab` 中所有未挂载的设备。如果没有任何报错，并且用 `df -h` 能成功看到挂载，说明配置正确。**如果有报错，请立即修正，否则重启后无法进入系统。**

#### 完整流程示例

假设新磁盘为 `/dev/sdb`，我们为其创建第一个分区 `/dev/sdb1` 并挂载到 `/mnt/data`。

bash

```
# 1. 分区 (使用 fdisk 或 parted，这里以 fdisk 为例)
sudo fdisk /dev/sdb
# 在 fdisk 交互界面中依次输入：n (新建), p (主分区), 1 (分区号), 回车 (起始扇区), 回车 (结束扇区), w (保存并退出)

# 2. 格式化
sudo mkfs.ext4 /dev/sdb1

# 3. 创建挂载点
sudo mkdir /mnt/data

# 4. 临时挂载测试
sudo mount /dev/sdb1 /mnt/data

# 5. 获取 UUID
sudo blkid /dev/sdb1

# 6. 配置自动挂载 (编辑 /etc/fstab)
sudo vi /etc/fstab
# 添加一行：UUID=xxxx /mnt/data ext4 defaults 0 0

# 7. 测试自动挂载配置
sudo mount -a
```

------

### 总结

| 操作             | 命令                                            |
| :--------------- | :---------------------------------------------- |
| **检查是否挂载** | `df -h`, `lsblk`, `mount`                       |
| **查看所有磁盘** | `sudo fdisk -l`, `lsblk`                        |
| **格式化分区**   | `sudo mkfs.ext4 /dev/sdb1`                      |
| **创建挂载点**   | `sudo mkdir /path/to/your/mountpoint`           |
| **临时挂载**     | `sudo mount /dev/sdb1 /path/to/your/mountpoint` |
| **获取UUID**     | `sudo blkid /dev/sdb1`                          |
| **永久挂载**     | 编辑 `/etc/fstab`，添加配置行                   |
| **测试fstab**    | **`sudo mount -a` (非常重要！)**                |

请务必谨慎操作，尤其是在处理 `fstab` 和格式化命令时。