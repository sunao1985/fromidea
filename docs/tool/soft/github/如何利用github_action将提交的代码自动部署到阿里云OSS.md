# 如何利用github action将提交的代码自动部署到阿里云OSS



### 操作步骤



1.   在阿里云控制台创建一个新的AccessKey，并记录下AccessKeyId和AccessKeySecret。

2.   在GitHub仓库中创建一个名为```.github/workflows/sync.yml```的文件，并将以下内容复制到该文件中：

```yaml
name: Sync to OSS

on:
  push:
    branches:
      - main # 这里可以根据您的需要更改分支名称

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      # 执行应用打包步骤
      - name: Install dependencies and build
        run: |
          npm install
          npm run docs:build
      - name: Install ossutil
        run: |
          curl -L https://gosspublic.alicdn.com/ossutil/1.7.0/ossutil64 -o /usr/local/bin/ossutil
          chmod +x /usr/local/bin/ossutil
      - name: Sync files to OSS
        env:
          ACCESS_KEY_ID: ${{ secrets.ACCESS_KEY_ID }}
          ACCESS_KEY_SECRET: ${{ secrets.ACCESS_KEY_SECRET }}
        run: |
          ossutil cp -r ./docs/.vuepress/dist oss://your-bucket-name/path/to/files --access-key-id=$ACCESS_KEY_ID --access-key-secret=$ACCESS_KEY_SECRET --endpoint=your-endpoint

```

3.   替换上述代码中的`your-bucket-name`、`path/to/files`和`your-endpoint`为您的实际值。同时，将`${{ secrets.ACCESS_KEY_ID }}`和`${{ secrets.ACCESS_KEY_SECRET }}`替换为您在第1步中创建的AccessKeyId和AccessKeySecret。
4.   将更改提交到GitHub仓库后，GitHub Actions将自动运行并同步您的代码到阿里云OSS。



### 扩展功能



*   如果需要在部署代码前，先清空OSS内历史文件，可以在同步代码前，添加删除数据的命令：

```yaml
      - name: Delete existing files in OSS
        env:
          ACCESS_KEY_ID: ${{ secrets.ACCESS_KEY_ID }}
          ACCESS_KEY_SECRET: ${{ secrets.ACCESS_KEY_SECRET }}
        run: |
          ossutil rm -rf oss://your-bucket-name/path/to/files --access-key-id=$ACCESS_KEY_ID --access-key-secret=$ACCESS_KEY_SECRET --endpoint=your-endpoint

```

注意，需要将`your-bucket-name`、`path/to/files`和`your-endpoint`替换为您的实际值。

*   如果还需要在工作流程中设置访问私有存储库所需的凭据。具体方式是，在GitHub存储库的Settings页面中，选择Secrets选项卡，然后添加一个名为`PAT`的新密钥，值为您的个人访问令牌（Personal Access Token）。在工作流程中使用`${{ secrets.PAT }}`引用此密钥即可。