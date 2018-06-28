DECLARE
orgid    number(10):=682;
errorMsg   varchar2(64);
BEGIN
        deleteJudgeServiceMsgByOrgid(orgid,errorMsg);
        dbms_output.put_line(errorMsg);
END;

DECLARE
orgid    number(10):=682;
num    number(10);
errorMsg   varchar2(64);
BEGIN
        deleteJudgeServiceMsgByOrgid(orgid,num,errorMsg);
        dbms_output.put_line(num);
        dbms_output.put_line(errorMsg);
END;

SELECT * FROM organizations ORDER BY ID DESC




create or replace procedure deleteJudgeServiceMsgByOrgid(orgId in number,errorMsg out varchar2)
IS
type v_arr is varray(100) of varchar2(300);  
my_arr v_arr :=v_arr('householdstaffs','floatingpopulations','overseaPersonnel','houseinfo','Builddatas',
'issues','schools','SocialSecurity','safetyProductionKey','fireSafetyKey',
'securitykey','caseinformatization','caseRelevancePersonnel','logisticsSafety','newSocietyOrganizations',
'newEconomicOrganizations','comprehensive','preventiontreatment','serviceTeams',
'comprehensivevideonetwork','cityCommunityVideoMonitoring','buildAdmin','shiftCase'); 
--综治视频管理,下的两个模块统一返回相同信息
msg_arr v_arr :=v_arr('此部门下有户籍人口，不能删除！','此部门下有流动人口，不能删除！',
                      '此部门下有海外人员，不能删除！','此部门下有实有房屋，不能删除！',
                       '此部门下有楼宇信息，不能删除！','此部门下有矛排事件，不能删除！',
                        '此部门下有校园及周边信息，不能删除！','此部门下有重点地区，不能删除！',
                         '此部门下有安全生产重点，不能删除！','此部门下有消防生产重点，不能删除！',
                         '此部门下有治安重点，不能删除！','此部门下有命案信息，不能删除！',
                          '此部门下有案件涉及人员，不能删除！','此部门下有寄送物流安全，不能删除！',
                           '此部门下有社会组织，不能删除！','此部门下非公有制经济组织，不能删除！',
                          ' 此部门下有综治机构，不能删除！','此部门下有群防群治组织，不能删除！',
                            '此部门下有县镇村三级平台建设，不能删除！','此部门下有综治视频管理，不能删除！','此部门下有综治视频管理，不能删除！',
                             '此部门下有楼栋长管理，不能删除！','此部门下有重特大案（事）件，不能删除！'); 


num    number(10):=0;
v_org   varchar2(64):='orgid';
v_sql   varchar2(2000);
BEGIN
 errorMsg:='允许删除';
 for i in 1..my_arr.count  
    loop  
     
        --楼宇和事件中查询条件名字比较特殊
        IF  my_arr(i)='Builddatas' THEN 
            v_org:='organization'; 
        ELSIF my_arr(i)='issues' THEN
            v_org:='occurorg';  
        ELSE 
          v_org:='orgid';
        END IF;
    
        v_sql :='select count(1)  from '|| my_arr(i) ||' where '||v_org||' = ' || orgId;

        execute immediate v_sql INTO num ;
        
        IF  num>0  THEN 
            errorMsg:=msg_arr(i);
            EXIT ;
        END IF;
   end loop;    
end;





