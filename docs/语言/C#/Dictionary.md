---
title: C# Dictionay 笔记
---
资料来源：https://www.cnblogs.com/InCerry/p/10325290.html

## C# 哈希表 Dictionary
### 什么是哈希表
散列表（hash table，也叫哈希表），是根据关键码值（key value）而直接进行访问的数据结构。也就是说，它通过关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。

### 基本概念
若关键字为K，则其值存放在f(k)的存储位置上。由此，不需要比较便可直接取得所查记录。称这个对应关系f为散列函数，按这个思想建立的表为散列表。
对不同的关键字可能得到同一散列地址，即 k1 != k2， 而f(k1) == f(k2)，这种现象称为冲突（英语Collision）。具有相同函数值的关键字对该散列函数来说称作同义词。综上所述，根据散列函数f(k)和处理冲突的方法将一组关键字映射到一个有限的连续地址集（区间）上，并以关键字在地址集中的“像”作为记录在表中的存储位置，这种表便称为散列表，这一映射过程称为散列造表或散列，所得的存储位置称散列地址。
若对于关键字集合中的人一个关键字，经散列函数映象到地址集合中任何一个地址的概率是相等的，则称此类散列函数为均匀散列函数（Uniform Hash function），这就是使关键字经过散列函数得到一个“随机的地址”，从而减少冲突。
### C#中的 哈希表
Java 中的哈希表使用 Hash Map类来实现。在C#中，官方的哈希表实现为 Dictionary。
可能很多读者会想到 Hashtable类，它也是哈希表，但所有元素都为object类型，不支持泛型。官方推荐使用 Dictionary 来替代 Hashtable，具体可以看下面两篇文章：
https://docs.microsoft.com/zh-cn/dotnet/api/system.collections.hashtable?f1url=https%3A%2F%2Fmsdn.microsoft.com%2Fquery%2Fdev16.query%3FappId%3DDev16IDEF1%26l%3DZH-CN%26k%3Dk(System.Collections.Hashtable);k(DevLang-csharp)%26rd%3Dtrue&view=netframework-4.8
https://github.com/dotnet/platform-compat/blob/master/docs/DE0006.md
