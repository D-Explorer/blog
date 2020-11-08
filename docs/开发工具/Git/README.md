---
title:GIt 使用基础
---
## 获取项目的 Git 仓库
获取项目仓库的方法有两种：
1. 从当前目录初始化
2. 从现有仓库克隆

### 从当前仓库初始化
要对现有的某个项目开始用 Git 管理，只需到此项目所在的目录，执行：
```Git
git init
```
初始化后，在当前目录下会出现一个名为`.git`的目录，所有的 Git 需要的数据和资源都存放在这个目录中。

### 从现有仓库克隆
如果像拷贝别人现有的仓库（如Github上的众多项目），这就需要使用`git clone`命令。
克隆仓库的命令格式为`git clone [url]`。比如，要克隆这个项目的 Git 代码仓库，可以使用下面的命令：
```Git
git clone https://github.com/D-Explorer/blog.git
```
当运行完后，会在当前目录生成`blog`文件夹，其中包含着morethink.top的所有内容。

如果想要在克隆的时候自定义项目目录名称，可以在上面命令最后指定：
```git
git clone https://github.com/D-Explorer/blog.git myblog
```
这样创建的目录名称就不是blog而是myblog。
