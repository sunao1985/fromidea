# intelephense 插件配置说明

### 快捷键：

格式化代码：               Mac： shift + option + f         Windows：shift + alt + f 

跳到到对应函数或方法：Mac：command + 鼠标左健    Windows：ctrl + 鼠标左键

返回到跳转之前的位置：Mac：control + “-”               Windows：alt + 键盘上的⬅️健

### Intelephense › Compatibility: Correct For Array Access Array And Traversable Array Union Types

Resolves 'ArrayAccess" and ' Traversable' implementations that are unioned with a typed array to generic syntax. eg

*ArravAccessOrTraversable|ElementType!l'=>'ArravAccessOrTraversable<mixed,ElementType>

### 兼容性:适合数组访问数组和可遍历数组联合类型

解析与类型化数组联合的“ArrayAccess”和“可遍历”实现到泛型语法。

*ArravAccessOrTraversable|元素类型！ l'=>'ArravAccessOr可追溯<混合,元素类型>

### Intelephense › Compatibility: Correct For Base Class Static Union Types

Resolves 'BaseClass|static' union types to 'static' instead of 'BaseClass.

### 兼容性:正确的基类静态联合类型

将“BaseClass|static”类型解析为“静态”而不是“BaseClass”。

### Intelephense › Completion: Fully Qualify Global Constants And Functions

Global namespace constants and functions will be fully qualified (prefixed with a backslash)

### 补全:完全限定全局常量和函数

全局命名空间常量和函数将是完全限定的(以反斜杠作为前缀)

### Intelephense » Completion: Insert Use Declaration

Use declarations will be automatically inserted for namespaced classes, traits, interfaces, functions, and constants.

### 完成:插入使用声明

使用声明将自动插入命名空间类、特征、接口、函数和常量。 

### Intelephense › Completion: Max Items

The maximum number of completion items returned per request.

100

### 完成:最多的项目

每个请求返回的最大完成项数。

### Intelephense › Completion: Trigger Parameter Hints

Method and function completions will include parentheses and trigger parameter hints.

### 智能语音补全:触发参数提示

方法和函数补全将包括括号和触发器参数提示。

### Intelephense › Diagnostics: Argument Count

Enables argument count diagnostics.

### 诊断:参数计数

启用参数计数诊断。

### Intelephense › Diagnostics: Deprecated

Enables deprecated diagnostics.

### 诊断:已弃用

使废弃诊断。

### Intelephense › Diagnostics: Duplicate Symbols

Enables duplicate svmbol diagnostics.

### 诊断:重复的符号

启用重复svmbol诊断。

### Intelephense › Diagnostics: Embedded Languages

Enables diagnostics in embedded languages.

### 诊断:嵌入式语言

在嵌入式语言中启用诊断。

### Intelephense › Diagnostics: Enable

Enables diagnostics.

### 诊断:启用

支持诊断。

### Intelephense › Diagnostics: Implementation Errors

Enables reporting of problems associated with method and class implementations. For example, unimplemented methods or method

signature incompatibilities.

### 诊断:实现错误

启用与方法和类实现相关的问题报告。例如，未实现的方法或方法 

签名不兼容。

### Intelephense › Diagnostics: Language Constraints

Enables reporting of various language constraint errors.

### 诊断:语言的约束

启用报告各种语言约束错误。

### Intelephense › Diagnostics: Run

Controls when diagnostics are run.

onTvoe

### 诊断:跑

运行诊断时的控件。 

### Intelephense › Diagnostics: Type Errors

Enables diagnostics on type compatibility of arguments, property assignments, and return statements where types have been

declared.

### 诊断:类型错误

启用了对参数、属性赋值和返回语句的类型兼容性进行诊断

### Intelephense › Diagnostics: Undefined Class Constants

Enables undefined class constant diagnostics.

### 诊断:未定义的类常量

启用未定义类常量诊断。

### Intelephense › Diagnostics: Undefined Constants

Enables undefined constant diagnostics.

### 诊断:未定义的常量

启用未定义的常量诊断。

### Intelephense » Diagnostics: Undefined Functions

Enables undefined function diagnostics.

### 诊断:未定义的函数

启用未定义的功能诊断。

### Intelephense » Diagnostics: Undefined Methods

Enables undefined method diagnostics.

### 诊断:未定义的方法

启用未定义方法诊断。

### Intelephense › Diagnostics: Undefined Properties

Enables undefined static property diagnostics.

### 诊断:未定义的属性

启用未定义的静态属性诊断。

### Intelephense » Diagnostics: Undefined Symbols

DEPRECATED. Use the setting for each symbol category.

### 诊断:未定义的符号

弃用。对每个符号类别使用该设置。

### Intelephense » Diagnostics: Undefined Types

Enables undefined class, interface and trait diagnostics

### 诊断:未定义的类型

启用未定义的类、接口和特征诊断

Intelephense › Diagnostics: Undefined Variables

Enables undefined variable diagnostics.

诊断:未定义的变量

启用未定义的变量诊断。

### Intelephense › Diagnostics: Unexpected Tokens

Enables unexpected token diagnostics.

### 诊断:意想不到的令牌

启用意外令牌诊断。

### Intelephense » Diagnostics: Unused Symbols

Enables unused variable, private member, and import diagnostics.

### 诊断:未使用的符号

启用未使用的变量、私有成员和导入诊断。

### Intelephense › Environment: Document Root

The directory of the entry point to the application (directory of index.php). Can be absolute or relative to the workspace folder. Used for resolving script inclusion and path suggestions.

### 环境:文档根

应用程序入口点的目录(index.php的目录)。可以是绝对的，也可以是相对于工作区文件夹的。用于解析脚本包含和路径建议。

### Intelephense » Environment: Include Paths

The include paths (as individual path items) as defined in the include_path ini setting or paths to external libraries. Can be absolute or relative to the workspace folder. Used for resolving script inclusion and/or adding external symbols to folder.

### 环境:包括路径

在include_path ini设置中定义的包含路径(作为单独的路径项)或外部库的路径。可以是绝对的，也可以是相对于工作区文件夹的。用于解析脚本包含和/或向文件夹添加外部符号。

### Intelephense › Environment: PH Version

A sever compatible string that represents the target PHP version. Used for providing version appropriate suggestions and diagnostics

PHP 5.3.0 and greater supported.

### 环境:PHP版本

表示目标PHP版本的服务器兼容字符串。用于提供版本相关的建议和诊断

 

### Intelephense > Environment: Short Open Tag

When enabled '<?' will be parsed as a PHP open tag. Defaults to true.

### 环境:短标签

当启用' < ?`将被解析为PHP打开标签。默认值为true。

### Intelephense » Files: Associations

Configure glob patterns to make files available for language server features. Inherits from files.associations.

\# settings.ison +4#

### 文件:组织

配置glob模式，使文件可用于语言服务器功能。从files.associations继承。

### Intelephense » Files: Exclude

Configure glob patterns to exclude certain files and folders from all language server features. Inherits from files.exclude.

### 文件:排除

配置glob模式以从所有语言服务器特性中排除某些文件和文件夹。从files.exclude继承。

### Intelephense › Files: Max Size

Maximum file size in bytes.

### 文件:大文件大小

以字节为单位的最大文件大小。

### Intelephense › Format: Braces

Controls formatting style of braces

默认：psr12

### 格式:大括号

控制大括号的格式化样式

改为：k&r

### Intelephense › Format: Enable

Enables formatting.

### 格式:支持

支持格式。

### Intelephense: Licence Kev

DEPRECATED. Don't use this. Go to command palette and search for enter licence key.

### 许可证号

弃用。不要用这个。进入命令调色板并搜索输入许可证密钥。

### Intelephense: Max Memory

Maximum memory (in MB) that the server should use. On some systems this may only have effect when runtime has been set. Minimum

### 最大内存

服务器应该使用的最大内存(MB)。在某些系统上，只有设置了runtime时才会生效。最低

### Intelephense › Phpdoc: Class Template

An object that describes the format of generated class/interface/trait phpdoc. The following snippet variables are available

SYMBOL_NAME; SYMBOL_KIND; SYMBOL_TYPE; SYMBOL_NAMESPACE.

### Phpdoc:类模板

一个描述生成的类/接口/特征phpdoc格式的对象。下列代码片段变量是可用的

### Intelephense › Phodoc: Function Template

An object that describes the format of generated function/method phpdoc. The following snippet variables are available: SYMBOL_NAME;SYMBOL_KIND; SYMBOL_TYPE; SYMBOL_NAMESPACE.

### Phodoc:函数模板

一个描述生成函数/方法phpdoc格式的对象。下列代码片段变量可用:

### Intelephense » Phpdoc: Property Template

An object that describes the format of generated property phpdoc. The following snippet variables are available: SYMBOL_NAME:SYMBOL KIND: SYMBOL TYPE: SYMBOL NAMESPACE.

### Phpdoc:属性模板

一个描述生成属性phpdoc格式的对象。下列代码片段变量可用:SYMBOL_NAME:符号类型:符号命名空间。

### Intelephense » Phpdoc: Return Void

Adds '@return void' to auto generated phodoc for definitions that do not return a value

### Phpdoc:返回空

为自动生成的phodoc添加` @return void `，用于定义不返回值

Intelephense › Phpdoc: Text Format

snippet

Phpdoc:文本格式

### Intelephense » Phpdoc: Use Fully Qualified Names

Fully qualified names will be used for types when true. When false short type names will be used and imported where appropriate Overrides intelephense.completion.insertUseDeclaration.

### Phpdoc:使用完全限定名称

当类型为true时，将使用全限定名称。当为false时，短类型名称将被使用，并在适当的地方被导入intelephense.completion.insertUseDeclaration。

### Intelephense › References: Exclude

Glob patterns matching files and folders that should be excluded from references search.

**/vendor/**

### 引用:排除

匹配应该排除在引用搜索之外的文件和文件夹的通配模式。

### Intelephense › Rename: Exclude

Glob patterns matching files and folders that should be excluded when renaming symbols. Rename operation will fail if the symbol definition is found in the excluded files/folders

### 重命名:排除

在重命名符号时，匹配应被排除的文件和文件夹的通配模式。如果在排除的文件/文件夹中找到符号定义，则重命名操作将失败

### Intelephense » Rename: Namespace Mode

Controls the scope of a namespace rename operation.

single

### 重命名:名称空间模式

控制命名空间重命名操作的范围。

### Intelephense: Runtime（未同步）

Path to a Node.js executable. Use this if you wish to use a different version of Node.js. Defaults to Node.js shipped with VSCode.

### 执行时间

指向Node.js可执行文件的路径。如果你想使用不同版本的Node.js，请使用它。默认是VSCode附带的Node.js。

### Intelephense: Stubs

Configure stub files for built in symbols and common extensions. The default setting includes PHP core and all bundled extensions.

### 存根

为内置符号和通用扩展配置存根文件。默认设置包括PHP core和所有捆绑的扩展。

### Intelephense › Telemetry: Enabled

Anonymous usage and crash data will be sent to Azure Application Insights. Inherits from telemetry.enableTelemetry.

### 遥测:启用

匿名使用和崩溃数据将被发送到Azure Application Insights。从telemetry.enableTelemetry继承。

### Intelephense » Trace: Server

Traces the communication between VSCode and the intelephense language server.

### 跟踪:服务器

跟踪VSCode和intelephense语言服务器之间的通信。

### Vsintellicode › Features: Api Examples

Promotes IntelliCode API Usage Examples extension to vscode intellicode python users.

### 特点:Api的例子

将IntelliCode API使用示例扩展到vscode IntelliCode python用户。

### Vsintellicode › Features: Api Examplests

Promotes IntelliCode API Usage Examples extension to vscode intellicode typescript/iavascript users.

### 特点:Api Examplests

提升了vscode IntelliCode API使用示例扩展到typescript/iavascript用户。

### Vsintellicode › Features › Python: Deep Learning

### 特性Python:深度学习

### Vsintellicode » Java: Completions Enabled

Enable Visual Studio IntelliCode completions for Java

### Java:启用

为Java启用Visual Studio IntelliCode completion

### Vsintellicode: Model Download Path

Specifies the folder path where downloaded model files are stored. Defaults to the extension install directory if not specified.

### 模型下载路径

指定存储下载模型文件的文件夹路径。如果没有指定，默认为扩展安装目录。

### Vsintellicode » Modify › Editor: Suggest Selection

Control whether Visual Studio IntelliCode will modify editor. suggestSelection if it is set to a value (recentlyUsed) that will result in IntelliCode suggested completion items not being visible.

### 修改编辑器:建议选择

控制visualstudio IntelliCode是否修改编辑器。建议选择如果它被设置为一个值(recentlyUsed)，这个值会导致IntelliCode建议的完成项不可见

### Vsintellicode › Python: Completions Enabled

Enable Visual Studio IntelliCode completions for Python

### Python:启用

为Python启用Visual Studio IntelliCode补全功能

### Vsintellicode » Sql: Completions Enabled

### 启用Sql:完成

### Vsintellicode › TypeScript: Completions Enabled

Enable Visual Studio IntelliCode completions for TypeScript and JavaScript

### TypeScript:启用

为TypeScript和JavaScript启用Visual Studio IntelliCode补全功能