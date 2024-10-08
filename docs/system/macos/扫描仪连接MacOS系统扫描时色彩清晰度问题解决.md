# 扫描仪连接MacOS系统扫描时色彩清晰度问题解决



在 macOS 上，系统自带的扫描驱动程序通常与“图像捕捉”（Image Capture）应用程序集成，通常表现出稳定的清晰度和色彩准确性。如果你遇到安装第三方驱动后出现质量问题，并希望恢复使用 macOS 自带的扫描驱动程序，可以尝试以下步骤：

### 1. **删除第三方驱动**

-   卸载第三方驱动

    ：首先，你需要卸载已安装的奔图驱动程序。你可以通过以下路径查找是否有卸载工具，或者手动删除安装的驱动文件：

    -   `/Library/Printers/`
    -   `/Library/Image Capture/Devices/`
    -   `/System/Library/Image Capture/Devices/`

有些厂商提供专门的卸载程序，建议查看安装文件夹中是否有卸载工具。如果没有，可以通过删除相关文件夹来移除驱动。

### 2. **重启你的 Mac**

卸载第三方驱动后，重启你的电脑以确保系统清除所有相关的缓存和设置。

### 3. **使用 macOS 自带的“图像捕捉”应用**

1.  连接打印机并确保它处于打开状态。

2.  打开 macOS 自带的 

    图像捕捉

     (Image Capture) 应用程序：

    -   在 `应用程序 > 其他` 文件夹中可以找到“图像捕捉”。

3.  在“图像捕捉”中，你应该可以看到你的扫描仪（即使没有安装第三方驱动）。选择扫描仪，进行扫描测试。

### 4. **从系统偏好设置中管理驱动**

如果删除了第三方驱动后，扫描仪依然不能正常工作，尝试通过 **系统偏好设置 > 打印机与扫描仪** 重新添加扫描仪：

-   打开 **系统偏好设置** > **打印机与扫描仪**。
-   点击左下角的 “+” 号，查看系统是否能够自动识别并添加该设备。
-   确认你选择的是 macOS 自带的驱动而非第三方驱动。

### 5. **重置打印系统**

如果以上步骤无效，你可以尝试重置整个打印系统：

1.  在 **系统偏好设置 > 打印机与扫描仪**，右键点击设备列表区域的空白处。
2.  选择 **重置打印系统**，这将删除所有打印机、扫描仪和相关设置。
3.  之后，重新添加你的扫描打印一体机，macOS 应该会自动为其分配默认驱动。

这些步骤应该可以帮助你恢复到 macOS 自带的扫描驱动程序，从而解决清晰度和色彩异常的问题。