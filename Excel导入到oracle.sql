1、在Excle中，将数据整理成类似Oracle表的格式;
2、将Excle 另存为 文本文件(制表符分隔)(*.txt);
3、打开PL/SQL，连接到需要导入的那个库中，然后工具栏中点击 tools --> Text Importer （中文为：工具 --> 文件导入）
4、打开之后，点击导入文件按钮
5、选择刚刚另存为的 文件，打开；
6、打开之后，可以看到数据已经展示出来了，然后根据 Excel表中的数据，
	看是否有表头，有的话，就勾选上图中的按钮，
	没有勾选的情况数据（没有勾选，会将表头移一条记录插入到表中）
7、切换标签页，然后在输入表名，以及字段，如果是表已经创建完成的话，直接选择对应表中的字段就可以了
8、导入文件，如果没有输入的表，没有，需要新建一个表，然后再次导入
9、导入完成，查询数据
连接：https://jingyan.baidu.com/article/eb9f7b6d75e8b8869264e84e.html