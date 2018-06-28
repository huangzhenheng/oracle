--一、基本的循环结构封装在LOOP和END LOOP语句之间语句序列；
declare temp number(3) := 0;
total number(5) := 0;
begin
	loop
    temp := temp + 1;
    total := total + temp;
		if temp >= 100 then exit;
		end if;
     /*或者退出采用exit when temp >= 100;*/
    end loop;
	dbms_output.put_line('total:'||to_char(total));
end;
/

--二、while循环
1.语法：
while 条件语句 LOOP 
--执行语句 
LOOP;

2.案例
declare temp number(3) := 0;
total number(5) := 0;
begin
   while temp<100 loop
   temp := temp + 1;
   total := total + temp;
  end loop;
   dbms_output.put_line('total' || to_char(total));
end;
/

--三、for循环
1.语法：
For ... in ... LOOP 
--执行语句 
end LOOP;

2.案例：
--当返回是一个集合时，一定要变量加点
begin
 for temp in (select * from users) loop
 dbms_output.put_line('temp :' || temp.id);
 end loop;
end;
/

3.反转FOR循环语句 通过使用REVERSE关键字顺序相反
declare temp number(3) := 0;
begin
 for temp in REVERSE 0..10 loop
 dbms_output.put_line('temp :' || temp);
 end loop;
end;
/


--注意
1.使用exit退出循环;
2.CONTINUE

BEGIN  
	FOR s IN (SELECT * FROM t_student)   
	LOOP  
		--IF s.username !='Tom' THEN CONTINUE; END IF;
		Dbms_Output.put_line('姓名：'||s.username);
	END LOOP;  
END; 
 
 




