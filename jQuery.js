jQuery����
ѧϰҪ�㣺
1.ʲô�� jQuery
2.jQuery �İ汾
3.�Ƿ���ݵͰ汾 IE
4.���ؼ����� jQuery

ʲô�� jQuery
jQuery��һ��JavaScript�⣬��ͨ����װԭ����JavaScript�����õ�һ���׶���õķ�����
����������John Resig����2006�괴����һ����Դ��Ŀ������Խ��Խ�࿪���ߵļ��룬
jQuery�Ѿ�������JavaScript�� CSS�� DOM��Ajax��һ���ǿ���ܡ� 
�����������ٵĴ��룬��ɸ��ิ�Ӷ����ѵĹ��ܣ��Ӷ��õ��˿����ߵ�������
��ּ���Ը��ٵĴ��롢ʵ�ָ���Ĺ���

jQuery����:jQuery.com
jQuery�汾:2.x��С���죬����֧�ֵͰ汾IE

jQuery����:http://jquery.com/download/
��һ������:
//������ť����
$(function () {
	$('input').click(function () {
		alert('��һ�� jQuery ����');
	});
});

��������
ѧϰҪ�㣺
1.������
2.����ģʽ
3.���󻥻�
4.�����֮��ĳ�ͻ

������
��jQuery�����У�������ҳ��Ԫ�ص�ѡ�����õĹ��ܺ�����������Ԫ���š�$������
ʼ�ġ��������$������jQuery��������Ҫ�Ҷ��еĶ���jQuery��������������ҳ��Ԫ
��ѡ���ִ�й��ܺ�����ʱ�������ôд

$(function () {});//ִ��һ����������
$(��#box��);//����ִ�е�IDԪ��ѡ��
$(��#box��).css(��color��, ��red��);//ִ�й��ܺ���
����$�������jQuery�������д��ʽ����ôҲ����˵��������δ���Ҳ����д������
jQuery(function () {});
jQuery(��#box��);
jQuery(��#box��).css(��color��, ��red��);

ִ����.css()������ܺ��������շ��صĻ���jQuery������ôҲ��
��˵��jQuery�Ĵ���ģʽ�ǲ��õ���׺��ʽ�����Բ�ͣ���������ù��ܺ�����
$('#box').css('color', 'red')attr; //��ʽ����

����ģʽ
�ӳټ���:
$(document).ready(function () {});
��д��ʽ��$(function () {});
ֻ��Ҫ�ȴ���ҳ�е�DOM�ṹ������ϣ�����ִ�а����Ĵ��롣
����ִ�ж�Σ����ᱻ��һ�θ��ǡ�
��ʵ��Ӧ���У����Ƕ�����ֱ��ȥʹ��window.onload����Ϊ����Ҫ�ȴ�ͼƬ֮��Ĵ�
��Ԫ�ؼ�����Ϻ����ִ��JS���롣

���󻥻�
jQuery ������Ȼ�� jQuery ����еĶ��󣬵���Ҳ��ͨ��JavaScript��װ������
alert($);//jQuery ���󷽷��ڲ�
alert($());//jQuery ���󷵻صĶ��󣬻��� jQuery
alert($('#box'));//����IDԪ�ط��ض��󣬻��� jQuery

jQuery ��Ҫ�ﵽ��ȡԭ���� DOM ���󣬿�����ô����
alert($('#box').get(0));//ID Ԫ�صĵ�һ��ԭ�� DOM

�����֮��ĳ�ͻ
jQuery.noConflict();//��$������Ȩ�޳�
var $$ = jQuery;//����һ��$$�� jQuery ����

����ѡ����
ѧϰҪ�㣺
1.��ѡ����
2.����ѡ����
3.�߼�ѡ����

��ѡ����
��ʹ��jQueryѡ����ʱ���������ȱ���ʹ�á�$()����������װ���ǵ�CSS����
$('div').css('color', 'red');//Ԫ��ѡ���������ض��Ԫ��
$('#box').css('color', 'red');//ID ѡ���������ص���Ԫ��
$('.box').css('color', 'red');//��(class)ѡ���������ض��Ԫ��

����ѡ����
ѡ����       CSSģʽ            jQueryģʽ          ����
Ⱥ��ѡ����   span,em,.box {}    $('span,em,.box')   ��ȡ���ѡ������DOM����
���ѡ����   ul li a {}         $('ul li a')        ��ȡ׷�ݵ��Ķ��DOM����
ͨ��ѡ����   *{}                $('*')              ��ȡ����Ԫ�ر�ǩ��DOM����
����һ��ѡ������������ ID ����(class)��ָ��Ԫ��ǰ׺�����磺
$('div.box');//�޶�������.box Ԫ�ػ�ȡ������ div
$('p#box div.side');//ͬ��

�߼�ѡ����
ѡ����        CSSģʽ   jQueryģʽ   ����
��ѡ����      div>p {}  $('div>p')   ֻ��ȡ����ڵ�Ķ�� DOM ����
nextѡ����    div+p {}  $('div+p')   ֻ��ȡĳ�ڵ��һ��ͬ��DOM����
nextAllѡ���� div~p {}  $('div~p')   ��ȡĳ�ڵ��������ͬ��DOM����

//���ѡ����
$('#box p').css('color','red');
jQueryΪ���ѡ�����ṩ��һ���ȼ�find()����
$('#box').find('p').css('color','red');

//��ѡ���������Ӻ�ʧ��
$('#box>p').css('color','red');
$('#box').children('p').css('color','red');

//nextѡ����(��һ��ͬ���ڵ�)
$('#box+p').css('color','red');
$('#box').next('p').css('color','red');

//nextAll ѡ����(��������ͬ���ڵ�)
$('#box~p').css('color', 'red');
$('#box').nextAll('p').css('color','red');

Ϊ�˲���߼�ѡ������������ģʽ��jQuery���ṩ�˸��ӷḻ�ķ�����ѡ��Ԫ�أ�
$('#box').prev('p').css('color','red');//ͬ����һ��Ԫ��
$('#box').prevAll('p').css('color','red');//ͬ�����������Ԫ��

$('#box').siblings('p').css('color', 'red');//ͬ����������Ԫ��ѡ��
//�ȼ������棺
$('#box').prevAll('p').css('color', 'red');//ͬ��������Ԫ��ѡ��
$('#box').nextAll('p').css('color', 'red');//ͬ��������Ԫ��ѡ��

//����ѡ����
$('a[title]').css('color','red');
$('a[title=xxx]').css('color','red');
$('a[title^=xxx]').css('color','red');//ѡ��������������ҿ�ͷ����ֵƥ���
$('a[title$=xxx]').css('color','red');//ѡ��������������ҽ�β����ֵƥ���
$('a[title!=xxx]').css('color','red');//ѡ�������������������ֵ����ȵ�

ѡ��������������
//������죬��ʹ��ԭ���� getElementById��ByName��ByTagName �� querySelectorAll()
$('#box').find('p');

//jQuery ���Զ����������ת��$('#box').find('p')����ᵼ��һ����������ʧ���������
����ʽ���� 5%-10%
$('p', '#box');

//��������� jQuery �ڲ�����ʹ��$.sibling()�� javascript �� nextSibling()������һ������
���ڵ㡣����������ʽ��Լ�� 50%
$('#box').children('p');

//jQuery �ڲ�ʹ�� Sizzle ���棬�������ѡ������Sizzle �����ѡ��˳���Ǵ��ҵ���
���������������ѡ p��Ȼ����һ�������˳���Ԫ��#box���⵼������������ʽ��Լ��70%
$('#box>p');

//�����������һ����ͬ������������ǣ���һ��ֻѡ��ֱ�ӵ���Ԫ�أ���һ��������
ѡ��༶��Ԫ�أ����������ٶȸ�������ű�������ʽ���� 77%��
$('#box p');

//jQuery �ڲ��Ὣ�������ת��$('#box').find('p')����������ʽ���� 23%��
$('p', $('#box'));

���������������� find()��������������$('#box p')���ָ߼�ѡ���������һ��ʼ��
$('#box')���и�ֵ����ô jQuery �Ͷ���������л��棬��ô�ٶȻ��һ����ߡ�
var box = $('#box');
var p = box.find('p');

����ѡ����
ѧϰҪ�㣺
1.����������
2.���ݹ�����
3.�ɼ��Թ�����
4.��Ԫ�ع�����

����������
$('li:first').css('background', '#ccc');//��һ��Ԫ��
$('li:last).css('background', '#ccc');//���һ��Ԫ��
$('li:not(.red)).css('background', '#ccc');//�� class Ϊ red ��Ԫ��
$('li:even').css('background', '#ccc');//����Ϊż����Ԫ��
$('li:odd).css('background', '#ccc');//����Ϊ������Ԫ��
$('li:eq(2)).css('background', '#ccc');//ָ������ֵ��Ԫ��
$('li:gt(2)').css('background', '#ccc');//��������ֵ��Ԫ��
$('li:lt(2)').css('background', '#ccc');//С������ֵ��Ԫ��
$(':header').css('background', '#ccc');//ҳ������ h1 ~ h6 Ԫ��
$('input').get(0).focus();//�ȳ�ʼ������һ��Ԫ�ؽ���
$(':focus').css('background', 'red');//�������Ԫ��

jQuery Ϊ��õĹ������ṩ��ר�õķ������Ѵﵽ�ᵽ���ܺ�Ч�ʵ����ã�
$('li').eq(2).css('background','#ccc');//Ԫ�� li �ĵ�����Ԫ�أ������Ӻ�ʼ
$('li').first().css('background','#ccc');//Ԫ�� li �ĵ�һ��Ԫ��
$('li').last().css('background','#ccc');//Ԫ�� li �����һ��Ԫ��
$('li').not('.red').css('background','#ccc');//Ԫ�� li ���� class Ϊ red ��Ԫ��

���ݹ�����
//ѡ��Ԫ���ı��ڵ㺬�� abc.com �ı���Ԫ��
$('div:contains("abc.com")').css('background', '#ccc');
$('div:empty').css('background', '#ccc');//ѡ���Ԫ��
$('ul:has(.red)').css('background', '#ccc');//ѡ����Ԫ�غ���class��red��Ԫ��
$(':parent').css('background', '#ccc');//ѡ��ǿ�Ԫ��

jQuery�ṩ��һ��has()���������:has�����������ܣ�
$('ul').has('.red').css('background','#ccc');//ѡ����Ԫ�غ��� class �� red ��Ԫ��

jQuery �ṩ��һ�����ƺ�:parent ���Ƶķ����� ���������������ѡȡ������Ԫ�ػ��ı�
��Ԫ�أ����ǻ�ȡ��ǰԪ�صĸ�Ԫ�أ����ص���Ԫ�ؼ��ϡ�
$('li').parent().css('background', '#ccc');//ѡ��ǰԪ�صĸ�Ԫ��
$('li').parents().css('background', '#ccc');//ѡ��ǰԪ�صĸ�Ԫ�ؼ�����Ԫ��
$('li').parentsUntil('div').css('background','#ccc'); //ѡ��ǰԪ������div��Ԫ��ֹͣ

�ɼ��Թ�����
$('p:hidden).size();//Ԫ�� p ���ص�Ԫ��
$('p:visible').size();//Ԫ�� p ��ʾ��Ԫ��

��Ԫ�ع�����
$('li:first-child').css('background', '#ccc');//ÿ����Ԫ�ص�һ��liԪ��
$('li:last-child').css('background', '#ccc');//ÿ����Ԫ�����һ��liԪ��
$('li:only-child').css('background', '#ccc');//ÿ����Ԫ��ֻ��һ��liԪ��
$('li:nth-child(odd)').css('background', '#ccc');//ÿ����Ԫ������liԪ��
$('li:nth-child(even)').css('background', '#ccc');//ÿ����Ԫ��ż��liԪ��
$('li:nth-child(2)').css('background', '#ccc');//ÿ����Ԫ�ص�����liԪ��
$('div:nth-child(2n-1)').css("color","red");

����DOM��CSS����
ѧϰҪ�㣺
1.����Ԫ�ؼ�����
2.Ԫ�����Բ���
3.Ԫ����ʽ����
4.CSS����

�ڳ����DOMԪ���У����ǿ���ʹ��html()��text()������ȡ�ڲ������ݡ�
$('#box').html();//��ȡ html ����
$('#box').text();//��ȡ�ı����ݣ����Զ�����html��ǩ
$('#box').html('<em>www.li.cc</em>');//����html����
$('#box').text('<em>www.li.cc</em>');//�����ı����ݣ����Զ�ת��html��ǩ

ע�⣺������ʹ�� html()�� text()����Ԫ���������ʱ�������ԭ�������ݡ�
�����������ܹ�׷�����ݵĻ�����Ҫ�Ȼ�ȡԭ�������ݡ�
$('#box').html($('#box').html() + '<em>www.li.cc</em>');//׷������

���Ԫ���Ǳ��Ļ���jQuery �ṩ�� val()�������л�ȡ�������ڲ����ı����ݡ�
$('input').val();//��ȡ������
$('input').val('www.li.cc');//���ñ�����

��������ö��ѡ���ѡ��״̬������ͨ�����鴫�ݲ�����
$("input").val(["check1","check2", "radio1" ]);//value ֵ����Щ�Ľ���ѡ��

Ԫ�����Բ���
$('div').attr('title');
//��ȡ���Ե�����ֵ
$('div').attr('title', '��������');
//�������Լ�����ֵ
$('div').attr('title', function () {
	//ͨ������������������ֵ
	return '���Ƿ���ֵ';
});
$('div').attr('title', function (index, value) {
	//���Խ����������� ���� ֵ
	return value + (index+1) + '���Ƿ���ֵ';
});

$('div').removeAttr('title');//ɾ��ָ��������

Ԫ����ʽ����

css(name)��ȡĳ��Ԫ�����ڵ� CSS ��ʽ
css([name1, name2, name3])��ȡĳ��Ԫ�����ڶ�� CSS ��ʽ
css(name, value)����ĳ��Ԫ�����ڵ� CSS ��ʽ
css(name, function (index, value) )����ĳ��Ԫ�����ڵ� CSS ��ʽ
css({name1 : value1, name2 : value2})����ĳ��Ԫ�����ڶ�� CSS ��ʽ
addClass(class)��ĳ��Ԫ�����һ�� CSS ��
addClass(class1 class2 class3...)��ĳ��Ԫ����Ӷ�� CSS ��
removeClass(class)ɾ��ĳ��Ԫ�ص�һ�� CSS ��
removeClass(class1 class2 class3...)ɾ��ĳ��Ԫ�صĶ�� CSS ��
toggleClass(class)�����л�Ĭ����ʽ��ָ����ʽ
toggleClass(class1 class2 class3...)ͬ��
toggleClass(class, switch)�����л���ʽ��ʱ�������л�Ƶ��
toggleClass(function () {})ͨ���������������л��Ĺ���
toggleClass(function () {}, switch)��������������ʱҲ��������Ƶ��
toggleClass(function (i, c, s) {}, switch)��������������ʱ������������

$('div').css('color');//��ȡԪ������ CSS ��ʽ����ɫ
$('div').css('color', 'red');//����Ԫ������ CSS ��ʽ��ɫΪ��ɫ

�� CSS ��ȡ�ϣ�����Ҳ���Ի�ȡ��� CSS ��ʽ������ȡ������һ���������飬�����
��ͳ��ʽ���н�����Ҫʹ�� for in ������
var box = $('div').css(['color', 'height', 'width']);//�õ���� CSS ��ʽ���������
for (var i in box) {
	//�����������
	alert(i + ':' + box[i]);
}

jQuery �ṩ��һ����������ר�����������ֶ������飬$.each()�������������������
�ɵı����������顣
$.each(box, function (attr, value) {//���� JavaScript ԭ��̬�Ķ�������
	alert(attr + ':' + value);
});

ʹ��$.each()���Ա���ԭ���� JavaScript �������飬�����jQuery�����������ôʹ
��.each()�����أ�
$('div').each(function (index, element) {//index Ϊ������element ΪԪ�� DOM
	alert(index + ':' + element);
});

����Ҫ���ö����ʽ��ʱ�����ǿ��Դ��ݶ�� CSS ��ʽ�ļ�ֵ�Լ��ɡ�
$('div').css({
	'background-color' : '#ccc',
	'color' : 'red',
	'font-size' : '20px'
});
���������ĳ��Ԫ�ص� CSS ��ʽ��ֵ�� �����ֵ��Ҫ�������ǿ��Դ���һ������������
$('div').css('width', function (index, value) {
	return (parseInt(value) - 500) + 'px';
});

�������� CSS ���ã�����Ҳ����ֱ�Ӹ�Ԫ����� CSS �࣬������ӵ�������������
Ҳ����ɾ������
$('div').addClass('red');//���һ�� CSS ��
$('div').addClass('red bg');//��Ӷ�� CSS ��
$('div').removeClass('bg');//ɾ��һ�� CSS ��
$('div').removeClass('red bg');//ɾ����� CSS ��

����¼���ʵ�� CSS �����ʽ�л����ܡ�
$('div').click(function () {//������󴥷�
	$(this).toggleClass('red size');//������ʽ�����ʽ����
});

.toggleClass()�����ĵڶ����������Դ���һ������ֵ�� true��ʾִ���л��� class�࣬ false
��ʾִ�л�Ĭ�� class ��(Ĭ�ϵ��ǿ� class)������������ԣ����ǿ��������л���Ƶ�ʡ�
var count = 0;
$('div').click(function () {//ÿ��������л�һ�� red
	$(this).toggleClass('red', count++ % 3 == 0);
});

Ĭ�ϵ� CSS ���л�ֻ��������ʽ��ָ����ʽ֮����л��������ʵ����ʽ 1 ����ʽ 2
֮����л��������Լ�дһЩ�߼���
$('div').click(function () {
	$(this).toggleClass('red size');//һ��ʼ�л�����ʽ 2
	if ($(this).hasClass('red')) {//�ж���ʽ 2 ���ں�
		$(this).removeClass('blue');//ɾ����ʽ 1
	} else {
		$(this).toggleClass('blue');//�����ʽ 1������Ҳ���� addClass
	}
});

����ķ�����Ϊ������.toggleClass()�����ṩ�˴������������ķ�ʽ��������������Ҫ
�л��Ĺ���
$('div').click(function () {
	$(this).toggleClass(function () {//������������������Ҫ�л�����ʽ
		return $(this).hasClass('red') ? 'blue' : 'red size';
	});
});
ע�⣺������Ȼһ�仰ʵ����������ܣ���������һЩСȱ�ݣ���Ϊԭ���� class ��û
�б�ɾ����ֻ����������˶��ѡ����ԣ���Ҫ��дһ�¡�
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
����Ҳ�����ڴ�������������ģʽ�£����ӵڶ���Ƶ�ʲ�����
var count = 0;
$('div').click(function () {
	$(this).toggleClass(function () {
		return $(this).hasClass('red') ? 'blue' : 'red size';
	},count++ % 3 == 0);//������Ƶ��
});

����.toggleClass()�������������ķ����������Դ��� index ������class �����������Լ�
Ƶ�ʲ���ֵ�����Եõ���ǰ��������class ������Ƶ�ʲ���ֵ��
var count = 0;
$('div').click(function () {
	$(this).toggleClass(function (index, className, switchBool) {
		alert(index + ':' + className + ':' + switchBool);//�õ���ǰֵ
		return $(this).hasClass('red') ? 'blue' : 'red size';
	},count++ % 3 == 0);
});

CSS����
$('div').width();//��ȡԪ�صĳ��ȣ� ���ص�����Ϊ number
$('div').width(500);//����Ԫ�س��ȣ�ֱ�Ӵ���ֵ��Ĭ�ϼ� px
$('div').width(function (index, value) {//index ��������value ��ԭ��ֵ
	return value - 500;//����������ͣ�ֱ�Ӽ���
});

$('div').height();//��ȡԪ�صĸ߶ȣ� ���ص�����Ϊ number
$('div').height(500);//����Ԫ�ظ߶ȣ�ֱ�Ӵ���ֵ��Ĭ�ϼ� px
$('div').height('500pt');//ͬ�ϣ������� pt ��λ
$('div').height(function (index, value) {//index ��������value ��ԭ��ֵ
	return value - 1;//����������ͣ�ֱ�Ӽ���
});

alert($('div').width());//������
alert($('div').innerWidth());//�����ڱ߾� padding
alert($('div').outerWidth());//�����ڱ߾� padding+�߿� border
alert($('div').outerWidth(true));//�����ڱ߾� padding+�߿� border+��߾� margin
alert($('div').innerHeight());//�����ڱ߾� padding
alert($('div').outerHeight());//�����ڱ߾� padding+�߿� border
alert($('div').outerHeight(true));//�����ڱ߾� padding+�߿� border+��߾� margin

$('strong').offset().left;//������ӿڵ�ƫ��
$('strong').position().left;//����ڸ�Ԫ�ص�ƫ��
$(window).scrollTop();//��ȡ��ǰ��������λ��
$(window).scrollTop(300);//���õ�ǰ��������λ��
$(window).scrollLeft();//��ȡ��ǰ��������λ��
$(window).scrollLeft(300);//���õ�ǰ��������λ��

DOM�ڵ����
ѧϰҪ�㣺
1.�����ڵ�
2.����ڵ�
3.�����ڵ�
4.�ڵ����

�����ڵ�
var box = $('<div id="box">�ڵ�</div>');//����һ���ڵ�
$('body').append(box);//���ڵ���뵽<body>Ԫ���ڲ�

�ڲ�����ڵ㷽��:
append(content)//��ָ��Ԫ���ڲ��������ڵ� content
$('div').append('<strong>�ڵ�</strong>');//�� div �ڲ����� strong �ڵ�

append(function (index, html) {})//ʹ������������ָ��Ԫ���ڲ��������ڵ�
$('div').append(function (index, html) {//ʹ��������������ڵ㣬html��ԭ�ڵ�
	return '<strong>�ڵ�</strong>';
});

appendTo(content)//��ָ��Ԫ�����뵽ָ��Ԫ�� content �ڲ�����
$('span').appendTo('div');//span�ڵ�����div�ڵ���
$('span').appendTo($('div'));

prepend(content)//��ָ��Ԫ�� content �ڲ���ǰ�����ڵ�
$('div').prepend('<span>�ڵ�</span>');//�� span ���뵽 div �ڲ���ǰ��

prepend(function (index, html) {})//ʹ������������ָ��Ԫ���ڲ���ǰ�����ڵ�
$('div').append(function (index, html) {//ʹ������������ͬ��
	return '<span>�ڵ�</span>';
});

prependTo(content)//��ָ��Ԫ�����뵽ָ��Ԫ�� content �ڲ�ǰ��
$('span').prependTo('div');//�� span ���� div �ڲ���ǰ��
$('span').prependTo($('div'));

�ⲿ����ڵ㷽��
after(content)//��ָ��Ԫ�ص��ⲿ�������ڵ� content
after(function (index, html) {})//ʹ������������ָ��Ԫ�ص��ⲿ�������ڵ�
before(content)//��ָ��Ԫ�ص��ⲿǰ�����ڵ� content
before(function (index, html) {})//ʹ������������ָ��Ԫ�ص��ⲿǰ�����ڵ�
insertAfter(content)//��ָ���ڵ��Ƶ�ָ��Ԫ�� content �ⲿ�ĺ���
insertBefore(content)//��ָ���ڵ��Ƶ�ָ��Ԫ�� content �ⲿ��ǰ��

$('div').after('<span>�ڵ�</span>'); //��div��ͬ���ڵ�������span
$('div').after(function (index, html) { //ʹ������������ͬ��
	return '<span>�ڵ�</span>';
});
$('div').before('<span>�ڵ�</span>'); //��div��ͬ���ڵ�ǰ�����span
$('div').before(function (index, html) { //ʹ������������ͬ��
	return '<span>�ڵ�</span>';
});
$('span').insertAfter('div');//��spanԪ���Ƶ�divԪ���ⲿ�ĺ���
$('span').insertBefore('div');//��spanԪ���Ƶ�divԪ���ⲿ��ǰ��

�����ڵ�
jQuery �ṩ��һϵ�з������ڰ����ڵ㣬���ڵ���˼����ʹ���ַ�
�����뽫ָ��Ԫ�صĴ��������
$('div').wrap('<strong></strong>');//�� div ������һ�� strong
$('div').wrap('<strong>123</strong>');//������Ԫ�ؿ��Դ�����
$('div').wrap('<strong><em></em></strong>');//�������Ԫ��
$('div').wrap($('strong').get(0));//Ҳ���԰���һ��ԭ��DOM
$('div').wrap(document.createElement('strong')); //��ʱ��ԭ�� DOM
$('div').wrap(function (index) {//��������
	return '<strong></strong>';
});
$('div').unwrap();//�Ƴ�һ��������ݣ�������Ƴ����
$('div').wrapAll('<strong></strong>');//����div����ֻ��һ��strong
$('div').wrapAll($('strong').get(0));//ͬ��
$('div').wrapInner('<strong></strong>');//������Ԫ������
$('div').wrapInner($('strong').get(0));//DOM �ڵ�
$('div').wrapInner(function () {//��������
	return '<strong></strong>';
});
ע�⣺.wrap()��.wrapAll()��������ǰ�߰�ÿ��Ԫ�ص���һ�������壬�ֱ����һ����㣻
���߽�����Ԫ����Ϊһ��������Ϊһ�������壬ֻ����һ����㡣�����ֶ���������
������.wrapInner()���ڲ������

�ڵ����
//���ƽڵ�
$('body').append($('div').clone(true)); //����һ���ڵ���ӵ�HTML��
//ɾ���ڵ�
$('div').remove(); //ֱ��ɾ�� div Ԫ��
//�����¼���ɾ���ڵ�
$('div').detach();//�����¼���Ϊ��ɾ��
ע�⣺.remove()��.detach()����ɾ���ڵ㣬��ɾ�����������Է��ص�ǰ��ɾ���Ľ�
����󣬵���������ǰ���ڻָ�ʱ�������¼���Ϊ������������
//��սڵ�
$('div').empty();//ɾ�����ڵ��������
//�滻�ڵ�
$('div').replaceWith('<span>�ڵ�</span>');//��div�滻��spanԪ��
$('<span>�ڵ�</span>').replaceAll('div');
ע�⣺�ڵ㱻�滻�����������¼���Ϊ��ȫ����ʧ�ˡ�

��ѡ����
ѧϰҪ�㣺
1.����ѡ����
2.��ѡ����
3.��������

����ѡ����
$('input').val(); //Ԫ������λ��Ĭ�ϻ�ȡ��һ��
$('input').eq(1).val(); //ͬ�ϣ���ȡ�ڶ���
$('input[type=password]').val(); //ѡ�� type Ϊ password ���ֶ�
$('input[name=user]').val(); //ѡ�� name Ϊ user ���ֶ�

��ѡ����
$(':input').size(); //ѡȡ����input textarea select��buttonԪ��
$(':text).size(); //��ȡ�����ı���Ԫ��
$(':password').size(); //��ȡ������Ԫ��
$(':radio).size(); //��ȡ��ѡ��Ԫ��
$(':checkbox).size(); //��ȡ��ѡ��Ԫ��
$(':submit).size(); //��ȡ�ύ��ťԪ��
$(':reset).size(); //��ȡ���ð�ťԪ��
$(':image).size(); //��ȡͼƬ��ťԪ��
$(':file).size(); //��ȡ�ļ���ťԪ��
$(':button).size(); //��ȡ��ͨ��ťԪ��
$(':hidden).size(); //��ȡ�����ֶ�Ԫ��

���ȡĳһ��ָ����Ԫ�أ���ý��һ������ѡ����
$(':text[name=user]).size();//��ȡ�����ı���name=user��Ԫ��

��������
$(':enabled').size(); //��ȡ����Ԫ��
$(':disabled).size(); //��ȡ������Ԫ��
$(':checked).size(); //��ȡ��ѡ����ѡ���б�ѡ�е�Ԫ��
$(':selected).size(); //��ȡ�����б��б�ѡ�е�Ԫ��

�����¼�
ѧϰҪ�㣺
1.���¼�
2.��д�¼�
3.�����¼�

���õ��¼��У� click�� dblclick��mousedown�� mouseup�� mousemove��
mouseover�� mouseout�� change�� select�� submit�� keydown��
keypress��keyup��blur��focus��load��resize��scroll��error��

//ʹ�õ���¼�
$('input').bind('click', function () {
	//�����ť��ִ����������
	alert('�����');
});

//����ͬʱ�󶨶���¼�
$('input').bind('mouseout mouseover', function () {
	//������Ƴ��ֱ�ִ��һ��
	$('div').html(function (index, value) {
		return value + '1';
	});
});

//ͨ�������ֵ�԰󶨶������
$('input').bind({
	//����һ������
	'mouseout' : function () {
		//�¼��������ſ���ʡ��
		alert('�Ƴ�');
	},
	'mouseover' : function () {
		alert('����');
	}
});

//ʹ�� unbind ɾ���󶨵��¼�
$('input').unbind();//ɾ�����е�ǰԪ�ص��¼�

//ʹ�� unbind ����ɾ��ָ�������¼�
$('input').unbind('click');//ɾ����ǰԪ�ص� click �¼�

//ʹ�� unbind ����ɾ��ָ�����������¼�
function fn1() {
	alert('��� 1');
}
function fn2() {
	alert('��� 2');
}
$('input').bind('click', fn1);
$('input').bind('click', fn2);
$('input').unbind('click', fn1);//ֻɾ�� fn1 ���������¼�

��д�¼�
click(fn)      //����ÿһ��ƥ��Ԫ�ص� click(����)�¼�
dblclick(fn)   //����ÿһ��ƥ��Ԫ�ص� dblclick(˫��)�¼�
mousedown(fn)  //����ÿһ��ƥ��Ԫ�ص� mousedown(�����)�¼�
mouseup(fn)    //����ÿһ��ƥ��Ԫ�ص� mouseup(�������)�¼�
mouseover(fn)  //����ÿһ��ƥ��Ԫ�ص� mouseover(�������)�¼�
mouseout(fn)   //����ÿһ��ƥ��Ԫ�ص� mouseout(����Ƴ�)�¼�
mousemove(fn)  //����ÿһ��ƥ��Ԫ�ص�mousemove(����ƶ�)�¼�
mouseenter(fn) //����ÿһ��ƥ��Ԫ�ص� mouseenter(��괩��)�¼�
mouseleave(fn) //����ÿһ��ƥ��Ԫ�ص� mouseleave(��괩��)�¼�
keydown(fn)    //����ÿһ��ƥ��Ԫ�ص� keydown(���̰���)�¼�
keyup(fn)      //����ÿһ��ƥ��Ԫ�ص� keyup(���̰��µ���)�¼�
keypress(fn)   //����ÿһ��ƥ��Ԫ�ص� keypress(���̰���)�¼�
unload(fn)     //��ж�ر�ҳ��ʱ��һ��Ҫִ�еĺ���
resize(fn)     //����ÿһ��ƥ��Ԫ�ص� resize(�ĵ��ı��С)�¼�
scroll(fn)     //����ÿһ��ƥ��Ԫ�ص� scroll(�������϶�)�¼�
focus(fn)      //����ÿһ��ƥ��Ԫ�ص� focus(���㼤��)�¼�
blur(fn)       //����ÿһ��ƥ��Ԫ�ص� blur(���㶪ʧ)�¼�
focusin(fn)    //����ÿһ��ƥ��Ԫ�ص� focusin(���㼤��)�¼�
focusout(fn)   //����ÿһ��ƥ��Ԫ�ص� focusout(���㶪ʧ)�¼�
select(fn)     //����ÿһ��ƥ��Ԫ�ص� select(�ı�ѡ��)�¼�
change(fn)     //����ÿһ��ƥ��Ԫ�ص� change(ֵ�ı�)�¼�
submit(fn)     //����ÿһ��ƥ��Ԫ�ص� submit(���ύ)�¼�

.mouseover()��.mouseout()��ʾ���������Ƴ���ʱ�򴥷���
.mouseenter()��.mouseleave()��ʾ��괩���ʹ�����ʱ�򴥷���
//HTML ҳ������
<div style="width:200px;height:200px;background:green;">
	<p style="width:100px;height:100px;background:red;"></p>
</div>
<strong></strong>

//mouseover����
$('div').mouseover(function () {
	//����div�ᴥ��������p�ٴ���
	$('strong').html(function (index, value) {
		return value+'1';
	});
});
//mouseenter����
$('div').mouseenter(function () {
	//����div����p
	$('strong').html(function (index, value) {
		//���������ֻ����һ��
		return value+'1';
	});
});
//mouseout�Ƴ�
$('div').mouseout(function () {
	//�Ƴ�p�ᴥ�����Ƴ�div�ٴ���
	$('strong').html(function (index, value) {
		return value+'1';
	});
});
//mouseleave����
$('div').mouseleave(function() {
	//�Ƴ�����div���򴥷�һ��
	$('strong').html(function (index, value) {
		return value+'1';
	});
});

.keydown()��.keyup()���ص��Ǽ��룬��.keypress()���ص����ַ����롣
$('input').keydown(function (e) {
	alert(e.keyCode);//���� a ���� 65
});
$('input').keypress(function (e) {
	alert(e.charCode);//���� a ���� 97
});

.focus()��.blur()�ֱ��ʾ��꼤��Ͷ�ʧ
.focusin()��.focusout()�¼�����ʱ����������Ԫ��
//HTML ����
<div style="width:200px;height:200px;background:red;">
	<input type="text" value="" />
</div>
<strong></strong>
//focus ��꼤��
$('input').focus(function() {//��ǰԪ�ش���
	$('strong').html('123');
});
//focusin ��꼤��
$('div').focusin(function() {//�󶨵���divԪ�أ�����input����
	$('strong').html('123');
});

//���������Ƴ��л�Ч��
$('div').hover(function () {
		$(this).css('background', 'black'); //mouseenterЧ��
	}, function () {
		$(this).css('background', 'red'); //mouseleaveЧ������ʡ��
});

�¼�����
ѧϰҪ�㣺
1.�¼�����
2.ð�ݺ�Ĭ����Ϊ

�¼�����
event���������
type //��ȡ����¼����¼����ͣ�����:click
target //��ȡ���¼���DOMԪ��
data //��ȡ�¼�����ʱ�Ķ�������
relatedTarget //��ȡ�����Ƴ�Ŀ����뿪�������Ǹ�DOMԪ��
currentTarget //��ȡð��ǰ������DOMԪ�أ���ͬ��this
pageX/pageY //��ȡ�����ҳ��ԭ���ˮƽ/��ֱ����
screenX/screenY //��ȡ��ʾ����Ļλ�õ�ˮƽ/��ֱ����
clientX/clientY //��ȡ�����ҳ���ӿڵ�ˮƽ/��ֱ����
result //��ȡ��һ����ͬ�¼��ķ���ֵ
timeStamp //��ȡ�¼�������ʱ���
which //��ȡ���������Ҽ�(1,2,3)�����ȡ���̰���
altKey/shiftKey/ctrlKey/metaKey //��ȡ�Ƿ�����alt��shift��ctrl��meta

//ͨ�� event.type ���Ի�ȡ�����¼���
$('input').click(function (e) {
	alert(e.type);
});
//ͨ�� event.target ��ȡ�󶨵� DOM Ԫ��
$('input').click(function (e) {
	alert(e.target);
});
//ͨ�� event.data ��ȡ�������ݣ����������֡��ַ��������顢����
$('input').bind('click', 123, function (e) {
	//���� data ����
	alert(e.data);//��ȡ��������
});
ע�⣺����ַ����ʹ��ݣ�'123'�����������ʹ��ݣ�[123,'abc']��
����Ƕ���ʹ��ݣ�{user:'Lee', age:100}��
����ĵ��÷�ʽ�ǣ�e.data[1]������ĵ��÷�ʽ�ǣ�e.data.user��

//event.data ��ȡ�������ݣ����ڷ�װ�ļ�д�¼�Ҳ����ʹ��
$('input').click({user : 'Lee', age : 100},function (e) {
	alert(e.data.user);
});

//��ȡ���뵽 div ֮ǰ���Ǹ� DOM Ԫ��
$('div').mouseover(function (e) {
	alert(e.relatedTarget);
});
//��ȡ�Ƴ� div ֮�󵽴�������Ǹ� DOM Ԫ��
$('div').mouseout(function (e) {
	alert(e.relatedTarget);
});
//��ȡ�󶨵��Ǹ� DOM Ԫ�أ��൱�� this��������event.target
$('div').click(function (e) {
	alert(e.currentTarget);
});
ע�⣺event.target �õ����Ǵ���Ԫ�ص� DOM��event.currentTarget�õ�����
����Ԫ�ص�DOM����thisҲ�ǵõ�����Ԫ�ص�DOM��

//��ȡ��һ���¼��ķ���ֵ
$('div').click(function (e) {
	return '123';
});
$('div').click(function (e) {
	alert(e.result);
});
//��ȡ��ǰ��ʱ���
$('div').click(function (e) {
	alert(e.timeStamp);
});
//��ȡ���������Ҽ�
$('div').mousedown(function (e) {
	alert(e.which);
});
//��ȡ���̵İ���
$('input').keyup(function (e) {
	alert(e.which);
});
//��ȡ�Ƿ����� ctrl ����meta �������ڣ������޷�ʹ��
$('input').click(function (e) {
	alert(e.ctrlKey);
});
//��ȡ����Ԫ����굱ǰ��λ��
$(document).click(function (e) {
	alert(e.screenY+ ',' + e.pageY + ',' + e.clientY);
});

ð�ݺ�Ĭ����Ϊ
ð�ݺ�Ĭ����Ϊ��һЩ����
preventDefault() //ȡ��ĳ��Ԫ�ص�Ĭ����Ϊ
isDefaultPrevented() //�ж��Ƿ������ preventDefault()����
stopPropagation() //ȡ���¼�ð��
isPropagationStopped() //�ж��Ƿ������ stopPropagation()����
stopImmediatePropagation() //ȡ���¼�ð�ݣ� ��ȡ�����¼��ĺ����¼�������
isImmediatePropagationStopped() //�ж��Ƿ������stopImmediatePropagation()����

//�ж��Ƿ�ȡ����Ԫ�ص�Ĭ����Ϊ
$('input').keyup(function (e) {
	e.preventDefault();
	alert(e.isDefaultPrevented());
});
//ȡ��ð�ݲ�ȡ�������¼�������
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

//�ж��Ƿ������stopPropagation()����
$('input').click(function (e) {
	e.stopPropagation();
	alert(e.isPropagationStopped());
});
//�ж��Ƿ�ִ����stopImmediatePropagation()����
$('input').click(function (e) {
	e.stopImmediatePropagation();
	alert(e.isImmediatePropagationStopped());
});

�߼��¼�
ѧϰҪ�㣺
1.ģ�����
2.�����ռ�
3.�¼�ί��
4.on��off��one

ģ�����
//�����ť�¼�
$('input').click(function () {
	alert('click');
});
//ģ���û������Ϊ
$('input').trigger('click');

����Ҫ���¼�ִ�д��ݲ������������������ event.data
�Ķ������ݣ����Կ��������֡��ַ��������顢����
$('input').click(function (e, data1, data2) {
	alert(data1 + ',' + data2);
}).trigger('click', ['abc', '123']);
ע�⣺������һ��ֵ��ʱ��ֱ�Ӵ��ݼ��ɡ�

�Զ����¼�����һ����.bind()�󶨵����⺯��
$('input').bind('myEvent', function () {
	alert('�Զ����¼���');
}).trigger('myEvent');

.trigger()�����ṩ�˼�д����
$('input').click(function () {
	alert('click');
}).click();
jQuery���õ��¼����ṩ�˼�д����
blur focusin mousedown resize change focusout 
mousenter scroll click keydown mouseleave select 
dblclick keypress mousemove submit error keyup 
mouseout unload focus load mouseover

jQuery�ṩ������һ��ģ���û���Ϊ�ķ��� .triggerHandler()
���������ʹ�ú�.trigger()����һ����
$('input').click(function () {
	alert('click');
}).triggerHandler('click');
triggerHandler()���������ᴥ���¼���Ĭ����Ϊ����.trigger()��
//ģ���û�ִ���ύ������ת��ִ��ҳ��
$('form').trigger('submit'); 
//ģ���û�ִ���ύ������ֹ��Ĭ����Ϊ
$('form').triggerHandler('submit'); 
.trigger()�ڴ����¼���ʱ�򣬻�ð�ݶ�.triggerHandler()����

�����ռ�
��������¼������Ƴ���������ͬ��ͬԪ�ذ󶨵��¼��Ƴ������Ƚ��鷳��
���ʱ�򣬿���ʹ���¼��������ռ�����
$('input').bind('click.abc', function () {
	alert('abc');
});
$('input').bind('click.xyz', function () {
	alert('xyz');
});
$('input').unbind('click.abc');//�Ƴ�click�������ռ�Ϊabc��
ע�⣺ֱ��ʹ��('.abc')�������Ƴ���ͬ�����ռ�Ĳ�ͬ�¼���
����ģ�����.trigger()��.triggerHandler()���÷�Ҳ��һ���ġ�
$('input').trigger('click.abc');

�¼�ί��
//ʹ��.bind()���߱���̬�󶨹��ܣ�ֻ�е��ԭʼ��ť��������
$('.button').bind('click', function () {
	$(this).clone().appendTo('#box');
});
jQuery1.7 �Ժ��Ƴ���.on()��.off()����ʵ���¼��󶨺�ί��
//���.bind()��ʽ
$('.button').on('click', function () {
	alert('���.bind()');
});
//���.unbind()��ʽ���Ƴ��¼�
$('.button').off('click');
$('.button').off('click', fn);
$('.button').off('click.abc');

//���.live()��.delegate()���¼�ί��
$(document).on('click', 'input[type=button]', function () {
	alert(11);
});
//���.die()��.undelegate()��ȡ���¼�ί��
$('#box').off('click', 'button');


$('#box').on('click', 'button', function () {
	$(this).clone().appendTo('#box');
});

������.bind()����.on()�����¼��󶼲����Զ��Ƴ��¼�
��Ҫͨ��.unbind()��.off()���ֹ��Ƴ�
jQuery�ṩ��.one()��������Ԫ��ִ����Ϻ��Զ��Ƴ��¼�
//������.bind()ֻ����һ��
$('.button').one('click', function () {
	alert('one ������һ�Σ�');
});
//������.delegate()ֻ����һ��
$('#box).one('click', 'input', function () {
	alert('one ������һ�Σ�');
});

����Ч��
ѧϰҪ�㣺
1.��ʾ������
2.��������
3.���롢����
4.�Զ��嶯��
5.�жӶ�������
6.������ط���
7.����ȫ������

��ʾ������
$('input').click(function () {
	//��ʾ
	$('#box').show();
});
$('input').click(function () {
	//����
	$('#box').hide();
});

��.show()��.hide()�������Դ���һ�������������ٶ�
$('.show').click(function () {
	$('#box').show(1000); //��ʾ���� 1 ��
});
$('.hide').click(function () {
	$('#box').hide(1000); //�������� 1 ��
});
slow��normal��fast���ֱ��Ӧ600��400��200����

//ʹ��.show()��.hide()�Ļص�����������ʵ���жӶ���Ч��
$('.show').click(function () {
	$('#box').show('slow', function () {
		alert('����������Ϻ�ִ���ң�');
	});
});

//�жӶ�����ʹ�ú�������������
$('.show').click(function () {
	$('div').first().show('fast', function showSpan() {
		$(this).next().show('fast', showSpan);
	});
});

//����ʹ��toggle()�������л�hide()��show()����
$("button").click(function(){
	$("p").toggle('slow');
});

��������
�ı�Ԫ�ظ߶ȵķ�����.slideUp()��.slideDown()��.slideToggle()��
����˼�壬��������(��)������չ��(����)��
$('.down').click(function () {
	$('#box').slideDown();
});
$('.up').click(function () {
	$('#box').slideUp();
});
$('.toggle').click(function () {
	$('#box').slideToggle();
});
ע�⣺��������Ч������ʾ������Ч��һ����������ͬ�Ĳ���

���롢����
jQuery �ṩ��һ��ר������͸���ȱ仯�ķ�����.fadeIn()��.fadeOut()��
�ֱ��ʾ���롢��������Ȼ����һ���Զ��л��ķ�����.fadeToggle()��
$('.in').click(function () {
	$('#box').fadeIn('slow');
});
$('.out').click(function () {
	$('#box').fadeOut('slow');
});
$('.toggle').click(function () {
	$('#box').fadeToggle();
});
��������͸���ȷ���ֻ���Ǵ�0 ��100�����ߴ�100��0��
jQuery.fadeTo()��������������͸���ȡ�
$('.toggle').click(function () {
	$('#box').fadeTo('slow', 0.33); //0.33 ��ʾֵΪ 33
});
ע�⣺���롢����Ч������ʾ������Ч��һ����������ͬ�Ĳ�����
����.fadeTo()�������������͸���ȴ���ָ��ֵ���ᵭ���������෴��

�Զ��嶯��
jQuery �ṩ��һ��.animate()�������������ǵ��Զ��嶯��
$('.animate').click(function () {
	$('#box').animate({
		'width' : '300px',
		'height' : '200px',
		'fontSize' : '50px',
		'opacity' : 0.5
	});
});
ע�⣺һ�� CSS �仯����һ������Ч��������������У��Ѿ����ĸ� CSS �仯��
�Ѿ�ʵ���˶��ض���ͬ���˶���Ч����
�ش��Ĳ���ֻ��һ��������һ����ֵ�� CSS �仯��ʽ�Ķ���
����������ѡ�����ֱ�Ϊ�ٶȺͻص�������
$('.animate').click(function () {
	$('#box').animate({
		'width' : '300px',
		'height' : '200px'
	}, 1000, function () {
		alert('����ִ�����ִ���ң�');
	});
});
��Ŀǰλ�ã� ���Ƕ��Ǵ����Ĺ̶�λ�ò����Ķ����� 
�����Ҫʵ���˶�״̬��λ�ƶ�����
�Ǿͱ���ʹ���Զ��嶯�������ҽ�� CSS �ľ��Զ�λ���ܡ�
$('.animate').click(function () {
	$('#box').animate({
		'top' : '300px',//�ȱ������� CSS ���Զ�λ
		'left' : '200px'
	});
});
�Զ��嶯���У� ÿ�ο�ʼ�˶��������ǳ�ʼλ�û��ʼ״̬�� 
����ʱ������ͨ����ǰλ�û�״̬���ٽ��ж�����
jQuery �ṩ���Զ��嶯�����ۼӡ��ۼ����ܡ�
$('.animate').click(function () {
	$('#box').animate({
		'left' : '+=100px',
	});
});
�Զ���ʵ���жӶ����ķ�ʽ�������֣�
1.�ڻص���������ִ��һ��������
2.ͨ����׺��˳����ʵ���жӶ�����
//ͨ������˳��ʵ���жӶ���
$('.animate').click(function () {
	$('#box').animate({'left' : '100px'});
	$('#box').animate({'top' : '100px'});
	$('#box').animate({'width' : '300px'});
});
ע�⣺�������ͬһ��Ԫ�أ��ͻ�ʵ��ͬ������
//ͨ����׺ʵ���жӶ���
$('.animate').click(function () {
	$('#box').animate({
		'left' : '100px'
	}).animate({
		'top' : '100px'
	}).animate({
		'width' : '300px'
	});
});
//ͨ���ص�����ʵ���жӶ���
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

�жӶ�������
//��׺�޷�ʵ�ְ�˳���ж�
$('#box').slideUp('slow').slideDown('slow').css('background', 'orange');
//ʹ�ûص�������ǿ�н�.css()�����Ŷӵ�.slideDown()֮��
$('#box').slideUp('slow').slideDown('slow', function () {
	$(this).css('background', 'orange');
});

������������жӶ��������ʱ�򣬿ɶ��Բ����½�����ԭ���Ķ�����������������
���ԣ����ǵ��뷨��ÿ�����������Լ������ķ�����
jQuery �ṩ��һ�������ڻص������ķ�����.queue()��
//ʹ��.queue()����ģ�⶯���������涯������֮��
$('#box').slideUp('slow').slideDown('slow').queue(function () {
	$(this).css('background', 'orange');
});
���ڣ������������.queue()��������������һ�����ض�������ʱ���־�Ȼ�޷�ʵ�֡�
����.queue()���Ե��µġ������ַ������Խ��������⣬jQuery ��.queue()�Ļص���������
����һ����������������� next �������ڽ�β��������� next()������������׺ִ���жӶ�
����
//ʹ�� next ������ʵ�ּ��������жӶ���
$('#box').slideUp('slow').slideDown('slow').queue(function (next) {
	$(this).css('background', 'orange');
	next();
}).hide('slow');
��Ϊnext������jQuery1.4�汾�Ժ�ų��ֵģ� ��֮ǰ�����ձ�ʹ�õ���.dequeue()������
��˼Ϊִ����һ��Ԫ���ж��еĺ�����
//ʹ��.dequeue()����ִ����һ����������
$('#box').slideUp('slow').slideDown('slow').queue(function () {
	$(this).css('background', 'orange');
	$(this).dequeue();
}).hide('slow');
�������˳����ã���ôʹ���жӶ����������ͷǳ������ˣ�ÿһ�δ���һ���жӣ� 
���ص�������Ƕ�׾ͻ��������¡�
//ʹ��˳����õ��жӣ����ִ�У��ǳ�����
$('#box').slideUp('slow');
$('#box').slideDown('slow');
$('#box').queue(function () {
	$(this).css('background', 'orange');
	$(this).dequeue();
})
$('#box').hide('slow');

jQuery ���ṩ��һ�������жӵĹ��ܷ�����.clearQueue()����������һ���жӵĻص���
����.queue()������Ϳ��԰�ʣ��Ϊִ�е��жӸ��Ƴ���
//�������ж�
$('#box').slideDown('slow', function () {$(this).clearQueue()});

������ط���
ֹͣ���������еĶ���: .stop(clearQueue, gotoEnd);
//ǿ��ֹͣ�����е�
$('.stop').click(function () {
	$('#box').stop();
});
//��������ǿ������
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

��һ��������ʾ�Ƿ�ȡ���жӶ�����Ĭ��Ϊ false��
�ڶ�������ʾ�Ƿ񵽴ﵱǰ������β��Ĭ��Ϊ false��

���ö����ӳ٣�.delay()
//��ʼ�ӳ� 1 ���ӣ��м��ӳ� 1 ��
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

����ȫ������
jQuery �ṩ������ȫ�����õ�����,�ֱ�Ϊ:
$.fx.interval����ÿ�����е�֡��
$.fx.off���ر�ҳ�������еĶ���

$.fx.interval ���Կ��Ե�������ÿ�������֡����Ĭ��Ϊ 13 ����
/��������֡��Ϊ1000���� Ĭ��Ϊ 13
$.fx.interval = 1000;
$('.button').click(function () {
	$('#box').toggle(3000);
});
//���ö���Ϊ�ر�true
$.fx.off = true;//Ĭ��Ϊ false

���䣺��.animate()�����У�����һ��������easing �˶���ʽ�����������
�Դ��Ĳ�����������swing(����)��linear(����)��Ĭ��Ϊ swing��
$('.button').click(function () {
	$('#box').animate({
		left : '800px'
	}, 'slow', 'swing');
	$('#pox').animate({
		left : '800px'
	}, 'slow', 'linear');
});

jQuery�����validate.js
http://jqueryvalidation.org/
ѧϰҪ�㣺
1.ʹ�� validate.js ���
2.Ĭ����֤����
3.validate()������ѡ��
4.validate.js ��������

��֤�����validate.js������һ����֤��������ݺϷ��ԵĲ����
ʹ����������Ľ�����ڱ��Ϸ��ӵ���֤���̣�
���Ҵ�����ʾ��ʾ������Ҳ�������û����顣

ʹ��validate.js���
��һ�������� validate.js
<script type="text/javascript" src="js/jquery.validate.js"></script>
�ڶ������� JS �ļ���ִ��
$('form').validate();

Ĭ����֤����
Validate.js ��Ĭ����֤�����д����������ʽ��
1.�ؼ����Է�ʽ
2.JS ��ֵ�Դ��η�ʽ

required:true //���������ֶ�
email:true //����������ȷ��ʽ�ĵ����ʼ�
url:true //����������ȷ��ʽ����ַ
date:true //����������ȷ��ʽ�����ڣ�IE6 ��֤����
dateISO:true //����������ȷ��ʽ������(ISO) ��ֻ��֤��ʽ�� ����֤��Ч��
number:true //��������Ϸ�������(������С��)
digits:true //��������������
creditcard:true //��������Ϸ������ÿ��ţ����磺5105105105105100
equalTo:"#field" //����ֵ�����#field ��ͬ
minlength:5 //���볤����С�� 5 ���ַ���(������һ���ַ�)
maxlength:10 //���볤������� 10 ���ַ���(������һ���ַ�)
rangelength:[5,10] //���볤�Ƚ��� 5 �� 10 ֮����ַ���")(������һ���ַ�)
range:[5,10] //����ֵ������� 5 �� 10 ֮��
min:5 //����ֵ����С�� 5
max:10 //����ֵ���ܴ��� 10

//ʹ�ÿؼ���ʽ��֤������Ͳ���С����λ��
<input type="text" class="required" minlength="2" name="user" id="user" />
ע�⣺Ĭ�Ϲ��������ò���ֵ�ģ�ֱ��д�� class �Ｔ��ʵ�֡���������ֻ��������䣬
ֱ��ʹ������=ֵ�ķ�ʽ���ɡ�
�����ڴ�����ʾ����Ϊ�������������ĺ����ļ�����ֱ���滻�����ɡ�

//ʹ�� JS �����ֵ�Դ��η�ʽ����
$('#reg').validate({
	rules : {
		user : { //ֻ��һ������Ļ���
			required : true,//ֱ�� user : 'required',
			minlength : 2,
		},
	},
	messages : {
		user : {
			required : '�ʺŲ���Ϊ�գ�',
			minlength : '�ʺŲ���С�� 2 λ��',
		},
	}
});
ע�⣺���ڵ�һ����ʽ��������ָ���Ĵ�����ʾ��Ϣ��
�����Ƽ�ʹ�õڶ�����ʽ���ڶ�����ʽҲ�����HTML��Ⱦ��

//���й�����ʾ
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

validate()�ķ�����ѡ��
����Ĭ�ϵ���֤�����⣬validate.js���ṩ�˴������������Ժͷ���
���磬�������ԣ�������ʾλ��һϵ�бȽ����õ�ѡ��

//jQuery.format ��ʽ��������ʾ
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
			required : '�ʺŲ���Ϊ�գ�',
			minlength : '�ʺŲ���С��{0}λ��',
			rangelength : '�ʺ�������{0}-{1}λ��'
		},
	},
});

//��������ģʽ��ֹ�ύ
$('#reg').validate({
	debug : true,
});
//���õ���ģʽΪĬ�ϣ����Խ�ֹ������ύ
$.validator.setDefaults({
	debug : true,
});
//ʹ��������ʽ����Ĭ���ύ
submitHandler : function (form) {
	//����ִ�� ajax �ύ���������� debug:true ��ֹ�ύ��
},
//����ĳ���ֶ���֤
ignore : '#pass',
//��ʾȺ��Ĵ�����ʾ
focusInvalid : false,
errorPlacement : function (error, element) {
	$.each(error, function (index, value) {
		$('.myerror').html($('.myerror').html() + $(value).html());
	})
},
//Ⱥ�������ʾ
groups : {
	myerror : 'user pass',
},
//��ʾȺ��Ĵ�����ʾ
focusInvalid : false,
errorPlacement : function (error, element) {
	$.each(error, function (index, value) {
		$('.myerror').html($('.myerror').html() + $(value).html());
	})
},
//Ⱥ�������ʾ���ֿ�
groups : {
	error_user : 'user',
	error_pass : 'pass'
},
//��Ⱥ��Ĵ���ָ�����λ��
errorPlacement : function (error, element) {
	error.appendTo('.myerror');
},
//���ô�����ʾ�� class ��
errorClass : 'error_list'
//���ô�����ʾ�ı�ǩ
errorElement : 'p'
//ͳһ����������ʾ
errorLabelContainer : 'ol.error'
wrapper : 'li'
//���óɹ�����ص� class
success : 'success',
//ʹ�÷������� class ������ı�
success : function (label) {
	label.addClass('success').text('ok');
},
//������ʾ�д����Ԫ�أ���ɫʽ
highlight: function(element, errorClass) {
	$(element).css('border', '1px solid red');
},
//�ɹ���Ԫ���Ƴ��������
unhighlight : function (element, errorClass) {
	$(element).css('border', '1px solid #ccc');
},
//���ύʱ��ȡ��Ϣ
invalidHandler : function (event, validator) {
	var errors = validator.numberOfInvalids();
	if (errors) {
		$('.myerror').html('����' + errors + '����Ԫ����д�Ƿ���');
	}
},
//��ȡ������ʾ����������ύ��ʱ��ȡֵ
showErrors : function (errorMap, errorList) {
	var errors = this.numberOfInvalids();
	if (errors) {
		$('.myerror').html('����' + errors + '����Ԫ����д�Ƿ���');
	} else {
		$('.myerror').hide();
	}
	this.defaultShowErrors(); //ִ��Ĭ�ϴ���
},
//��ȡ������ʾ�����errorList
showErrors : function (errorMap, errorList) {
	alert(errorList[0].message); //�õ�������Ϣ
	alert(errorList[0].element); //��ǰ����ı�Ԫ��
},

validate.js �ṩ��һЩ�¼�������Ĭ��ֵ����Щֵ�أ��󲿷ֽ����ǲ��ø��ĵġ� 
//ȡ���ύ��֤ 
onsubmit: false, //Ĭ���� true 

//��������뿪��������֤ 
onfocusout: false, //Ĭ��Ϊ true

//���ü��̰��µ��𲻴�����֤ 
onkeyup:false, //Ĭ��Ϊ true 
ע�⣺ֻҪ�����ˣ��ڲ��Ե������������ false ���� true ���������ˡ�

//���õ�� checkbox �� radio �����������֤ 
onclick:false, //Ĭ��Ϊ true

//�жϱ�����֤��Ԫ���Ƿ�ȫ����Ч 
alert($('#reg').valid()); //ȫ����Ч���� true

Validate.js �ṩ�˿��Ե�����֤ÿ����Ԫ�ص� rules ������
�����ṩ�� add ������֤�� ���ṩ�� remove ɾ����֤�Ĺ��ܡ�
//�� user ����һ������֤ 
$('#user').rules('add',{ 
	required:true, minlength:2, 
	messages:{ 
		required:'�ʺŲ���Ϊ�գ�', 
		minlength:jQuery.format('�ʺŲ���С��{0}λ��'), 
	} 
});
//ɾ�� user ��������֤���� 
$('#user').rules('remove');
//ɾ�� user ��ָ����֤���� 
$('#user').rules('remove', 'minlength min max');
//����Զ�����֤ 
$.validator.addMethod('code',function(value,element){ 
	var tel =/^[0-9]{6}$/; 
	return this.optional(element) || (tel.test(value)); 
},'����ȷ��д������������');
//�����Զ�����֤ 
rules:{ 
	code:{ 
		required:true, 
		code:true, 
	} 
},
