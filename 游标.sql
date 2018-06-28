使用显式游标的工作包括四个步骤：
声明游标用于初始化在存储器
打开游标分配内存
获取游标检索数据（就是检索结果集合中的数据行，放入指定的输出变量中。）
关闭游标释放分配的内存

游标一旦创建就可以使用循环语句来遍历游标中的数据，从而得到游标中的每一条记录。
例：
  
DECLARE
temp_row t_student%ROWTYPE;
--声明游标用于初始化在存储器
CURSOR c_students is SELECT * FROM t_student;
BEGIN
     --打开游标分配内存
     OPEN c_students;
		 LOOP
		     --获取游标检索数据,FETCH 需要和循环语句一起使用，这样指针会不断前进.
			 FETCH c_students into temp_row;
			 EXIT WHEN c_students%notfound;
			 dbms_output.put_line('ID->'||temp_row.id || '->' || temp_row.username || '->' || temp_row.subject);
		 END LOOP;
		 dbms_output.put_line( '总计'||c_students %rowcount|| ' 条记录');
		 --关闭游标释放分配的内存
     CLOSE c_students;
END;

以上提取数据的方式是单条提取，当数据量很大时，效率就会很不理想，下面是批量提取：

DECLARE
--声明游标用于初始化在存储器
CURSOR c_students is SELECT * FROM t_student;
--创建索引表数据类型 名称为t_student_tab 
TYPE t_student_tab IS TABLE  OF t_student%ROWTYPE;
--创建变量temp_row ,指明其类型为 t_student_tab （索引表类型 ）
temp t_student_tab;
BEGIN
     --打开游标分配内存
     OPEN c_students;
		 LOOP  
			 --一次提取3条存入变量temp 
			 FETCH c_students BULK collect into temp LIMIT 3;
			 --遍历提取的数据，temp.count可以得到temp 中的记录数量
				 FOR i IN 1..temp.count LOOP
				 dbms_output.put_line('ID->'||temp(i).id || '->' || temp(i).username || '->' || temp(i).subject);
				 END LOOP ;
			 EXIT WHEN c_students%notfound;
		 END LOOP;
     dbms_output.put_line( '总计'||c_students %rowcount|| ' 条记录');
     --关闭游标释放分配的内存
    CLOSE c_students;
END;




--oracle 游标变量ref cursor
DECLARE
temp_row t_student%ROWTYPE;
Type c_studentsCurT IS Ref Cursor; --创建一个类型变量c_studentsCurT，它引用游标，游标变量显得更加灵活因为其声明并不绑定指定查询。
                                   --TYPE c_studentsCurT ：定义类型变量
                                   --is ref cursor：相当于数据类型，不过是引用游标的数据类型
c_students c_studentsCurT;       --指示c_students 的类型为c_studentsCurT， 而c_studentsCurT是游标类型
strsql  char(550);
BEGIN
     strsql := 'SELECT * FROM t_student';
     open c_students For strsql;  ----打开动态游标
		 LOOP
			 FETCH c_students into temp_row;
			 EXIT WHEN c_students%notfound;
			 dbms_output.put_line('ID->'||temp_row.id || '->' || temp_row.username || '->' || temp_row.subject);
		 END LOOP;
		 dbms_output.put_line( '总计'||c_students %rowcount|| ' 条记录');
     CLOSE c_students;
END;


 
--游标各属性
DECLARE
temp_row t_student%ROWTYPE;
CURSOR c_students is SELECT * FROM t_student;
BEGIN
     IF c_students%ISOPEN THEN dbms_output.put_line( '游标已经打开');
     else
         dbms_output.put_line( '游标未打开');
         OPEN c_students;
			 IF c_students%ISOPEN THEN dbms_output.put_line( '游标已经打开'); END IF;
			 LOOP
				 FETCH c_students into temp_row;
				 IF c_students%FOUND THEN
					 dbms_output.put_line( '第'||c_students%rowcount|| ' 条');
				     dbms_output.put_line( temp_row.username || '->' || temp_row.subject);
				 ELSE
				     dbms_output.put_line( '游标中没有数据再被提取');
					 EXIT;
				 END IF; 
				 dbms_output.put_line( '总计'||c_students%rowcount|| ' 条记录');
			 END LOOP;
         CLOSE c_students;          
     END IF;    
END;
