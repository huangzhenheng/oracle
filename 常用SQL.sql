--Oracle and Java
--驱动：oracle.jdbc.driver.OracleDriver
--连接字符串：jdbc:oracle:thin:@192.168.0.77:1521:ORCL

--日期转换
	select to_char(sysdate,'yyyy-MM-dd HH24:mi:ss') from dual;
	select to_date('2017-02-01 00:00:00','yyyy-MM-dd HH24:mi:ss') from dual;
Oracle递归

select * from organizations o 
start with o.id = 20149
connect by prior o.id = o.parentid;
--prior在左查的是子

select * from organizations o 
start with o.id = 20149
connect by  o.id = prior o.parentid;
--prior在右查的是父


--表操作：
	添加列：alter table t_student add(sex nvarchar2(2));
	修改列：alter table t_student modify (codenum nvarchar2(20));
	删除列：alter table t_student drop column sex;
	重命名列：alter table t_student rename column age to nianling;
	重命名表：rename t_student to t_xuesheng;

	主键约束：alter table t_student add constraint PK_t_student primary key(stuid);
	检查约束：alter table t_student add constraint ck_t_student_age check(age>18 and age<30);
	默认约束：alter table t_student modify (address nvarchar2(200) default 'China');
	唯一约束：alter table t_student add constraint un_t_student_codenum unique(codenum);
	外键约束：alter table t_score add constraint fk_t_score_t_student foreign key(stuid) references t_student(stuid);
	删除约束：alter table t_score drop constraint fk_t_score_t_student;

--添加表注释 
comment on table t_student is '学生信息表';
--添加列注释
comment on column t_student.age is '学生年龄';
	
--复制表，创建临时表 conn_temp，将 conn 表中的数据复制到 conn_temp 表中，表结构相同，但是键不能复制；
create table conn_temp as select * from conn;


--创建角色，并赋权
create user userName identified by passWord;
grant connect,resource to userName;

--case语句
select u.id,u.username ,case when id<=10 then '101'
when id>10 and id<=10 then '102'
when id>20 and id <=30 then '103'
else '104'
end as DDD
 from users  u
知识点1：序列

--有关序列的操作
--1.创建序列
create sequence id_seq
minvalue 1
maxvalue 9999999999
start with 1
increment by 1
cache 20;

--2.删除序列
drop sequence id_seq;

--获取序列信息（查看所有的序列）：
select sequence_name,max_value,min_value,increment_by,last_number from user_sequences;

--nextval用于获取序列中下一个有效的序列值：
select id_seq.nextval from dual;

--currval用于获取序列中当前的有效序列值，在使用之前必须先使用nextval获取序列值：
select id_seq.currval from dual;

注：可用使用的情况
1.select语句的select列表中，不包含子查询
2.insert语句的values子句中
3.update的set子句中


知识点2：索引

--创建索引，本例会创建一个简单的索引，名为 "PersonIndex"，在 Person表的LastName列（允许使用重复的值）
create index PersonIndex on Person(LastName);

--如果您希望以降序索引某个列中的值，您可以在列名称之后添加保留字 DESC：
create index PersonIndex on Person(LastName DESC);

--在表上创建一个唯一的索引。唯一的索引意味着两个行不能拥有相同的索引值。
--用户可以在列上手动创建非唯一索引（用户可以创建唯一索引，但不推荐，唯一索引应该由unique约束来自动创建）
create unique index PersonIndex on Person(LastName);

--查询索引：（会查询出所有的索引,where条件表明要大写）
select * from user_indexes;
select * from user_indexes where table_name='USERS';

--删除索引：
drop index PersonIndex;

一、字符函数
	1. tower('ABC')  将字符转换为小写
	2. upper('abc')  将字符转换为大写
	3. initcap('abc') 首字符大写，其他字符小写
	4. concat('abc','def')   连接字符串,但是concat函数只能传入2个参数，多个可以嵌套comcat,或者使用连接符 ||
	5. substr(column,startIndex,num) 截取字符串，oracle字符下标从1开始
	 即substr(列名,开始的索引,从开始的索引起，获取几个字符)
	 获取前三个字符：select ename,substr(ename,0,3) from emp
	 获取后两个字符：select ename,substr(ename,-2,2) from emp;
	6. instr(sourceString,destString,start,appearPosition) 返回该下标
	  即instr('源字符串' , '目标字符串' ,'开始位置','第几次出现')
	7. length() 获取字符串长度


Oracle数据类型
--文本型
varchar2(n)：存放变长的字符串，长度为n字节，n最大可以到4000字节
nvarchar2(n)：存放变长的Unicode字符串，长度为n字节，最大为4000字节
char(n)：存放固定长度的字符串，长度为n字节，最大为2000字节
nchar(n)：存放固定长度的Unicode字符串，长度为n字节，最大为2000字节
--数值型
number(n,[m])：可存放数值型数据，总长度为n位数（默认38位）；n最多38为数；此外number可以指定m位小数。
--日期时间型
date：存放日期时间型，长度为7个字节
使用sysdate系统函数可以获取系统当前日期和时间
select sysdate from dual
dual为临时表，为了配合查询语句的完整性而设
1、
varchar2(N)：可以存储N byte长度，与字符数无关；最大值是 4000，
varchar2(N char)：可以存储N个字符（包括字母和汉字），与字节（byte）长度无关；最大值是 4000，

2、如：
varchar2(3),可以存储3个byte长度，如'啊a'、'aaa'，与字符数无关；
varchar2(3 char)，可以存储3个字符（包括字母和汉字），如'啊啊啊'、'aaa'、'啊aa'，与字节（byte）长度无关；

1、NVARCHAR2(10)是可以存进去10个汉字的，如果用来存英文也只能存10个字符。
2、而VARCHAR2(10)的话，则只能存进5个汉字，英文则可以存10个。  

