//js控制css的对象定义
	var slider01 = document.getElementById("slider01");
	var slider02 = document.getElementById("slider02");
	var backgroundShadow = document.getElementById("backgroundShadow");
	var windowsBackgroundAlpha = document.getElementById("windowsBackgroundAlpha");
	var body = document.body;
	var themeColor = 0;

//设置cookie的自动删除时间
	let data = new Date().getTime();   //先将此时的时间转化为毫秒
	let new_data = new Date(data + 365 * 24 * 60 * 60 * 1000);  //将过期时间设置为365天后

//初始化相关cookie

//01暗角大小相关
let re = new RegExp("\s?" + "backgroundShadow" + "=([^;]+)(;|$)");	//正则表达式获取cookie的值
try {
	resbackgroundShadow = parseInt(document.cookie.match(re)[1]);		//判断是否为空
}
catch (err) {
	var resbackgroundShadow = -60;		//如果空就赋值-60
}
finally {
	backgroundShadow.style.boxShadow = 'inset 0px 0px 127px ' + resbackgroundShadow + 'px rgb(0,0,0)';		//改变css
	slider01.removeAttribute('value');
	slider01.setAttribute('value', resbackgroundShadow);	//改变滑块位置
	//console.info('resbackgroundShadow = '+resbackgroundShadow);
	document.getElementById("vvalue").innerText = resbackgroundShadow;	//把cookie的值赋给数字显示
}

//02背景白色透明度
let rre = new RegExp("\s?" + "windowsBackgroundAlpha" + "=([^;]+)(;|$)");	//正则表达式获取cookie的值
try {
	reswindowsBackgroundAlpha = parseInt(document.cookie.match(rre)[1]);		//判断是否为空
}
catch (err) {
	var reswindowsBackgroundAlpha = 15;		//如果空就赋值15
}
finally {
	if (themeColor == 0) {
		windowsBackgroundAlpha.style.background = 'rgb(255 255 255 / ' + reswindowsBackgroundAlpha + '%)';		//改变css
	}
	else {
		windowsBackgroundAlpha.style.background = 'rgb(0 0 0 / ' + reswindowsBackgroundAlpha + '%)';		//改变css
	}
	slider02.removeAttribute('value');			//改变滑块位置
	slider02.setAttribute('value', reswindowsBackgroundAlpha);	//改变滑块位置
	document.getElementById("windowsBackgroundAlpha_value").innerText = reswindowsBackgroundAlpha;	//把cookie的值赋给数字显示
}

//03设置有关亮色和暗色主题开关
var checkbox = document.getElementById('checkbox');
var body = document.body;
let rrre = new RegExp("\s?" + "themeColor" + "=([^;]+)(;|$)");	//正则表达式获取cookie的值
try {
	resthemecolor = parseInt(document.cookie.match(rrre)[1]);		//判断是否为空
}
catch (err) {
	var themeColor = 0;		//如果空就赋值0
	var resthemecolor = 0	//如果空就赋值0
}
finally {
	if (resthemecolor == 0) {
		windowsBackgroundAlpha.style.background = 'rgb(255 255 255 / ' + reswindowsBackgroundAlpha + '%)';		//改变css
		checkbox.checked = true;	//改变复选框
	}
	else {
		windowsBackgroundAlpha.style.background = 'rgb(0 0 0 / ' + reswindowsBackgroundAlpha + '%)';		//改变css
		checkbox.checked = false;	//改变复选框
	}
	checkbox.addEventListener('change', function () {
		if (this.checked) {
			themeColor = 0;		//亮色
			windowsBackgroundAlpha.style.background = 'rgb(255 255 255 / ' + slider02.value + '%)';		//改变css
			document.cookie = 'themeColor=' + 0 + ';' + 'expires=' + new_data.toUTCString();	//写入cookie
		} else {
			themeColor = 1;		//暗色
			windowsBackgroundAlpha.style.background = 'rgb(0 0 0 / ' + slider02.value + '%)';		//改变css
			document.cookie = 'themeColor=' + 1 + ';' + 'expires=' + new_data.toUTCString();	//写入cookie
		}
	});
}

//监听并实时修改css和滑块位置
slider01.addEventListener("input", function () {
	backgroundShadow.style.boxShadow = 'inset 0px 0px 127px ' + this.value + 'px rgb(0,0,0)';		//改变css
	document.cookie = 'backgroundShadow=' + this.value + ';' + 'expires=' + new_data.toUTCString();	//写入cookie
	document.getElementById("vvalue").innerText = this.value;	//改变数字显示
});

slider02.addEventListener("input", function () {
	if (themeColor == 0) {
		windowsBackgroundAlpha.style.background = 'rgb(255 255 255 / ' + this.value + '%)';		//改变css
	}
	else {
		windowsBackgroundAlpha.style.background = 'rgb(0 0 0 / ' + this.value + '%)';		//改变css
	}
	document.cookie = 'windowsBackgroundAlpha=' + this.value + ';' + 'expires=' + new_data.toUTCString();	//写入cookie
	document.getElementById("windowsBackgroundAlpha_value").innerText = this.value;	//改变数字显示

});

body.addEventListener("click", function () {
	body.classList.toggle("darkened");
});

//弹窗显示
function showPopup() {
	var overlay = document.getElementById('overlay');
	overlay.style.display = 'block'; /* 显示遮罩层 */
	setTimeout(function () {
		overlay.style.opacity = 1; /* 延迟10毫秒后添加淡入效果 */
	}, 10);
}

function hidePopup() {
	var overlay = document.getElementById('overlay');
	overlay.style.opacity = 0; /* 设置透明度为0 */
	setTimeout(function () {
		overlay.style.display = 'none'; /* 延迟300毫秒后隐藏遮罩层 */
	}, 300);
}

//动画
function animateBox() {
	var box = document.querySelector('.nomain');
	box.classList.add('animate');
	setTimeout(function () {
		box.classList.remove('animate');
		showPopup()
	}, 500);
}
//恢复默认设置
function resst(){
	//变量的复原
		resbackgroundShadow = -60;		
		themeColor = 0;		
		resthemecolor = 0;
		reswindowsBackgroundAlpha = 15;
	//滑块的复原
		slider01.value= -60;	
		document.getElementById("vvalue").innerText = -60;	
		slider02.value=15;	
		document.getElementById("windowsBackgroundAlpha_value").innerText = 15;
	//样式复原
		backgroundShadow.style.boxShadow = 'inset 0px 0px 127px -60px rgb(0,0,0)';		//改变css
		checkbox.checked = true;
		windowsBackgroundAlpha.style.background = 'rgb(255 255 255 / 15%)';		//改变css
	//保存至cookie
		document.cookie = 'themeColor=' + '0' + ';' + 'expires=' + new_data.toUTCString();	//写入cookie
		document.cookie = 'backgroundShadow=' + '-60' + ';' + 'expires=' + new_data.toUTCString();	//写入cookie
		document.cookie = 'windowsBackgroundAlpha=' + '15' + ';' + 'expires=' + new_data.toUTCString();	//写入cookie
}

function otherThs(){
	document.getElementById("otherThsOut").innerHTML=`<br>/* 这里是老猫的起始页 */<br><p style="text-align:left;word-break:break-all">这是老猫自建自用的起始页，每次打开都会出现一句诗或一言。这个项目从 2021 年开始开发，收集了一些优美诗句。如果您觉得要把什么设置加到起始页里，或是找到了一句很有意境的诗句，<del>也欢迎杂谈</del>，就发邮件给 oldcatmiku@qq.com，谢谢！<a style="color:blue" onclick="moreOther()">更多话</a></p><a style="color:blue" onclick="info()">日志消息</a>`;
}
function moreOther(){
	document.getElementById("moreThsOut").innerHTML=`<br><p style="text-align:left;word-break:break-all">把访问地址修改成start.oldcatmiku.top，现在可以更加及时地更新项目，背景图片放进了图床。<del>不要问！！手机没有适配！！！</del>挖坑：自定义背景图和黑暗模式。<br>老猫的另一个网站：<a style="color:blue;text-decoration:none;" href="https://txc233.cn" target="_blank" >TXC团队主页</a><br>有个奇怪的东西：<a style="color:red" onclick="doNotTouch()">别点我</a></p>`
}
function doNotTouch(){
	body.style.transform="rotateY(180deg)";
	hidePopup();
}

//日志消息
function info() {
	alert(`第一天：研究了一中午的滑块，晚上实现了一个滑块。
第二天：晚上把昨天的第二个滑块研究出来了。
第三天：凌晨搞好了复选框。搞了一中午加入了弹窗并加入了废话。

（第一天：2023/7/29）
`);
}