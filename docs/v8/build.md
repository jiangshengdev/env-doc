# 从源代码构建V8

为了在macOS上为arm64从零开始构建V8，请按照以下步骤进行。

## 获取V8源代码

请根据我们指南中的说明来[获取V8源代码](./source-code)。

## 安装构建依赖项

1. 对于macOS：安装Xcode并接受其许可协议。（如果你已单独安装了Command Line Tools for Xcode，请先将它们卸载。）

2. 确保你处于V8源代码目录中。如果你按照前一节的每个步骤操作了，那么你已经在正确的位置了。

3. 下载所有的构建依赖项：

   ```shell
   gclient sync
   ```

## 构建V8

1. 确保你处于主分支的V8源代码目录中。

   ```shell
   cd /path/to/v8
   ```

2. 拉取最新的更改并安装任何新的构建依赖项：
   ```shell
   git pull && gclient sync
   ```
3. 编译源代码：

   ```shell
   tools/dev/gm.py arm64.release
   ```

   或者，编译源代码并立即运行测试：

   ```shell
   tools/dev/gm.py arm64.release.check
   ```
