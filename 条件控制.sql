
--IF条件语句

if语句有一下3中使用形式：

--第一种：IF-THEN语句。语法为：
IF condition THEN 
 statements;
END IF;

--第二种：IF-THEN-ELSE语句。语法是：
IF condition THEN
 statements1; 
ELSE 
 statements2;
END IF;


--第三种：IF-THEN-ELSIF语句。语法是：（注意：它是ELSIF, 而不是 ELSEIF。）
IF  condition1 THEN 
 statements1; 
ELSIF condition2 THEN
 statements2;  
ELSIF condition3 THEN
 statements3; 
ELSE 
 statements4; 
END IF;


--综合事例：
declare 
myval number(10) := 10;
begin
if myval > 10 then
 dbms_output.put_line('>10');
elsif myval = 10 then
 dbms_output.put_line('=10');
else
 dbms_output.put_line('<10');
end if;
end;
/


--函数
decode(value,if1,then1,if2,then2,if3,then3,....else)
SELECT decode(t.username,'admin','这是admin','Jim','这是Jim','谁也不是') FROM users t;


--CASE条件语句

--语法：
CASE selector
    WHEN 'value1' THEN S1;
    WHEN 'value2' THEN S2;
    WHEN 'value3' THEN S3;
       ...
    ELSE Sn; -- default case
   END CASE;

--例子：
DECLARE
 grade char(1) := 'A';
BEGIN
   CASE grade
      when 'A' then dbms_output.put_line('Excellent');
      when 'B' then dbms_output.put_line('Very good');
      when 'C' then dbms_output.put_line('Well done');
      when 'D' then dbms_output.put_line('You passed');
      when 'F' then dbms_output.put_line('Better try again');
      else dbms_output.put_line('No such grade');
   END CASE;
END;
/

update temp_tab set age=
case when id<=3 then 1
     when id>3 and id<=7 then 2
     else 3
end;


--可用于行列转换
SELECT na,SUM(yw),SUM(sx),SUM(yy) FROM(
SELECT t.username na ,
 (CASE WHEN t.subject='语文' THEN t.score ELSE 0 END) yw ,
 (CASE WHEN t.subject='数学' THEN t.score ELSE 0 END) sx ,
 (CASE WHEN t.subject='英语' THEN t.score ELSE 0 END) yy 
FROM t_student t) 
GROUP BY na

 
