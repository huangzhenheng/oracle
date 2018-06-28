jQuery入门
学习要点：
1.什么是 jQuery
2.jQuery 的版本
3.是否兼容低版本 IE
4.下载及运行 jQuery

什么是 jQuery
jQuery是一个JavaScript库，它通过封装原生的JavaScript函数得到一整套定义好的方法。
它的作者是John Resig，于2006年创建的一个开源项目，随着越来越多开发者的加入，
jQuery已经集成了JavaScript、 CSS、 DOM和Ajax于一体的强大功能。 
它可以用最少的代码，完成更多复杂而困难的功能，从而得到了开发者的青睐。
主旨：以更少的代码、实现更多的功能

jQuery官网:jQuery.com
jQuery版本:2.x更小更快，但不支持低版本IE

jQuery下载:http://jquery.com/download/
第一个程序:
//单击按钮弹窗
$(function () {
	$('input').click(function () {
		alert('第一个 jQuery 程序！');
	});
});

基础核心
学习要点：
1.代码风格
2.加载模式
3.对象互换
4.多个库之间的冲突

代码风格
在jQuery程序中，不管是页面元素的选择、内置的功能函数，都是美元符号“$”来起
始的。而这个“$”就是jQuery当中最重要且独有的对象：jQuery对象，所以我们在页面元
素选择或执行功能函数的时候可以这么写

$(function () {});//执行一个匿名函数
$(‘#box’);//进行执行的ID元素选择
$(‘#box’).css(‘color’, ‘red’);//执行功能函数
由于$本身就是jQuery对象的缩写形式，那么也就是说上面的三段代码也可以写成如下
jQuery(function () {});
jQuery(‘#box’);
jQuery(‘#box’).css(‘color’, ‘red’);

执行了.css()这个功能函数后，最终返回的还是jQuery对象，那么也就
是说，jQuery的代码模式是采用的连缀方式，可以不停的连续调用功能函数。
$('#box').css('color', 'red')attr; //链式调用

加载模式
延迟加载:
$(document).ready(function () {});
简写形式：$(function () {});
只需要等待网页中的DOM结构加载完毕，就能执行包裹的代码。
可以执行多次，不会被上一次覆盖。
在实际应用中，我们都很少直接去使用window.onload，因为他需要等待图片之类的大
型元素加载完毕后才能执行JS代码。

对象互换
jQuery 对象虽然是 jQuery 库独有的对象，但它也是通过JavaScript封装而来。
alert($);//jQuery 对象方法内部
alert($());//jQuery 对象返回的对象，还是 jQuery
alert($('#box'));//包裹ID元素返回对象，还是 jQuery

jQuery 想要达到获取原生的 DOM 对象，可以这么处理：
alert($('#box').get(0));//ID 元素的第一个原生 DOM

多个库之间的冲突
jQuery.noConflict();//将$符所有权剔除
var $$ = jQuery;//创建一个$$的 jQuery 对象

常规选择器
学习要点：
1.简单选择器
2.进阶选择器
3.高级选择器

简单选择器
在使用jQuery选择器时，我们首先必须使用“$()”函数来包装我们的CSS规则。
$('div').css('color', 'red');//元素选择器，返回多个元素
$('#box').css('color', 'red');//ID 选择器，返回单个元素
$('.box').css('color', 'red');//类(class)选择器，返回多个元素

进阶选择器
选择器       CSS模式            jQuery模式          描述
群组选择器   span,em,.box {}    $('span,em,.box')   获取多个选择器的DOM对象
后代选择器   ul li a {}         $('ul li a')        获取追溯到的多个DOM对象
通配选择器   *{}                $('*')              获取所有元素标签的DOM对象
还有一种选择器，可以在 ID 和类(class)中指明元素前缀，比如：
$('div.box');//限定必须是.box 元素获取必须是 div
$('p#box div.side');//同上

高级选择器
选择器        CSS模式   jQuery模式   描述
子选择器      div>p {}  $('div>p')   只获取子类节点的多个 DOM 对象
next选择器    div+p {}  $('div+p')   只获取某节点后一个同级DOM对象
nextAll选择器 div~p {}  $('div~p')   获取某节点后面所有同级DOM对象

//后代选择器
$('#box p').css('color','red');
jQuery为后代选择器提供了一个等价find()方法
$('#box').find('p').css('color','red');

//子选择器，孙子后失明
$('#box>p').css('color','red');
$('#box').children('p').css('color','red');

//next选择器(下一个同级节点)
$('#box+p').css('color','red');
$('#box').next('p').css('color','red');

//nextAll 选择器(后面所有同级节点)
$('#box~p').css('color', 'red');
$('#box').nextAll('p').css('color','red');

为了补充高级选择器的这三种模式，jQuery还提供了更加丰富的方法来选择元素：
$('#box').prev('p').css('color','red');//同级上一个元素
$('#box').prevAll('p').css('color','red');//同级所有上面的元素

$('#box').siblings('p').css('color', 'red');//同级上下所有元素选定
//等价于下面：
$('#box').prevAll('p').css('color', 'red');//同级上所有元素选定
$('#box').nextAll('p').css('color', 'red');//同级下所有元素选定

//属性选择器
$('a[title]').css('color','red');
$('a[title=xxx]').css('color','red');
$('a[title^=xxx]').css('color','red');//选定具有这个属性且开头属性值匹配的
$('a[title$=xxx]').css('color','red');//选定具有这个属性且结尾属性值匹配的
$('a[title!=xxx]').css('color','red');//选定具有这个属性且属性值不相等的

选择器快慢分析：
//这条最快，会使用原生的 getElementById、ByName、ByTagName 和 querySelectorAll()
$('#box').find('p');

//jQuery 会自动把这条语句转成$('#box').find('p')，这会导致一定的性能损失。它比最快
的形式慢了 5%-10%
$('p', '#box');

//这条语句在 jQuery 内部，会使用$.sibling()和 javascript 的 nextSibling()方法，一个个遍
历节点。它比最快的形式大约慢 50%
$('#box').children('p');

//jQuery 内部使用 Sizzle 引擎，处理各种选择器。Sizzle 引擎的选择顺序是从右到左，
所以这条语句是先选 p，然后再一个个过滤出父元素#box，这导致它比最快的形式大约慢70%
$('#box>p');

//这条语句与上一条是同样的情况。但是，上一条只选择直接的子元素，这一条可以于
选择多级子元素，所以它的速度更慢，大概比最快的形式慢了 77%。
$('#box p');

//jQuery 内部会将这条语句转成$('#box').find('p')，比最快的形式慢了 23%。
$('p', $('#box'));

综上所属，最快的是 find()方法，最慢的是$('#box p')这种高级选择器。如果一开始将
$('#box')进行赋值，那么 jQuery 就对其变量进行缓存，那么速度会进一步提高。
var box = $('#box');
var p = box.find('p');

过滤选择器
学习要点：
1.基本过滤器
2.内容过滤器
3.可见性过滤器
4.子元素过滤器

基本过滤器
$('li:first').css('background', '#ccc');//第一个元素
$('li:last).css('background', '#ccc');//最后一个元素
$('li:not(.red)).css('background', '#ccc');//非 class 为 red 的元素
$('li:even').css('background', '#ccc');//索引为偶数的元素
$('li:odd).css('background', '#ccc');//索引为奇数的元素
$('li:eq(2)).css('background', '#ccc');//指定索引值的元素
$('li:gt(2)').css('background', '#ccc');//大于索引值的元素
$('li:lt(2)').css('background', '#ccc');//小于索引值的元素
$(':header').css('background', '#ccc');//页面所有 h1 ~ h6 元素
$('input').get(0).focus();//先初始化激活一个元素焦点
$(':focus').css('background', 'red');//被焦点的元素

jQuery 为最常用的过滤器提供了专用的方法，已达到提到性能和效率的作用：
$('li').eq(2).css('background','#ccc');//元素 li 的第三个元素，负数从后开始
$('li').first().css('background','#ccc');//元素 li 的第一个元素
$('li').last().css('background','#ccc');//元素 li 的最后一个元素
$('li').not('.red').css('background','#ccc');//元素 li 不含 class 为 red 的元素

内容过滤器
//选择元素文本节点含有 abc.com 文本的元素
$('div:contains("abc.com")').css('background', '#ccc');
$('div:empty').css('background', '#ccc');//选择空元素
$('ul:has(.red)').css('background', '#ccc');//选择子元素含有class是red的元素
$(':parent').css('background', '#ccc');//选择非空元素

jQuery提供了一个has()方法来提高:has过滤器的性能：
$('ul').has('.red').css('background','#ccc');//选择子元素含有 class 是 red 的元素

jQuery 提供了一个名称和:parent 相似的方法， 但这个方法并不是选取含有子元素或文本
的元素，而是获取当前元素的父元素，返回的是元素集合。
$('li').parent().css('background', '#ccc');//选择当前元素的父元素
$('li').parents().css('background', '#ccc');//选择当前元素的父元素及祖先元素
$('li').parentsUntil('div').css('background','#ccc'); //选择当前元素遇到div父元素停止

可见性过滤器
$('p:hidden).size();//元素 p 隐藏的元素
$('p:visible').size();//元素 p 显示的元素

子元素过滤器
$('li:first-child').css('background', '#ccc');//每个父元素第一个li元素
$('li:last-child').css('background', '#ccc');//每个父元素最后一个li元素
$('li:only-child').css('background', '#ccc');//每个父元素只有一个li元素
$('li:nth-child(odd)').css('background', '#ccc');//每个父元素奇数li元素
$('li:nth-child(even)').css('background', '#ccc');//每个父元素偶数li元素
$('li:nth-child(2)').css('background', '#ccc');//每个父元素第三个li元素
$('div:nth-child(2n-1)').css("color","red");

基础DOM和CSS操作
学习要点：
1.设置元素及内容
2.元素属性操作
3.元素样式操作
4.CSS方法

在常规的DOM元素中，我们可以使用html()和text()方法获取内部的数据。
$('#box').html();//获取 html 内容
$('#box').text();//获取文本内容，会自动清理html标签
$('#box').html('<em>www.li.cc</em>');//设置html内容
$('#box').text('<em>www.li.cc</em>');//设置文本内容，会自动转义html标签

注意：当我们使用 html()或 text()设置元素里的内容时，会清空原来的数据。
而我们期望能够追加数据的话，需要先获取原本的数据。
$('#box').html($('#box').html() + '<em>www.li.cc</em>');//追加数据

如果元素是表单的话，jQuery 提供了 val()方法进行获取或设置内部的文本数据。
$('input').val();//获取表单内容
$('input').val('www.li.cc');//设置表单内容

如果想设置多个选项的选定状态，可以通过数组传递操作。
$("input").val(["check1","check2", "radio1" ]);//value 值是这些的将被选定

元素属性操作
$('div').attr('title');
//获取属性的属性值
$('div').attr('title', '我是域名');
//设置属性及属性值
$('div').attr('title', function () {
	//通过匿名函数返回属性值
	return '我是返回值';
});
$('div').attr('title', function (index, value) {
	//可以接受两个参数 索引 值
	return value + (index+1) + '我是返回值';
});

$('div').removeAttr('title');//删除指定的属性

元素样式操作

css(name)获取某个元素行内的 CSS 样式
css([name1, name2, name3])获取某个元素行内多个 CSS 样式
css(name, value)设置某个元素行内的 CSS 样式
css(name, function (index, value) )设置某个元素行内的 CSS 样式
css({name1 : value1, name2 : value2})设置某个元素行内多个 CSS 样式
addClass(class)给某个元素添加一个 CSS 类
addClass(class1 class2 class3...)给某个元素添加多个 CSS 类
removeClass(class)删除某个元素的一个 CSS 类
removeClass(class1 class2 class3...)删除某个元素的多个 CSS 类
toggleClass(class)来回切换默认样式和指定样式
toggleClass(class1 class2 class3...)同上
toggleClass(class, switch)来回切换样式的时候设置切换频率
toggleClass(function () {})通过匿名函数设置切换的规则
toggleClass(function () {}, switch)在匿名函数设置时也可以设置频率
toggleClass(function (i, c, s) {}, switch)在匿名函数设置时传递三个参数

$('div').css('color');//获取元素行内 CSS 样式的颜色
$('div').css('color', 'red');//设置元素行内 CSS 样式颜色为红色

在 CSS 获取上，我们也可以获取多个 CSS 样式，而获取到的是一个对象数组，如果用
传统方式进行解析需要使用 for in 遍历。
var box = $('div').css(['color', 'height', 'width']);//得到多个 CSS 样式的数组对象
for (var i in box) {
	//逐个遍历出来
	alert(i + ':' + box[i]);
}

jQuery 提供了一个遍历工具专门来处理这种对象数组，$.each()方法，这个方法可以轻
松的遍历对象数组。
$.each(box, function (attr, value) {//遍历 JavaScript 原生态的对象数组
	alert(attr + ':' + value);
});

使用$.each()可以遍历原生的 JavaScript 对象数组，如果是jQuery对象的数组怎么使
用.each()方法呢？
$('div').each(function (index, element) {//index 为索引，element 为元素 DOM
	alert(index + ':' + element);
});

在需要设置多个样式的时候，我们可以传递多个 CSS 样式的键值对即可。
$('div').css({
	'background-color' : '#ccc',
	'color' : 'red',
	'font-size' : '20px'
});
如果想设置某个元素的 CSS 样式的值， 但这个值需要计算我们可以传递一个匿名函数。
$('div').css('width', function (index, value) {
	return (parseInt(value) - 500) + 'px';
});

除了行内 CSS 设置，我们也可以直接给元素添加 CSS 类，可以添加单个或多个，并且
也可以删除它。
$('div').addClass('red');//添加一个 CSS 类
$('div').addClass('red bg');//添加多个 CSS 类
$('div').removeClass('bg');//删除一个 CSS 类
$('div').removeClass('red bg');//删除多个 CSS 类

结合事件来实现 CSS 类的样式切换功能。
$('div').click(function () {//当点击后触发
	$(this).toggleClass('red size');//单个样式多个样式均可
});

.toggleClass()方法的第二个参数可以传入一个布尔值， true表示执行切换到 class类， false
表示执行回默认 class 类(默认的是空 class)，运用这个特性，我们可以设置切换的频率。
var count = 0;
$('div').click(function () {//每点击两次切换一次 red
	$(this).toggleClass('red', count++ % 3 == 0);
});

默认的 CSS 类切换只能是无样式和指定样式之间的切换，如果想实现样式 1 和样式 2
之间的切换还必须自己写一些逻辑。
$('div').click(function () {
	$(this).toggleClass('red size');//一开始切换到样式 2
	if ($(this).hasClass('red')) {//判断样式 2 存在后
		$(this).removeClass('blue');//删除样式 1
	} else {
		$(this).toggleClass('blue');//添加样式 1，这里也可以 addClass
	}
});

上面的方法较为繁琐，.toggleClass()方法提供了传递匿名函数的方式，来设置你所需要
切换的规则。
$('div').click(function () {
	$(this).toggleClass(function () {//传递匿名函数，返回要切换的样式
		return $(this).hasClass('red') ? 'blue' : 'red size';
	});
});
注意：上面虽然一句话实现了这个功能，但还是有一些小缺陷，因为原来的 class 类没
有被删除，只不过被替代了而已。所以，需要改写一下。
$('div').click(function () {
	$(this).toggleClass(function () {
		if ($(this).hasClass('red')) {
			$(this).removeClass('red');
			return 'green';
		} else {
			$(this).removeClass('green');
			return 'red';
		}
	});
});
我们也可以在传递匿名函数的模式下，增加第二个频率参数。
var count = 0;
$('div').click(function () {
	$(this).toggleClass(function () {
		return $(this).hasClass('red') ? 'blue' : 'red size';
	},count++ % 3 == 0);//增加了频率
});

对于.toggleClass()传入匿名函数的方法，还可以传递 index 索引、class 类两个参数以及
频率布尔值，可以得到当前的索引、class 类名和频率布尔值。
var count = 0;
$('div').click(function () {
	$(this).toggleClass(function (index, className, switchBool) {
		alert(index + ':' + className + ':' + switchBool);//得到当前值
		return $(this).hasClass('red') ? 'blue' : 'red size';
	},count++ % 3 == 0);
});

CSS方法
$('div').width();//获取元素的长度， 返回的类型为 number
$('div').width(500);//设置元素长度，直接传数值，默认加 px
$('div').width(function (index, value) {//index 是索引，value 是原本值
	return value - 500;//无须调整类型，直接计算
});

$('div').height();//获取元素的高度， 返回的类型为 number
$('div').height(500);//设置元素高度，直接传数值，默认加 px
$('div').height('500pt');//同上，设置了 pt 单位
$('div').height(function (index, value) {//index 是索引，value 是原本值
	return value - 1;//无须调整类型，直接计算
});

alert($('div').width());//不包含
alert($('div').innerWidth());//包含内边距 padding
alert($('div').outerWidth());//包含内边距 padding+边框 border
alert($('div').outerWidth(true));//包含内边距 padding+边框 border+外边距 margin
alert($('div').innerHeight());//包含内边距 padding
alert($('div').outerHeight());//包含内边距 padding+边框 border
alert($('div').outerHeight(true));//包含内边距 padding+边框 border+外边距 margin

$('strong').offset().left;//相对于视口的偏移
$('strong').position().left;//相对于父元素的偏移
$(window).scrollTop();//获取当前滚动条的位置
$(window).scrollTop(300);//设置当前滚动条的位置
$(window).scrollLeft();//获取当前滚动条的位置
$(window).scrollLeft(300);//设置当前滚动条的位置

DOM节点操作
学习要点：
1.创建节点
2.插入节点
3.包裹节点
4.节点操作

创建节点
var box = $('<div id="box">节点</div>');//创建一个节点
$('body').append(box);//将节点插入到<body>元素内部

内部插入节点方法:
append(content)//向指定元素内部后面插入节点 content
$('div').append('<strong>节点</strong>');//向 div 内部插入 strong 节点

append(function (index, html) {})//使用匿名函数向指定元素内部后面插入节点
$('div').append(function (index, html) {//使用匿名函数插入节点，html是原节点
	return '<strong>节点</strong>';
});

appendTo(content)//将指定元素移入到指定元素 content 内部后面
$('span').appendTo('div');//span节点移入div节点内
$('span').appendTo($('div'));

prepend(content)//向指定元素 content 内部的前面插入节点
$('div').prepend('<span>节点</span>');//将 span 插入到 div 内部的前面

prepend(function (index, html) {})//使用匿名函数向指定元素内部的前面插入节点
$('div').append(function (index, html) {//使用匿名函数，同上
	return '<span>节点</span>';
});

prependTo(content)//将指定元素移入到指定元素 content 内部前面
$('span').prependTo('div');//将 span 移入 div 内部的前面
$('span').prependTo($('div'));

外部插入节点方法
after(content)//向指定元素的外部后面插入节点 content
after(function (index, html) {})//使用匿名函数向指定元素的外部后面插入节点
before(content)//向指定元素的外部前面插入节点 content
before(function (index, html) {})//使用匿名函数向指定元素的外部前面插入节点
insertAfter(content)//将指定节点移到指定元素 content 外部的后面
insertBefore(content)//将指定节点移到指定元素 content 外部的前面

$('div').after('<span>节点</span>'); //向div的同级节点后面插入span
$('div').after(function (index, html) { //使用匿名函数，同上
	return '<span>节点</span>';
});
$('div').before('<span>节点</span>'); //向div的同级节点前面插入span
$('div').before(function (index, html) { //使用匿名函数，同上
	return '<span>节点</span>';
});
$('span').insertAfter('div');//将span元素移到div元素外部的后面
$('span').insertBefore('div');//将span元素移到div元素外部的前面

包裹节点
jQuery 提供了一系列方法用于包裹节点，裹节点意思就是使用字符
串代码将指定元素的代码包含。
$('div').wrap('<strong></strong>');//在 div 外层包裹一层 strong
$('div').wrap('<strong>123</strong>');//包裹的元素可以带内容
$('div').wrap('<strong><em></em></strong>');//包裹多个元素
$('div').wrap($('strong').get(0));//也可以包裹一个原生DOM
$('div').wrap(document.createElement('strong')); //临时的原生 DOM
$('div').wrap(function (index) {//匿名函数
	return '<strong></strong>';
});
$('div').unwrap();//移除一层包裹内容，多个需移除多次
$('div').wrapAll('<strong></strong>');//所有div外面只包一层strong
$('div').wrapAll($('strong').get(0));//同上
$('div').wrapInner('<strong></strong>');//包裹子元素内容
$('div').wrapInner($('strong').get(0));//DOM 节点
$('div').wrapInner(function () {//匿名函数
	return '<strong></strong>';
});
注意：.wrap()和.wrapAll()的区别在前者把每个元素当成一个独立体，分别包含一层外层；
后者将所有元素作为一个整体作为一个独立体，只包含一层外层。这两种都是在外层包
含，而.wrapInner()在内层包含。

节点操作
//复制节点
$('body').append($('div').clone(true)); //复制一个节点添加到HTML中
//删除节点
$('div').remove(); //直接删除 div 元素
//保留事件的删除节点
$('div').detach();//保留事件行为的删除
注意：.remove()和.detach()都是删除节点，而删除后本身方法可以返回当前被删除的节
点对象，但区别在于前者在恢复时不保留事件行为，后者则保留。
//清空节点
$('div').empty();//删除掉节点里的内容
//替换节点
$('div').replaceWith('<span>节点</span>');//将div替换成span元素
$('<span>节点</span>').replaceAll('div');
注意：节点被替换后，所包含的事件行为就全部消失了。

表单选择器
学习要点：
1.常规选择器
2.表单选择器
3.表单过滤器

常规选择器
$('input').val(); //元素名定位，默认获取第一个
$('input').eq(1).val(); //同上，获取第二个
$('input[type=password]').val(); //选择 type 为 password 的字段
$('input[name=user]').val(); //选择 name 为 user 的字段

表单选择器
$(':input').size(); //选取所有input textarea select和button元素
$(':text).size(); //获取单行文本框元素
$(':password').size(); //获取密码栏元素
$(':radio).size(); //获取单选框元素
$(':checkbox).size(); //获取复选框元素
$(':submit).size(); //获取提交按钮元素
$(':reset).size(); //获取重置按钮元素
$(':image).size(); //获取图片按钮元素
$(':file).size(); //获取文件按钮元素
$(':button).size(); //获取普通按钮元素
$(':hidden).size(); //获取隐藏字段元素

想获取某一个指定的元素，最好结合一下属性选择器
$(':text[name=user]).size();//获取单行文本框name=user的元素

表单过滤器
$(':enabled').size(); //获取可用元素
$(':disabled).size(); //获取不可用元素
$(':checked).size(); //获取单选、复选框中被选中的元素
$(':selected).size(); //获取下拉列表中被选中的元素

基础事件
学习要点：
1.绑定事件
2.简写事件
3.复合事件

常用的事件有： click、 dblclick、mousedown、 mouseup、 mousemove、
mouseover、 mouseout、 change、 select、 submit、 keydown、
keypress、keyup、blur、focus、load、resize、scroll、error。

//使用点击事件
$('input').bind('click', function () {
	//点击按钮后执行匿名函数
	alert('点击！');
});

//可以同时绑定多个事件
$('input').bind('mouseout mouseover', function () {
	//移入和移出分别执行一次
	$('div').html(function (index, value) {
		return value + '1';
	});
});

//通过对象键值对绑定多个参数
$('input').bind({
	//传递一个对象
	'mouseout' : function () {
		//事件名的引号可以省略
		alert('移出');
	},
	'mouseover' : function () {
		alert('移入');
	}
});

//使用 unbind 删除绑定的事件
$('input').unbind();//删除所有当前元素的事件

//使用 unbind 参数删除指定类型事件
$('input').unbind('click');//删除当前元素的 click 事件

//使用 unbind 参数删除指定处理函数的事件
function fn1() {
	alert('点击 1');
}
function fn2() {
	alert('点击 2');
}
$('input').bind('click', fn1);
$('input').bind('click', fn2);
$('input').unbind('click', fn1);//只删除 fn1 处理函数的事件

简写事件
click(fn)      //触发每一个匹配元素的 click(单击)事件
dblclick(fn)   //触发每一个匹配元素的 dblclick(双击)事件
mousedown(fn)  //触发每一个匹配元素的 mousedown(点击后)事件
mouseup(fn)    //触发每一个匹配元素的 mouseup(点击弹起)事件
mouseover(fn)  //触发每一个匹配元素的 mouseover(鼠标移入)事件
mouseout(fn)   //触发每一个匹配元素的 mouseout(鼠标移出)事件
mousemove(fn)  //触发每一个匹配元素的mousemove(鼠标移动)事件
mouseenter(fn) //触发每一个匹配元素的 mouseenter(鼠标穿过)事件
mouseleave(fn) //触发每一个匹配元素的 mouseleave(鼠标穿出)事件
keydown(fn)    //触发每一个匹配元素的 keydown(键盘按下)事件
keyup(fn)      //触发每一个匹配元素的 keyup(键盘按下弹起)事件
keypress(fn)   //触发每一个匹配元素的 keypress(键盘按下)事件
unload(fn)     //当卸载本页面时绑定一个要执行的函数
resize(fn)     //触发每一个匹配元素的 resize(文档改变大小)事件
scroll(fn)     //触发每一个匹配元素的 scroll(滚动条拖动)事件
focus(fn)      //触发每一个匹配元素的 focus(焦点激活)事件
blur(fn)       //触发每一个匹配元素的 blur(焦点丢失)事件
focusin(fn)    //触发每一个匹配元素的 focusin(焦点激活)事件
focusout(fn)   //触发每一个匹配元素的 focusout(焦点丢失)事件
select(fn)     //触发每一个匹配元素的 select(文本选定)事件
change(fn)     //触发每一个匹配元素的 change(值改变)事件
submit(fn)     //触发每一个匹配元素的 submit(表单提交)事件

.mouseover()和.mouseout()表示鼠标移入和移出的时候触发。
.mouseenter()和.mouseleave()表示鼠标穿过和穿出的时候触发。
//HTML 页面设置
<div style="width:200px;height:200px;background:green;">
	<p style="width:100px;height:100px;background:red;"></p>
</div>
<strong></strong>

//mouseover移入
$('div').mouseover(function () {
	//移入div会触发，移入p再触发
	$('strong').html(function (index, value) {
		return value+'1';
	});
});
//mouseenter穿过
$('div').mouseenter(function () {
	//穿过div或者p
	$('strong').html(function (index, value) {
		//在这个区域只触发一次
		return value+'1';
	});
});
//mouseout移出
$('div').mouseout(function () {
	//移出p会触发，移出div再触发
	$('strong').html(function (index, value) {
		return value+'1';
	});
});
//mouseleave穿出
$('div').mouseleave(function() {
	//移出整个div区域触发一次
	$('strong').html(function (index, value) {
		return value+'1';
	});
});

.keydown()、.keyup()返回的是键码，而.keypress()返回的是字符编码。
$('input').keydown(function (e) {
	alert(e.keyCode);//按下 a 返回 65
});
$('input').keypress(function (e) {
	alert(e.charCode);//按下 a 返回 97
});

.focus()和.blur()分别表示光标激活和丢失
.focusin()和.focusout()事件触发时机可以是子元素
//HTML 部分
<div style="width:200px;height:200px;background:red;">
	<input type="text" value="" />
</div>
<strong></strong>
//focus 光标激活
$('input').focus(function() {//当前元素触发
	$('strong').html('123');
});
//focusin 光标激活
$('div').focusin(function() {//绑定的是div元素，子类input触发
	$('strong').html('123');
});

//背景移入移出切换效果
$('div').hover(function () {
		$(this).css('background', 'black'); //mouseenter效果
	}, function () {
		$(this).css('background', 'red'); //mouseleave效果，可省略
});

事件对象
学习要点：
1.事件对象
2.冒泡和默认行为

事件对象
event对象的属性
type //获取这个事件的事件类型，例如:click
target //获取绑定事件的DOM元素
data //获取事件调用时的额外数据
relatedTarget //获取移入移出目标点离开或进入的那个DOM元素
currentTarget //获取冒泡前触发的DOM元素，等同与this
pageX/pageY //获取相对于页面原点的水平/垂直坐标
screenX/screenY //获取显示器屏幕位置的水平/垂直坐标
clientX/clientY //获取相对于页面视口的水平/垂直坐标
result //获取上一个相同事件的返回值
timeStamp //获取事件触发的时间戳
which //获取鼠标的左中右键(1,2,3)，或获取键盘按键
altKey/shiftKey/ctrlKey/metaKey //获取是否按下了alt、shift、ctrl或meta

//通过 event.type 属性获取触发事件名
$('input').click(function (e) {
	alert(e.type);
});
//通过 event.target 获取绑定的 DOM 元素
$('input').click(function (e) {
	alert(e.target);
});
//通过 event.data 获取额外数据，可以是数字、字符串、数组、对象
$('input').bind('click', 123, function (e) {
	//传递 data 数据
	alert(e.data);//获取数字数据
});
注意：如果字符串就传递：'123'、如果是数组就传递：[123,'abc']，
如果是对象就传递：{user:'Lee', age:100}。
数组的调用方式是：e.data[1]，对象的调用方式是：e.data.user。

//event.data 获取额外数据，对于封装的简写事件也可以使用
$('input').click({user : 'Lee', age : 100},function (e) {
	alert(e.data.user);
});

//获取移入到 div 之前的那个 DOM 元素
$('div').mouseover(function (e) {
	alert(e.relatedTarget);
});
//获取移出 div 之后到达最近的那个 DOM 元素
$('div').mouseout(function (e) {
	alert(e.relatedTarget);
});
//获取绑定的那个 DOM 元素，相当于 this，区别与event.target
$('div').click(function (e) {
	alert(e.currentTarget);
});
注意：event.target 得到的是触发元素的 DOM，event.currentTarget得到的是
监听元素的DOM。而this也是得到监听元素的DOM。

//获取上一次事件的返回值
$('div').click(function (e) {
	return '123';
});
$('div').click(function (e) {
	alert(e.result);
});
//获取当前的时间戳
$('div').click(function (e) {
	alert(e.timeStamp);
});
//获取鼠标的左中右键
$('div').mousedown(function (e) {
	alert(e.which);
});
//获取键盘的按键
$('input').keyup(function (e) {
	alert(e.which);
});
//获取是否按下了 ctrl 键，meta 键不存在，导致无法使用
$('input').click(function (e) {
	alert(e.ctrlKey);
});
//获取触发元素鼠标当前的位置
$(document).click(function (e) {
	alert(e.screenY+ ',' + e.pageY + ',' + e.clientY);
});

冒泡和默认行为
冒泡和默认行为的一些方法
preventDefault() //取消某个元素的默认行为
isDefaultPrevented() //判断是否调用了 preventDefault()方法
stopPropagation() //取消事件冒泡
isPropagationStopped() //判断是否调用了 stopPropagation()方法
stopImmediatePropagation() //取消事件冒泡， 并取消该事件的后续事件处理函数
isImmediatePropagationStopped() //判断是否调用了stopImmediatePropagation()方法

//判断是否取消了元素的默认行为
$('input').keyup(function (e) {
	e.preventDefault();
	alert(e.isDefaultPrevented());
});
//取消冒泡并取消后续事件处理函数
$('input').click(function (e) {
	alert('input');
	e.stopImmediatePropagation();
});
$('input').click(function () {
	alert('input2');
});
$(document).click(function () {
	alert('document');
});

//判断是否调用了stopPropagation()方法
$('input').click(function (e) {
	e.stopPropagation();
	alert(e.isPropagationStopped());
});
//判断是否执行了stopImmediatePropagation()方法
$('input').click(function (e) {
	e.stopImmediatePropagation();
	alert(e.isImmediatePropagationStopped());
});

高级事件
学习要点：
1.模拟操作
2.命名空间
3.事件委托
4.on、off和one

模拟操作
//点击按钮事件
$('input').click(function () {
	alert('click');
});
//模拟用户点击行为
$('input').trigger('click');

若需要给事件执行传递参数，这个参数类似与 event.data
的额外数据，可以可以是数字、字符串、数组、对象。
$('input').click(function (e, data1, data2) {
	alert(data1 + ',' + data2);
}).trigger('click', ['abc', '123']);
注意：当传递一个值的时候，直接传递即可。

自定义事件就是一个被.bind()绑定的任意函数
$('input').bind('myEvent', function () {
	alert('自定义事件！');
}).trigger('myEvent');

.trigger()方法提供了简写方案
$('input').click(function () {
	alert('click');
}).click();
jQuery常用的事件都提供了简写函数
blur focusin mousedown resize change focusout 
mousenter scroll click keydown mouseleave select 
dblclick keypress mousemove submit error keyup 
mouseout unload focus load mouseover

jQuery提供了另外一个模拟用户行为的方法 .triggerHandler()
这个方法的使用和.trigger()方法一样。
$('input').click(function () {
	alert('click');
}).triggerHandler('click');
triggerHandler()方法并不会触发事件的默认行为，而.trigger()会
//模拟用户执行提交，并跳转到执行页面
$('form').trigger('submit'); 
//模拟用户执行提交，并阻止的默认行为
$('form').triggerHandler('submit'); 
.trigger()在创建事件的时候，会冒泡而.triggerHandler()不会

命名空间
我们想对事件进行移除。但对于同名同元素绑定的事件移除往往比较麻烦，
这个时候，可以使用事件的命名空间解决。
$('input').bind('click.abc', function () {
	alert('abc');
});
$('input').bind('click.xyz', function () {
	alert('xyz');
});
$('input').unbind('click.abc');//移除click中命名空间为abc的
注意：直接使用('.abc')，可以移除相同命名空间的不同事件。
对于模拟操作.trigger()和.triggerHandler()，用法也是一样的。
$('input').trigger('click.abc');

事件委托
//使用.bind()不具备动态绑定功能，只有点击原始按钮才能生成
$('.button').bind('click', function () {
	$(this).clone().appendTo('#box');
});
jQuery1.7 以后推出了.on()和.off()方法实现事件绑定和委托
//替代.bind()方式
$('.button').on('click', function () {
	alert('替代.bind()');
});
//替代.unbind()方式，移除事件
$('.button').off('click');
$('.button').off('click', fn);
$('.button').off('click.abc');

//替代.live()和.delegate()，事件委托
$(document).on('click', 'input[type=button]', function () {
	alert(11);
});
//替代.die()和.undelegate()，取消事件委托
$('#box').off('click', 'button');


$('#box').on('click', 'button', function () {
	$(this).clone().appendTo('#box');
});

不管是.bind()还是.on()，绑定事件后都不是自动移除事件
需要通过.unbind()和.off()来手工移除
jQuery提供了.one()方法，绑定元素执行完毕后自动移除事件
//类似于.bind()只触发一次
$('.button').one('click', function () {
	alert('one 仅触发一次！');
});
//类似于.delegate()只触发一次
$('#box).one('click', 'input', function () {
	alert('one 仅触发一次！');
});

动画效果
学习要点：
1.显示、隐藏
2.滑动、卷动
3.淡入、淡出
4.自定义动画
5.列队动画方法
6.动画相关方法
7.动画全局属性

显示、隐藏
$('input').click(function () {
	//显示
	$('#box').show();
});
$('input').click(function () {
	//隐藏
	$('#box').hide();
});

在.show()和.hide()方法可以传递一个参数来控制速度
$('.show').click(function () {
	$('#box').show(1000); //显示用了 1 秒
});
$('.hide').click(function () {
	$('#box').hide(1000); //隐藏用了 1 秒
});
slow、normal和fast，分别对应600、400、200毫秒

//使用.show()和.hide()的回调函数，可以实现列队动画效果
$('.show').click(function () {
	$('#box').show('slow', function () {
		alert('动画持续完毕后，执行我！');
	});
});

//列队动画，使用函数名调用自身
$('.show').click(function () {
	$('div').first().show('fast', function showSpan() {
		$(this).next().show('fast', showSpan);
	});
});

//可以使用toggle()方法来切换hide()和show()方法
$("button").click(function(){
	$("p").toggle('slow');
});

滑动、卷动
改变元素高度的方法：.slideUp()、.slideDown()和.slideToggle()。
顾名思义，向上收缩(卷动)和向下展开(滑动)。
$('.down').click(function () {
	$('#box').slideDown();
});
$('.up').click(function () {
	$('#box').slideUp();
});
$('.toggle').click(function () {
	$('#box').slideToggle();
});
注意：滑动、卷动效果和显示、隐藏效果一样，具有相同的参数

淡入、淡出
jQuery 提供了一组专门用于透明度变化的方法：.fadeIn()和.fadeOut()，
分别表示淡入、淡出，当然还有一个自动切换的方法：.fadeToggle()。
$('.in').click(function () {
	$('#box').fadeIn('slow');
});
$('.out').click(function () {
	$('#box').fadeOut('slow');
});
$('.toggle').click(function () {
	$('#box').fadeToggle();
});
上面三个透明度方法只能是从0 到100，或者从100到0，
jQuery.fadeTo()方法可设置任意透明度。
$('.toggle').click(function () {
	$('#box').fadeTo('slow', 0.33); //0.33 表示值为 33
});
注意：淡入、淡出效果和显示、隐藏效果一样，具有相同的参数。
对于.fadeTo()方法，如果本身透明度大于指定值，会淡出，否则相反。

自定义动画
jQuery 提供了一个.animate()方法来创建我们的自定义动画
$('.animate').click(function () {
	$('#box').animate({
		'width' : '300px',
		'height' : '200px',
		'fontSize' : '50px',
		'opacity' : 0.5
	});
});
注意：一个 CSS 变化就是一个动画效果，上面的例子中，已经有四个 CSS 变化，
已经实现了多重动画同步运动的效果。
必传的参数只有一个，就是一个键值对 CSS 变化样式的对象。
还有两个可选参数分别为速度和回调函数。
$('.animate').click(function () {
	$('#box').animate({
		'width' : '300px',
		'height' : '200px'
	}, 1000, function () {
		alert('动画执行完毕执行我！');
	});
});
到目前位置， 我们都是创建的固定位置不动的动画。 
如果想要实现运动状态的位移动画，
那就必须使用自定义动画，并且结合 CSS 的绝对定位功能。
$('.animate').click(function () {
	$('#box').animate({
		'top' : '300px',//先必须设置 CSS 绝对定位
		'left' : '200px'
	});
});
自定义动画中， 每次开始运动都必须是初始位置或初始状态， 
而有时我们想通过当前位置或状态下再进行动画。
jQuery 提供了自定义动画的累加、累减功能。
$('.animate').click(function () {
	$('#box').animate({
		'left' : '+=100px',
	});
});
自定义实现列队动画的方式，有两种：
1.在回调函数中再执行一个动画；
2.通过连缀或顺序来实现列队动画。
//通过依次顺序实现列队动画
$('.animate').click(function () {
	$('#box').animate({'left' : '100px'});
	$('#box').animate({'top' : '100px'});
	$('#box').animate({'width' : '300px'});
});
注意：如果不是同一个元素，就会实现同步动画
//通过连缀实现列队动画
$('.animate').click(function () {
	$('#box').animate({
		'left' : '100px'
	}).animate({
		'top' : '100px'
	}).animate({
		'width' : '300px'
	});
});
//通过回调函数实现列队动画
$('.animate').click(function () {
	$('#box').animate({
		'left' : '100px'
	}, function () {
		$('#box').animate({
			'top' : '100px'
		}, function () {
			$('#box').animate({
				'width' : '300px'
			});
		});
	});
});

列队动画方法
//连缀无法实现按顺序列队
$('#box').slideUp('slow').slideDown('slow').css('background', 'orange');
//使用回调函数，强行将.css()方法排队到.slideDown()之后
$('#box').slideUp('slow').slideDown('slow', function () {
	$(this).css('background', 'orange');
});

如果这样，当列队动画繁多的时候，可读性不但下降，而原本的动画方法不够清晰。
所以，我们的想法是每个操作都是自己独立的方法。
jQuery 提供了一个类似于回调函数的方法：.queue()。
//使用.queue()方法模拟动画方法跟随动画方法之后
$('#box').slideUp('slow').slideDown('slow').queue(function () {
	$(this).css('background', 'orange');
});
现在，我们想继续在.queue()方法后面再增加一个隐藏动画，这时发现居然无法实现。
这是.queue()特性导致的。有两种方法可以解决这个问题，jQuery 的.queue()的回调函数可以
传递一个参数，这个参数是 next 函数，在结尾处调用这个 next()方法即可再连缀执行列队动
画。
//使用 next 参数来实现继续调用列队动画
$('#box').slideUp('slow').slideDown('slow').queue(function (next) {
	$(this).css('background', 'orange');
	next();
}).hide('slow');
因为next函数是jQuery1.4版本以后才出现的， 而之前我们普遍使用的是.dequeue()方法。
意思为执行下一个元素列队中的函数。
//使用.dequeue()方法执行下一个函数动画
$('#box').slideUp('slow').slideDown('slow').queue(function () {
	$(this).css('background', 'orange');
	$(this).dequeue();
}).hide('slow');
如果采用顺序调用，那么使用列队动画方法，就非常清晰了，每一段代表一个列队， 
而回调函数的嵌套就会杂乱无章。
//使用顺序调用的列队，逐个执行，非常清晰
$('#box').slideUp('slow');
$('#box').slideDown('slow');
$('#box').queue(function () {
	$(this).css('background', 'orange');
	$(this).dequeue();
})
$('#box').hide('slow');

jQuery 还提供了一个清理列队的功能方法：.clearQueue()。把它放入一个列队的回调函
数或.queue()方法里，就可以把剩下为执行的列队给移除。
//清理动画列队
$('#box').slideDown('slow', function () {$(this).clearQueue()});

动画相关方法
停止正在运行中的动画: .stop(clearQueue, gotoEnd);
//强制停止运行中的
$('.stop').click(function () {
	$('#box').stop();
});
//带参数的强制运行
$('.animate').click(function () {
	$('#box').animate({
		'left' : '300px'
	}, 1000);
	$('#box').animate({
		'bottom' : '300px'
	}, 1000);
	$('#box').animate({
		'width' : '300px'
	}, 1000);
	$('#box').animate({
		'height' : '300px'
	}, 1000);
});
$('.stop').click(function () {
	$('#box').stop(true ,true);
});

第一个参数表示是否取消列队动画，默认为 false。
第二参数表示是否到达当前动画结尾，默认为 false。

设置动画延迟：.delay()
//开始延迟 1 秒钟，中间延迟 1 秒
$('.animate').click(function () {
	$('#box').delay(1000).animate({
		'left' : '300px'
	}, 1000);
	$('#box').animate({
		'bottom' : '300px'
	}, 1000);
	$('#box').delay(1000).animate({
		'width' : '300px'
	}, 1000);
	$('#box').animate({
		'height' : '300px'
	}, 1000);
});

动画全局属性
jQuery 提供了两种全局设置的属性,分别为:
$.fx.interval设置每秒运行的帧数
$.fx.off，关闭页面上所有的动画

$.fx.interval 属性可以调整动画每秒的运行帧数，默认为 13 毫秒
/设置运行帧数为1000毫秒 默认为 13
$.fx.interval = 1000;
$('.button').click(function () {
	$('#box').toggle(3000);
});
//设置动画为关闭true
$.fx.off = true;//默认为 false

补充：在.animate()方法中，还有一个参数，easing 运动方式，这个参数。
自带的参数有两个：swing(缓动)、linear(匀速)，默认为 swing。
$('.button').click(function () {
	$('#box').animate({
		left : '800px'
	}, 'slow', 'swing');
	$('#pox').animate({
		left : '800px'
	}, 'slow', 'linear');
});

jQuery插件：validate.js
http://jqueryvalidation.org/
学习要点：
1.使用 validate.js 插件
2.默认验证规则
3.validate()方法和选项
4.validate.js 其他功能

验证插件（validate.js），是一款验证常规表单数据合法性的插件。
使用它，极大的解放了在表单上繁杂的验证过程，
并且错误提示显示的完善也增加了用户体验。

使用validate.js插件
第一步：引入 validate.js
<script type="text/javascript" src="js/jquery.validate.js"></script>
第二步：在 JS 文件中执行
$('form').validate();

默认验证规则
Validate.js 的默认验证规则的写法有两种形式：
1.控件属性方式
2.JS 键值对传参方式

required:true //必须输入字段
email:true //必须输入正确格式的电子邮件
url:true //必须输入正确格式的网址
date:true //必须输入正确格式的日期（IE6 验证出错）
dateISO:true //必须输入正确格式的日期(ISO) （只验证格式， 不验证有效）
number:true //必须输入合法的数字(负数，小数)
digits:true //必须输入正整数
creditcard:true //必须输入合法的信用卡号，例如：5105105105105100
equalTo:"#field" //输入值必须和#field 相同
minlength:5 //输入长度最小是 5 的字符串(汉字算一个字符)
maxlength:10 //输入长度最多是 10 的字符串(汉字算一个字符)
rangelength:[5,10] //输入长度介于 5 和 10 之间的字符串")(汉字算一个字符)
range:[5,10] //输入值必须介于 5 和 10 之间
min:5 //输入值不能小于 5
max:10 //输入值不能大于 10

//使用控件方式验证“必填和不得小于两位”
<input type="text" class="required" minlength="2" name="user" id="user" />
注意：默认规则里设置布尔值的，直接写到 class 里即可实现。如果是数字或数组区间，
直接使用属性=值的方式即可。
而对于错误提示是因为，可以引入中文汉化文件，或直接替换掉即可。

//使用 JS 对象键值对传参方式设置
$('#reg').validate({
	rules : {
		user : { //只有一个规则的话，
			required : true,//直接 user : 'required',
			minlength : 2,
		},
	},
	messages : {
		user : {
			required : '帐号不得为空！',
			minlength : '帐号不得小于 2 位！',
		},
	}
});
注意：由于第一种形式不能设置指定的错误提示信息。
我们推荐使用第二种形式，第二种形式也避免的HTML污染。

//所有规则演示
$('#reg').validate({
	rules : {
		email : {
			email : true
		},
		url : {
			url : true
		},
		date : {
			date : true
		},
		dateIOS : {
			dateIOS : true
		},
		number : {
			number : true
		}
		digits : {
			digits : true
		},
		creditcard : {
			creditcard : true
		},
		min : {
			min : 5
		},
		range : {
			range : [5, 10]
		},
		rangelength : {
			rangelength : [5,10]
		},
		notpass : {
			equalTo : '#pass'
		}
	}
});

validate()的方法和选项
除了默认的验证规则外，validate.js还提供了大量的其他属性和方法
比如，调试属性，错误提示位置一系列比较有用的选项

//jQuery.format 格式化错误提示
$('#reg').validate({
	rules : {
		user : {
			required : true,
			minlength : 5,
			rangelength : [5,10]
		},
	},
	messages : {
		user : {
			required : '帐号不得为空！',
			minlength : '帐号不得小于{0}位！',
			rangelength : '帐号限制在{0}-{1}位！'
		},
	},
});

//开启调试模式禁止提交
$('#reg').validate({
	debug : true,
});
//设置调试模式为默认，可以禁止多个表单提交
$.validator.setDefaults({
	debug : true,
});
//使用其他方式代替默认提交
submitHandler : function (form) {
	//可以执行 ajax 提交，并且无须 debug:true 阻止提交了
},
//忽略某个字段验证
ignore : '#pass',
//显示群组的错误提示
focusInvalid : false,
errorPlacement : function (error, element) {
	$.each(error, function (index, value) {
		$('.myerror').html($('.myerror').html() + $(value).html());
	})
},
//群组错误提示
groups : {
	myerror : 'user pass',
},
//显示群组的错误提示
focusInvalid : false,
errorPlacement : function (error, element) {
	$.each(error, function (index, value) {
		$('.myerror').html($('.myerror').html() + $(value).html());
	})
},
//群组错误提示，分开
groups : {
	error_user : 'user',
	error_pass : 'pass'
},
//将群组的错误指定存放位置
errorPlacement : function (error, element) {
	error.appendTo('.myerror');
},
//设置错误提示的 class 名
errorClass : 'error_list'
//设置错误提示的标签
errorElement : 'p'
//统一包裹错误提示
errorLabelContainer : 'ol.error'
wrapper : 'li'
//设置成功后加载的 class
success : 'success',
//使用方法加载 class 并添加文本
success : function (label) {
	label.addClass('success').text('ok');
},
//高亮显示有错误的元素，变色式
highlight: function(element, errorClass) {
	$(element).css('border', '1px solid red');
},
//成功的元素移出错误高亮
unhighlight : function (element, errorClass) {
	$(element).css('border', '1px solid #ccc');
},
//表单提交时获取信息
invalidHandler : function (event, validator) {
	var errors = validator.numberOfInvalids();
	if (errors) {
		$('.myerror').html('您有' + errors + '个表单元素填写非法！');
	}
},
//获取错误提示句柄，不用提交及时获取值
showErrors : function (errorMap, errorList) {
	var errors = this.numberOfInvalids();
	if (errors) {
		$('.myerror').html('您有' + errors + '个表单元素填写非法！');
	} else {
		$('.myerror').hide();
	}
	this.defaultShowErrors(); //执行默认错误
},
//获取错误提示句柄，errorList
showErrors : function (errorMap, errorList) {
	alert(errorList[0].message); //得到错误信息
	alert(errorList[0].element); //当前错误的表单元素
},

validate.js 提供了一些事件触发的默认值，这些值呢，大部分建议是不用更改的。 
//取消提交验证 
onsubmit: false, //默认是 true 

//设置鼠标离开不触发验证 
onfocusout: false, //默认为 true

//设置键盘按下弹起不触发验证 
onkeyup:false, //默认为 true 
注意：只要设置了，在测试的浏览器不管是 false 还是 true 都不触发了。

//设置点击 checkbox 和 radio 点击不触发验证 
onclick:false, //默认为 true

//判断表单所验证的元素是否全部有效 
alert($('#reg').valid()); //全部有效返回 true

Validate.js 提供了可以单独验证每个表单元素的 rules 方法，
不但提供了 add 增加验证， 还提供了 remove 删除验证的功能。
//给 user 增加一个表单验证 
$('#user').rules('add',{ 
	required:true, minlength:2, 
	messages:{ 
		required:'帐号不得为空！', 
		minlength:jQuery.format('帐号不得小于{0}位！'), 
	} 
});
//删除 user 的所有验证规则 
$('#user').rules('remove');
//删除 user 的指定验证规则 
$('#user').rules('remove', 'minlength min max');
//添加自定义验证 
$.validator.addMethod('code',function(value,element){ 
	var tel =/^[0-9]{6}$/; 
	return this.optional(element) || (tel.test(value)); 
},'请正确填写您的邮政编码');
//调用自定义验证 
rules:{ 
	code:{ 
		required:true, 
		code:true, 
	} 
},
