# npm用法掌握

`npm` 是 Node.js 的包管理工具，它允许你安装、更新、删除和管理 JavaScript 包和模块。这些包和模块可以用于构建 Web 应用、命令行工具、后端服务器等各种类型的 JavaScript 应用。以下是 `npm` 常用的用法介绍：

### 初始化项目

在开始一个新的项目时，你可以使用 `npm init` 命令创建一个新的 `package.json` 文件，其中包含了项目的基本信息和依赖。

   ```bash
   npm init
   ```

### 安装包

使用 `npm install` 命令来安装包。你可以指定包名，也可以使用 `--save` 或 `--save-dev` 参数来将包添加到 `dependencies` 或 `devDependencies` 中。

   ```bash
   npm install package-name
   npm install package-name --save  # 添加到 dependencies
   npm install package-name --save-dev  # 添加到 devDependencies
   ```

### 全局安装 

有些包是用于命令行工具的，你可以使用 `-g` 或 `--global` 参数进行全局安装。

   ```bash
   npm install -g package-name
   ```

### 卸载包

使用 `npm uninstall` 命令来卸载一个已安装的包。

   ```bash
   npm uninstall package-name
   ```

### 更新包

使用 `npm update` 命令来更新已安装的包。

   ```bash
   npm update package-name
   ```

### 查看已安装的包

使用 `npm list` 命令来查看当前项目的所有已安装的包。

   ```bash
   npm list
   ```

### 搜索包

使用 `npm search` 命令来搜索 npm 上的包。

   ```bash
   npm search package-name
   ```

### 运行脚本

在 `package.json` 中可以定义自定义的脚本命令，使用 `npm run` 来运行这些脚本。

   ```json
   // package.json
   "scripts": {
     "start": "node server.js",
     "build": "webpack --config webpack.config.js"
   }
   ```

   ```bash
   npm run start
   npm run build
   ```

### `npm` 镜像地址

`npm` 镜像地址可以通过命令行来进行更改和还原。镜像地址的更改可以帮助你加快包的下载速度，特别是在访问国际网络资源时。以下是如何更改和还原 `npm` 镜像地址的方法：

##### 更改 `npm` 镜像地址

   你可以使用以下命令将 `npm` 镜像地址更改为国内的镜像，例如淘宝镜像：

   ```bash
   npm config set registry https://registry.npm.taobao.org/
   ```

   你也可以使用其他可用的镜像，根据你的需要进行选择。
   
   * npm ---------- https://registry.npmjs.org/
   * yarn --------- https://registry.yarnpkg.com/
   * tencent ------ https://mirrors.cloud.tencent.com/npm/
   * alibaba ------- https://registry.npmmirror.com/
   * npmMirror ---- https://skimdb.npmjs.com/registry/

##### 还原默认 `npm` 镜像地址

   如果想要还原回官方默认的 `npm` 镜像地址，可以使用以下命令：

   ```bash
   npm config set registry https://registry.npmjs.org/
   ```

##### 查看当前 `npm` 镜像地址

   使用以下命令可以查看当前配置的 `npm` 镜像地址：

   ```bash
   npm config get registry
   ```

   这将会输出当前的镜像地址。

请注意，在切换镜像地址时，可能需要等待一段时间，让配置生效。更改镜像地址后，使用 `npm` 命令时将会从新的镜像地址获取包信息。



以上是一些 `npm` 常用的基本用法，它可以帮助你管理项目中的依赖、运行脚本以及探索其他开发者分享的包。如果你想了解更多 `npm` 的详细信息，可以查阅官方文档或在线资源。