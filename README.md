# windows提权EXP搜索辅助工具

----

在火车上面闲着没事写的轮子,点击使用： [http://neargle.github.io/win-powerup-exp-index](http://neargle.github.io/win-powerup-exp-index)

![image](https://user-images.githubusercontent.com/7868679/84858397-ae5e6f80-b09d-11ea-95e4-f53e1941343c.png)

# About

在火车上闲着没事干，突然发现电脑内还有这样一个列表，就想看看在没有网络的情况下自己能不能写出一个东西来。用SublimeText3+Dash3+Chrome三个软件写了这个东西。回家做了一个小手术，躺在床上没事干就扔了上来。

很常见，是一个轮子。但是一般都是windows上的桌面程序，很少有web端而且能持续提供服务的。我就直接扔github page上有时间来更新一下json文件。
或许之后还会更新各个exploit的下载，如果我不那么懒的话 -A-。

# 使用

运行cmd命令`systeminfo`获取信息，粘贴systeminfo信息或只粘贴补丁信息到编辑框内。

例如：

> [01]: KB3124263
> [02]: KB3135173
> [03]: KB3139907
> [04]: KB3140741
> [05]: KB3140743
> [06]: KB3140768
> [07]: KB3149135
> [08]: KB3172729
> [09]: KB3173428
> [10]: KB3181403
> [11]: KB3214628
> [12]: KB3147458

或者直接粘贴所有`systeminfo`:

> $ systeminfo
> 主机名:           NEARGLE-77359B7
> OS 名称:          Microsoft Windows XP Professional
> OS 版本:          5.1.2600 Service Pack 3 Build 2600
> OS 制造商:        Microsoft Corporation
> OS 配置:          独立工作站
> OS 构件类型:      Uniprocessor Free
> 注册的所有人:     Neargle
> ......

就能对应自己的系统版本找到适合的Exploit编号，然后搜索引擎吧0-0




