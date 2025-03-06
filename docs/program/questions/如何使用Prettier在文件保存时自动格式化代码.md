# 如何使用Prettier在文件保存时自动格式化代码

### 1. **安装必要的扩展**

首先，确保你已经安装了适用于JavaScript/TypeScript和React的格式化工具。推荐使用Prettier，因为它是Next.js和React项目的常用选择。

-   打开VSCode，点击左侧活动栏中的“Extensions”图标（或按`Ctrl + Shift + X`）。
-   搜索“Prettier - Code formatter”，然后点击“Install”按钮。

### 2. **配置Prettier**

虽然Prettier通常不需要额外的配置，但你可以根据需要在项目根目录创建一个`.prettierrc`文件来自定义格式化规则。

```
// .prettierrc
{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true
}
```

#### **常用配置选项**

以下是Prettier的一些常用配置选项及其说明：

-   **`printWidth`**：指定每行的字符数，超过这个数值时会换行。默认值是80。

    ```
    "printWidth": 100
    ```

-   **`tabWidth`**：指定每个缩进级别的空格数。默认值是2。

    ```
    "tabWidth": 2
    ```

-   **`useTabs`**：是否使用制表符（`\t`）而不是空格进行缩进。默认值是`false`。

    ```
    "useTabs": false
    ```

-   **`semi`**：是否在语句末尾添加分号。默认值是`true`。

    ```
    "semi": true
    ```

-   **`singleQuote`**：是否使用单引号而不是双引号。默认值是`false`。

    ```
    "singleQuote": true
    ```

-   **`trailingComma`**：指定在多行对象、数组和参数列表中是否添加尾随逗号。选项包括`none`、`es5`和`all`。默认值是`es5`。

    ```
    "trailingComma": "es5"
    ```

-   **`bracketSpacing`**：在对象字面量中，是否在花括号内添加空格。默认值是`true`。

    ```
    "bracketSpacing": true
    ```

-   **`jsxBracketSameLine`**：在JSX中，是否将闭合的标签放在同一行。默认值是`false`。

    ```
    "jsxBracketSameLine": false
    ```

-   **`arrowParens`**：在箭头函数中，是否总是添加括号。选项包括`always`和`avoid`。默认值是`always`。

    ```
    "arrowParens": "always"
    ```

-   **`proseWrap`**：在Markdown文件中，如何处理长文本。选项包括`preserve`、`always`和`never`。默认值是`preserve`。

    ```
    "proseWrap": "preserve"
    ```

-   **`htmlWhitespaceSensitivity`**：在HTML文件中，如何处理空白字符。选项包括`css`、`strict`和`ignore`。默认值是`css`。

    ```
    "htmlWhitespaceSensitivity": "css"
    ```

-   **`endOfLine`**：指定行尾字符。选项包括`lf`、`crlf`和`cr`。默认值是`lf`。

    ```
    "endOfLine": "lf"
    ```

### 3. **配置VSCode设置**

接下来，需要配置VSCode以在保存文件时使用Prettier自动格式化代码。

-   按`Ctrl + ,`（Windows/Linux）或`Cmd + ,`（macOS）打开VSCode设置。
-   在设置中搜索“Format On Save”，然后勾选“Editor: Format On Save”选项。

### 4. **指定默认格式化程序**

确保VSCode使用Prettier作为默认的格式化程序。

-   在设置中搜索“Default Formatter”，然后选择“Prettier - Code formatter”作为“Editor: Default Formatter”。

### 5. **验证配置**

现在，每当你保存一个JavaScript/TypeScript/React文件时，VSCode应该会自动使用Prettier来格式化代码。你可以通过编辑和保存一个文件来验证这个配置是否生效。

### 注意事项

-   **项目特定配置**：如果你有项目特定的格式化需求，可以在`.vscode/settings.json`文件中添加项目特定的设置。例如：

    ```
    {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      }
    }
    ```

-   **与其他格式化工具的冲突**：如果你的项目中使用了其他格式化工具（如ESLint），确保它们与Prettier兼容。你可以使用`prettier-eslint`或配置ESLint以忽略格式化问题，让Prettier处理格式化。

-   **性能考虑**：对于大型项目，频繁的自动格式化可能会影响保存文件的速度。如果遇到性能问题，可以考虑在特定文件类型或特定目录下禁用自动格式化。