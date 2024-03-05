---
sidebar_position: 3
---

# 获取仓库工具

## 克隆 depot_tools 仓库

首先，创建一个目录并克隆 `depot_tools` 仓库到本地：

```shell
mkdir -p ~/chromium/tools
cd ~/chromium/tools
git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git
```

## 配置环境变量

然后，使用以下命令将 `depot_tools` 路径添加到你的 `~/.zshrc` 文件中，确保你可以在任何位置使用这些工具：

```shell
echo 'export PATH=~/chromium/tools/depot_tools:$PATH' >> ~/.zshrc
```

这条命令会在 `~/.zshrc` 文件的末尾追加 `export PATH` 命令，无需手动编辑文件。

## 应用更改

为了使更改生效，请重新加载 `~/.zshrc` 文件或重启终端：

```shell
source ~/.zshrc
```

或者，你可以简单地关闭并重新打开你的终端窗口。
