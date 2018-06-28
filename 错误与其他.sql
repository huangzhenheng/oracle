错误1：列名无效
<resultMap id="myIssueViewResult" class="myIssueViewVo">
    <result property="serialNumber" column="serialNumber" />
    <result property="subject" column="subject" />
    <result property="issueKind" column="{id=issueKind}" select="myIssueReport.getDisplayname" />
    <result property="caseEvaluation" column="{id=caseevaluation}" select="myIssueReport.getDisplayname" />
    <result property="warningLevel" column="{id=warningLevel}" select="myIssueReport.getDisplayname" />
</resultMap>

<select id="findHandlingIssueByParams" parameterClass="map" resultMap="myIssueViewResult">
 select i.serialnumber, i.subject, i.issuekind,i.caseevaluation,i.warninglevel warningLevel,i.infosource,i.status
    from issues i
</select>


resultMap (resultMap中property区分大小写，column不区分)
 当查询结果用 resultMap 接收时，不管返回多少列，resultMap 中的属性必须返回。 否则会包列名无效。

resultMap 的字段数 要小于等于 查询返回数

当我们给一个查询结果新增一个 <result property="id" column="id"/> 时，
若报 列名无效无效， 如果你不能确定该 resultMap 都在什么地方被使用 我的建议是重新写一个 resultMap 去继承原来的resultMap 。

2、resultMap的迭代查询
 <result property="issueKind" column="{id=issueKind,projectId=projectid}" select="myIssueReport.getDisplayname" />
在ibatis的resultMap的result中使用“select”是一种迭代查询，
也就是例子中将column指定的一项或多项作为参数（select接收参数1=issueKind,select接收参数2=projectid}），
传入并执行指定的select语句（myIssueReport.getDisplayname），并将查询结果赋给property="issueKind"
 子查询不要带parameterClass     
 column="{id=issueKind,projectId=projectid}" 等号前的变量名要与子查询中变量##中的一致
 
