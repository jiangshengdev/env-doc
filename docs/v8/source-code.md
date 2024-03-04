---
sidebar_position: 2
---

# 获取 V8 源代码

## 说明

1. 首先，在 macOS 上安装 Git 和 [depot_tools](./get-depot-tools)。

2. 通过执行以下命令在终端中更新 depot_tools。

   ```shell
   gclient
   ```

3. 省略

4. 现在，获取 V8 源代码，包括所有分支和依赖项：

   ```shell
   mkdir ~/v8
   cd ~/v8
   fetch v8
   cd v8
   ```

在那之后，这将导致你处于一个分离的 HEAD 状态。

你可以选择性地指定新分支应如何被跟踪：

```shell
git config branch.autosetupmerge always
git config branch.autosetuprebase always
```

或者，你也可以通过如下命令创建一个新的本地分支（推荐做法）：

```shell
git new-branch fix-bug-1234
```

## 保持最新状态

使用 `git pull` 更新你当前的分支。请注意，如果你当前不在任何分支上，应使用 `git fetch` 而不是 `git pull` 来更新。

```shell
git pull
```

有时 V8 的依赖项会更新。你可以通过运行以下命令来同步这些更新：

```shell
gclient sync
```
