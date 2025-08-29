# 解决git push无法提交无响应的问题

首先要确保你的电脑已经配置了科学上网工具，它们通常会在本地开启一个 HTTP/Socks 代理端口。你可以为 Git 单独配置这个代理。

1.  **查看你的代理软件端口**：打开你的代理软件，找到本地代理端口号。常见的是 **HTTP 代理：127.0.0.1:7890** 或 **Socks5 代理：127.0.0.1:7891**（具体端口请以你的软件设置为准）。

2.  **为 Git 配置代理**：

    ```
    # 只为 GitHub 设置代理
    git config --global http.https://github.com.proxy http://127.0.0.1:7890
    git config --global https.https://github.com.proxy https://127.0.0.1:7890
    ```

3.  **取消代理**（如果后续不需要了）：

    bash

    ```
    git config --global --unset http.proxy
    git config --global --unset https.proxy
    ```