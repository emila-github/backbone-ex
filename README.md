
运行环境

	npm config set @173:registry http://10.5.17.188:4873
	npm --registry=https://registry.npm.taobao.org install @173/ued -g

# 使用步骤

- `ued next-init simpleWeb2017` 创建 demo 文件夹
- `cd demo && npm install` 安装依赖
- `git init && git add . && git commit -m 'Init Repo'`
- `ued server` 启动 server，此时可以开发
- `ued deploy` 编译并发布，中途需输入工号

# 依赖

- svn

# 开发 ued-cli 所需依赖

- svn
- make
- npm

# 命令帮助功能

```bash
ued help
```

```bash
  usage: ued [commands]

  commands:
    help                  print help text
    sync                  上传指定目录到 CDN 的 SVN 仓库内, 用户密码可以读取当前目录的 .env 文件变量[工号（CDN_USERNAME），密码（CDN_PASSWORD）]
    build                 编译项目
    publish               发布 CDN 仓库的文件到线上
    preview               发布项目到 staging 服务器
    deploy                发布项目（build + sync + publish）
    next-init directoryName    用新方式初始化项目
    server                启动 server, 默认端口是 3000
    version               查看 ued-cli 版本号
    info                  查看当前项目的信息
    redmine [ticketUrl]   调用 git commit 自动附加上 remdmine 上获取的 message

  commands alias:

    help                  h
    deploy                d
    build                 b
    info                  i
    server                s
    redmine               r
    preview               p
```





## 需求地址 ##
\\\\samba.local.17173.com\XXX

## 上线地址 ##
http://xxx.17173.com/simpleweb2017/

## 预览地址 ##
http://page.local.17173.com/simpleweb2017/index.shtml

## 接口文档 ##




## 注意事项 ##


