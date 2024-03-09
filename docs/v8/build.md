---
sidebar_position: 3
---

# 从源代码构建 V8

为了在 macOS 上为 arm64 从零开始构建 V8，请按照以下步骤进行。

## 获取 V8 源代码

请跟随指南中的说明来 [获取 V8 源代码](./source-code)。

## 安装构建依赖项

1. 对于 macOS：安装 Xcode 并接受其许可协议。（如果你之前已经单独安装了 Command Line Tools for Xcode，请先卸载它们。）

2. 确保你处于 V8 源代码目录中。如果你按照前一节的每个步骤操作了，那么你已经在正确的位置了。

3. 下载所有的构建依赖项：

   ```shell
   gclient sync
   ```

## 构建 V8

1. 确保你处于 V8 源代码目录，并且当前位于 `main` 分支上。

   ```shell
   cd ~/v8/v8
   git checkout main
   ```

2. 拉取最新更改并安装所有新的构建依赖项：

   ```shell
   git pull && gclient sync
   ```

3. 编译源代码：

   ```shell
   tools/dev/gm.py arm64.debug
   ```

   或者，编译源代码并立即运行测试：

   ```shell
   tools/dev/gm.py arm64.debug.check
   ```
