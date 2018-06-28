--一、无参数的存储过程
--是针对表或视图的查询、更新或者删除操作，适合进行数据的转换操作。

create or replace procedure my_proc1
is --或者是 as
--这里可以声明变量
msg varchar2(10):='声明变量';
begin
dbms_output.put_line('hello,Oracle');
dbms_output.put_line(msg);
end;
/

--执行
1.控制台执行
execute my_proc1(); --或者 exec my_proc1;

2.sql窗口执行
begin
 my_proc1; 
end;


二、带传入参数的存储过程

create or replace procedure my_proc2(temp_id in temp_tab.id%TYPE)
is
-- <类型.变量的声明部分>
myName temp_tab.name%TYPE;
begin
select temp_tab.name into myName from temp_tab where temp_tab.id = temp_id;
dbms_output.put_line(myName);
end;
/

--执行
execute my_proc2(1);


三、带返回值得存储过程

create or replace procedure my_proc3(temp_id in temp_tab.id%TYPE,temp_name out temp_tab.name%TYPE)
is
begin
select t.name into temp_name from temp_tab t where t.id = temp_id;
end;
/

--调用--
declare myName temp_tab.name%TYPE;
begin
my_proc3(1,myName);
dbms_output.put_line(myName);
end;
/
 
--删除存储过程：
drop procedure 存储过程名称

--User_Source 表记录了用户自定义的存储过程的元数据
SELECT * FROM User_Source WHERE TYPE='PROCEDURE';
或者pl/sql工具中procedures 中找到相应的过程，右键查看

--异常
用户定义的异常必须声明，然后明确地提出使用一个RAISE语句，进入异常流程


DECLARE
 c_id t_student.id%type := 2;
 temp_row t_student%ROWTYPE;
 ex_invalid_id  EXCEPTION;
BEGIN
   IF c_id <= 1 THEN
      RAISE ex_invalid_id;
   ELSE
      SELECT * INTO temp_row FROM t_student WHERE ID=c_id;
  dbms_output.put_line(temp_row.username);
   END IF;
EXCEPTION
   WHEN ex_invalid_id THEN
  dbms_output.put_line('ID must be greater than zero!');
   WHEN no_data_found THEN
  dbms_output.put_line('No such customer!');
   WHEN others THEN
  dbms_output.put_line('Error!'); 
END;

  
