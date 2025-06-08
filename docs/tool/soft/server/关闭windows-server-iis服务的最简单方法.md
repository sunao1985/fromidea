# 关闭windows server iis服务的最简单方法



关闭 Windows Server 上 IIS 服务的最简单方法是通过 PowerShell 或服务管理器。以下是两种快速方法：

### 方法 1：通过 PowerShell（最快）
1. 以管理员身份打开 **PowerShell**
2. 输入以下命令：
   ```powershell
   Stop-Service -Name W3SVC -Force
   ```
   - `W3SVC` 是 IIS 的主服务名称
   - `-Force` 参数确保立即停止

### 方法 2：通过服务管理器（图形界面）
1. 按 `Win + R`，输入 `services.msc` 回车
2. 找到 **World Wide Web Publishing Service (W3SVC)**
3. 右键选择 **停止**

### 补充说明
- 停止后如需禁用开机自启（可选）：
  ```powershell
  Set-Service -Name W3SVC -StartupType Disabled
  ```
- 重启 IIS 服务命令：
  ```powershell
  Restart-Service W3SVC
  ```

> ⚠️ 注意：操作需管理员权限。停止 IIS 会导致所有网站无法访问，建议在维护时段操作。