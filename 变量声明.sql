--变量1：%TYPE;

引用某个变量或数据库的列作为数据类型来声明一个变量

declare v_name users.username%TYPE;/*使用t_student表中的username列的数据类型*/
begin
select username into v_name from t_student where ID =2;
dbms_output.put_line(v_name );
end;
/

优点：1、变量利用%TYPE 声明就可以完全兼容提取的数据，而不至于出现数据溢出或不符合的情况。
	  2、可以保证变量的数据类型和表中的列类型一致，即是当表中某列的类型发生改变时，
		 PL/SQL块中的数据类型也会和表中列的类型保持一致。

 
记录类型包含一个或多个成员，其中每个成员的数据类型可以不同。记录类型更加适合处理查询结果中多列的情况，最常用的就是在调用某个表中的一行记录时，利用该数据类型（记录类型）存储这行记录，并使用“变量名称.成员名称” 的格式具体地调用其中的数据。
1.自定义的记录类型声明
DECLARE
TYPE readerInfo_rc IS record(ID number(10),NAME varchar(60));
v_readerInfo_rc readerInfo_rc; --变量名称 记录类型
BEGIN 
select ID,NAME INTO v_readerInfo_rc from temp_tab WHERE ID=1;
dbms_output.put_line('id：'||v_readerInfo_rc.id);
dbms_output.put_line('name：'||v_readerInfo_rc.name);
END ;


推荐使用 %TYPE 指明数据类型
DECLARE
TYPE readerInfo_rc IS record(ID temp_tab.id%TYPE,NAME temp_tab.name%TYPE);
v_readerInfo_rc readerInfo_rc;
BEGIN 
select ID,NAME INTO v_readerInfo_rc from temp_tab WHERE ID=1;
dbms_output.put_line('id：'||v_readerInfo_rc.id);
dbms_output.put_line('name：'||v_readerInfo_rc.name);
END ;


2、%ROWTYPE 类型
--该数据类型表示一条记录，相当于Java中的一个对象，可以共通过"."点操作符来访问记录中的属性

declare v_emprow t_student%ROWTYPE;
begin
select * into v_emprow from t_student where ID=2;
dbms_output.put_line(v_emprow .username);
end;
/
 
 
--数组
Oracle中本是没有数组的概念的，数组其实就是一张表(Table),每个数组元素就是表中的一个记录。 
使用数组时，用户可以使用Oracle已经定义好的数组类型，或可根据自己的需要定义数组类型。

Oracle 数组可以分为定长数组和可变长的数组两类 这里主要是一维数组，下标从1开始

1、定长
定义varray 数据类型语法：
TYPE varray_name is VARRAY(size) of element_type [not null];

--3个步骤：定义 、声明、 初始化

declare    
/*定长字符数组，数组大小为10*/   
type type_array is varray(10) of varchar2(20);  --定义    
-- 1、varray(10)表示定义长度为10的数组
--2、varchar2(20)表示数组为字符型，且元素字符串长度不超过20         
my_table type_array;    --声明变量，类型为刚刚定义的数组
begin    
	my_table:=type_array('a','b','b','b','b','b','b','b','b','b');--初始化
    for i in 1..my_table.count   --下标从1开始
    loop     
		 my_table(i):=i;    
		 dbms_output.put_line(my_table(i));    
    end loop;    
end;

--或者声明时直接初始化
declare    
type type_array is varray(10) of varchar2(20);             
my_table type_array :=type_array('a','b','b','b','b','b','b','b','b','b');    
begin    
    for i in 1..my_table.count   
    loop     
		 my_table(i):=i;    
		 dbms_output.put_line(my_table(i));    
      end loop;    
end;

--索引表类型 又被称为关联数组

--实例1
/*可变长字符数组，元素大小30，索引标号integer类型自增长*/  
declare    
type v_table is table of varchar2(30) index by binary_integer;    
--类型可以是前面的类型定义，index by binary_integer子句代表以符号整数为索引，    
--这样访问表类型变量中的数据方法就是“表变量名(索引符号整数)”。    
my_table v_table;    
begin    
     for i in 1..20    
	 loop     
		 my_table(i):=i;    
		 dbms_output.put_line(my_table(i));    
     end loop;    
end;  

--实例2
DECLARE
type v_arr is varray(100) of varchar2(300);  
my_arr v_arr :=v_arr('Positiveinfos','Rectificativepersons', 'Mentalpatients', 'druggys',
 'Superiorvisits', 'Dangerousgoodspractitioners', 'elderlypeople', 'handicappeds', 'Optimalobjects', 'Aidneedpopulation', 
'Precisionpoverty', 'Nurtureswomen', 'veterans', 'Unemployedpeople', 'aidspopulations', 'Idleyouths', 'Leftbehindchilds');  
my_name v_arr :=v_arr('刑释','社区矫正','精神','吸毒','上访','危险品','老年人','残疾','优抚',
 '需救助','精准扶贫','育龄','退伍','失业','艾滋','青少年','留守');
 BEGIN
 for i in 1..my_arr.count  
 loop  
 dbms_output.put_line(my_name(i)||':'||my_arr(i));
 end loop;   
 end;
 
