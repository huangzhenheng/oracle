--设置输出状态为开启
set serverout on ;

-- oracle的for循环实例

declare 
  ids number(30) :=0;  
  names varchar2(50) :='测试';  
  age number(30) :=5;  
begin  
  for i in 1..10 loop  
     ids :=ids+1;  
     age :=age+1; 
     names := (names||ids ) ;
     insert into temp_tab values(ids,names,age);  
     names :='测试'; 
  end loop;  
end; 
 
--简单case语句的使用
update temp_tab set age=
        case  when id<=3 then 1
              when id>3 and id<=7 then 2
              else 3
        end;


		
--当该房屋中既有流动人口与户籍人口时，将该房屋改为出租房
		
BEGIN  
FOR myHouse IN (select  tt.houseid ,count(1) mysum from (
select  h.houseid, h.populationtype from househasactualpopulation h where h.populationtype in ('householdStaff','floatingPopulation')
  group by h.houseid, h.populationtype) tt group by tt.houseid having count(*) >1 )   
LOOP  
    IF (myHouse.mysum >1)      
      THEN   
        update houseinfo  set isrentalhouse=1 where id=myHouse.houseid;  
    END IF;  
 END LOOP;  
END; 


-- %ROWTYPE   该数据类型表示一条记录，相当于Java中的一个对象，可以共通过"."点操作符来访问记录中的属性
declare emprow temp_tab%ROWTYPE;

BEGIN  
  
FOR myHouse IN (select * from temp_tab)   
	LOOP  
		select * into emprow from temp_tab where id=myHouse.id;  
		IF (emprow.age <2) 
			THEN   dbms_output.put_line('年龄：'||emprow.age);
		elsif(emprow.age >=2 and emprow.age <3) 
			then dbms_output.put_line('姓名：'||emprow.name);
		else dbms_output.put_line('id：'||emprow.id);    
		END IF;     
	END LOOP;  
END; 


--游标
declare cursor temp_cursor
 is select * from temp_tab;
 tt_cursor temp_tab%Rowtype;
 
 begin
   open temp_cursor;
        loop
            fetch temp_cursor into tt_cursor;
            exit when temp_cursor%notfound;
            dbms_output.put_line(tt_cursor.name);
        end loop;
   close temp_cursor;

 end;
 
 
--User_Source  ，All_Source 表记录了用户自定义的存储过程与函数的元数据
SELECT * FROM User_Source WHERE TYPE='PROCEDURE';--查询存储过程
SELECT * FROM User_Source WHERE TYPE='FUNCTION';--查询自定义函数



DECLARE
 
CURSOR myStu 
    IS 
  SELECT * FROM t_student WHERE ID IN (1,2,3,4,5,6,7);
myRow t_student%ROWTYPE;

BEGIN 
      OPEN myStu;
      LOOP  
           FETCH myStu INTO myRow;
          IF myStu %FOUND  THEN   
          
           Dbms_Output.put_line(myRow.UserName);
          END IF;
          EXIT WHEN myRow.id>6;
      
      END LOOP;

END;


DECLARE 
   total_rows number(2);
BEGIN
   UPDATE t_student SET score = score + 10;
   IF sql%notfound THEN
      dbms_output.put_line('no student selected');
   ELSIF sql%found THEN
      total_rows := sql%rowcount;
      dbms_output.put_line( total_rows || ' student selected ');
   END IF; 
END;
/




declare 
v_date varchar2(8);--定义日期变量
v_sql varchar2(2000);--定义动态sql
v_tablename varchar2(20);--定义动态表名
begin
 select to_char(sysdate,'yyyymmdd') into v_date from dual;--取日期变量
 v_tablename := 'T_'||v_date;--为动态表命名
 v_sql := 'create table '||v_tablename||'
 (id int,
 name varchar2(20))';--为动态sql赋值
 dbms_output.put_line(v_sql);--打印sql语句
 execute immediate v_sql;--执行动态sql
end;


DECLARE 
v_sql varchar2(2000);--定义动态sql
BEGIN 
  FOR myHouse IN (select b.table_name, b.column_name from user_constraints a
 inner join user_cons_columns b on a.constraint_name = b.constraint_name
 where a.r_constraint_name = (select constraint_name  from user_constraints where constraint_type = 'P' and table_name = 'USERS'))   
LOOP  
    v_sql := 'select  * from '||myHouse.Table_Name || ' where ' || myHouse.Column_Name || '=243';
    dbms_output.put_line(v_sql);--打印sql语句
   execute immediate v_sql;
 END LOOP; 
 
 
END;


 declare
   l_org   number(10) ;
   v_sql   varchar2(2000);
 BEGIN
 v_sql :='select id from organizations org where orgname=' ||  ''''||'陕西省'||'''';
   dbms_output.put_line(v_sql);--打印sql语句
   execute immediate v_sql INTO l_org;
   dbms_output.put_line('id:'||l_org);
 end;
       
	   
	   
	     
DECLARE
type v_arr is varray(100) of varchar2(300);  
my_arr v_arr :=v_arr('Positiveinfos','Rectificativepersons', 'Mentalpatients', 'druggys',
 'Superiorvisits', 'Dangerousgoodspractitioners', 'elderlypeople', 'handicappeds', 'Optimalobjects', 'Aidneedpopulation', 
'Precisionpoverty', 'Nurtureswomen', 'veterans', 'Unemployedpeople', 'aidspopulations', 'Idleyouths', 'Leftbehindchilds');  
type v_Cname is varray(100) of varchar2(300);  
my_name v_Cname :=v_Cname('刑释','社区矫正','精神','吸毒','上访','危险品','老年人','残疾','优抚',
    '需救助','精准扶贫','育龄','退伍','失业','艾滋','青少年','留守');
t_FromOrgId   number(10):=9008 ;
num    number(10):=0;
v_sql   varchar2(2000);
 BEGIN
 
 for i in 1..my_arr.count  
    loop  
    v_sql :='select count(1)  from '|| my_arr(i) ||' where orgid = ' || t_FromOrgId;

    execute immediate v_sql INTO num ;
        dbms_output.put_line(my_name(i)||':'||num);
   end loop;  
      
 end;
 

DECLARE
type v_arr is varray(100) of varchar2(300);  
my_arr v_arr :=v_arr('Positiveinfos','Rectificativepersons', 'Mentalpatients', 'druggys',
 'Superiorvisits', 'Dangerousgoodspractitioners', 'elderlypeople', 'handicappeds', 'Optimalobjects', 'Aidneedpopulation', 
'Precisionpoverty', 'Nurtureswomen', 'veterans', 'Unemployedpeople', 'aidspopulations', 'Idleyouths', 'Leftbehindchilds');  
   t_FromOrgId   number(10) :=9003;
   t_ToOrgId     number(10) :=64018067;
   t_ToOrgCode   varchar2(50):='.1.1.6.2.57.8.';
   v_sql   varchar2(2000);
BEGIN  

for i in 1..my_arr.count  
    loop  
    v_sql :='UPDATE '|| my_arr(i) ||' vo SET vo.orgid=' || t_ToOrgId ||',vo.orginternalcode='''||t_ToOrgCode ||'''  where vo.orgId='||t_FromOrgId;
	dbms_output.put_line(v_sql);  
    execute immediate v_sql;
   end loop;  
   
END;


--游标
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
 c_students c_studentsCurT;   --指示c_students 的类型为c_studentsCurT， 而c_studentsCurT是游标类型
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


 
