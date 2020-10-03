---
title: TwinCAT 3.0 简介 
---
## TwinCAT 的含义
TwinCAT 是 “The Windows Control and Automation Technology” 的缩写。中文翻译为基于Windows的自动化控制技术。故名思意，TwinCAT 是运行在 Windows 系统基础上的 PLC 控制系统。
## TwinCAT 3.0 的变化
相较于 TwinCAT 2.0，TwinCAT 3.0 在许多方面都做出了改进优化。
* 支持多核运行
* 支持64位操作系统
* 用Visual Studio 作为编程环境
* 支持 C++ 编程
* 支持 MATLAB/Simulink 
* 增强了 Scope 功能

## TwinCAT 3.0 中新添关键字
* METHOD: 类似FB中的action，不过有自己的局部变量
* PROPERTY: 通过Set和Get对内部变量进行读写
* THIS: 在 Method/Property 中可以访问当前 FB 的实例
* SUPER: 在 Method/Property 中可以访问基类的实例
* EXTENDS: 对 FB 进行继承
* INTERFACE: 定义抽象对象类型（等于没有实现的FB）
* IMPLEMENTS: in the FB：FB 实现接口
