		setInterval(function(){   
        var date = new Date();   
        var year = date.getFullYear();    //获取当前年份   
        var mon = date.getMonth()+1;      //获取当前月份   
        var da = date.getDate();          //获取当前日   
        var day = date.getDay();          //获取当前星期几   
        var h = date.getHours();          //获取小时   
        var m = date.getMinutes();        //获取分钟   
        var s = date.getSeconds();        //获取秒   
        var d = document.getElementById('Date');
		if (m < 10)
		{var mm = "0"+m} 
		else{mm=m}
d.innerHTML= h+':'+mm;},1000)



window.onload=function(){  
var all = 46
tips = new Array(all);
//条目内容 Ps:若您想要添加诗句，请发给chenzicongok@foxmail.com 注意查重<3
tips[0]='「空山新雨后，天气晚来秋。」 〔唐〕王维'
tips[1]='「明月松间照，清泉石上流。」 〔唐〕王维'
tips[2]='「竹喧归浣女，莲动下渔舟。」 〔唐〕王维'
tips[3]='「返景入深林，复照青苔上。」 〔唐〕王维'
tips[4]='「渭城朝雨浥轻尘，客舍青青柳色新。」 〔唐〕王维'
tips[5]='「大漠孤烟直，长河落日圆。」 〔唐〕王维'
tips[6]='「红豆生南国，春来发几枝。」 〔唐〕王维'
tips[7]='「深林人不知，明月来相照。」 〔唐〕王维'
tips[8]='「今宵酒醒何处？杨柳岸，晓风残月。」 〔宋〕柳永'
tips[9]='「接天莲叶无穷碧，映日荷花别样红。」 〔宋〕杨万里'
tips[10]='「小荷才露尖尖角，早有蜻蜓立上头。」 〔宋〕杨万里'
tips[11]='「草长莺飞二月天，拂堤杨柳醉春烟。」 〔清〕高鼎'
tips[12]='「儿童散学归来早，忙趁东风放纸鸢。」 〔清〕高鼎'
tips[13]='「远看山有色，近听水无声。」 〔唐〕王维'
tips[14]='「春去花还在，人来鸟不惊。」 〔唐〕王维'
tips[15]='「绿树村边合，青山郭外斜。」 〔唐〕孟浩然'
tips[16]='「开轩面场圃，把酒话桑麻。」 〔唐〕孟浩然'
tips[17]='「缺月挂疏桐，漏断人初静。」 〔宋〕苏轼'
tips[18]='「驿外断桥边，寂寞开无主。」 〔宋〕陆游'
tips[19]='「清晨入古寺，初日照高林。」 〔唐〕常建'
tips[20]='「曲径通幽处，禅房花木深。」 〔唐〕常建'
tips[21]='「山光悦鸟性，潭影空人心。」 〔唐〕常建'
tips[22]='「万籁此俱寂，但余钟磬音。」 〔唐〕常建'
tips[23]='「种豆南山下，草盛豆苗稀。」 〔东晋〕陶渊明'
tips[24]='「道狭草木长，夕露沾我衣。」 〔东晋〕陶渊明'
tips[25]='「采菊东篱下，悠然见南山。」 〔东晋〕陶渊明'
tips[26]='「山气日夕佳，飞鸟相与还。」 〔东晋〕陶渊明'
tips[27]='「梅子金黄杏子肥，麦花雪白菜花稀。」 〔宋〕范成大'
tips[28]='「日长篱落无人过，惟有蜻蜓蛱蝶飞。」 〔宋〕范成大'
tips[29]='「茅檐低小，溪上青青草。」 〔宋〕辛弃疾'
tips[30]='「大儿锄豆溪东，中儿正织鸡笼。」 〔宋〕辛弃疾'
tips[31]='「鸡飞过篱犬吠窦，知有行商来买茶。」 〔宋〕范成大'
tips[32]='「儿童急走追黄蝶，飞入菜花无处寻。」 〔宋〕杨万里'
tips[33]='「城阙辅三秦，风烟望五津」 〔唐〕王勃'
tips[34]='「树绕村庄，水满陂塘。倚东风，豪兴徜徉。」 〔宋〕秦观'
tips[35]='「小园几许，收尽春光。有桃花红，李花白，菜花黄。」 〔宋〕秦观'
tips[36]='「偶然乘兴，步过东冈。正莺儿啼，燕儿舞，蝶儿忙。」 〔宋〕秦观'
tips[37]='「孤帆远影碧空尽，唯见长江天际流。」 〔唐〕李白'
tips[38]='「碧玉妆成一树高，万条垂下绿丝绦。」 〔唐〕李白'
tips[39]='「何当共剪西窗烛，却话巴山夜雨时。」 〔唐〕李商隐'
tips[40]='「晴空一鹤排云上，便引诗情到碧霄。」 〔唐〕刘禹锡'
tips[41]='「孤山寺北贾亭西，水面初平云脚低。」 〔唐〕白居易'
tips[42]='「柴门闻犬吠，风雪夜归人。」 〔唐〕刘长卿'
tips[43]='「水晶帘动微风起，满架蔷薇一院香。」 〔唐〕高骈'
tips[44]='「月上柳梢头，人约黄昏后。」 〔宋〕欧阳修'
tips[45]='「点一下右下角的框，会出现页面设置^^」 '
//tips[99]='「Example」 〔唐〕Name'

var radm
radm = Math.floor(Math.random() * 2);

if (radm == 1){
	fetch('https://v1.hitokoto.cn')
	.then(response => response.json())
	.then(
		data => {
		const hitokoto = document.getElementById('title')
		hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
		if (data.length < 22){
			if(data.from_who == null)
				{data.from_who = "<br>"}
			hitokoto.innerHTML = "<div class='shiju'>「"+data.hitokoto+ "」</div><div class='zhuozhe'>" + data.from_who+"</div>"

			
		}
		else{
			index = Math.floor(Math.random() * tips.length);
			var getsj = tips[index];
			var search = " ";
			var pos = getsj.lastIndexOf(search);
			var output = "<div class='shiju'>"+getsj.substring(0,pos) + "</div><div class='zhuozhe'>" + getsj.substring(pos)+"</div>"
			document.getElementById("title").innerHTML= output;
			}
			})
		.catch(console.error)
		
}
else{

index = Math.floor(Math.random() * tips.length);
var getsj = tips[index];
var search = " ";
var pos = getsj.lastIndexOf(search);
var output = "<div class='shiju'>"+getsj.substring(0,pos) + "</div><div class='zhuozhe'>" + getsj.substring(pos)+"</div>"
document.getElementById("title").innerHTML= output;
}

}
console.info(
`/* 这其实是老猫的起始页*/
这是老猫自建自用的起始页，每次打开都会出现一句诗或一言。
这个项目从 2021 年开始开发，收集了一些优美诗句。
如果您找到了一句很有意境的诗句，请直接发到 oldcatmiku@qq.com，谢谢！

*一言网址：https://hitokoto.cn/
`);

const d = "https://bing.shangzhenyang.com/api";
function l() {
    window.open(d + "/1080p")
}

window.addEventListener("load", async()=>{
    const o = document.getElementById("copyright");
    if (o)
        try {
            const t = await fetch(d + "/json");
            if (!t.ok)
                throw new Error(t.status.toString());
            const n = await t.json();
            if (n) {
                const i = n.images[0];
                o.textContent = i.copyright
            }
        } catch (t) {
            console.error(t),
            t instanceof Error && (o.textContent = `Error: ${t.message}`)
        }
}
);


// var output = oStr.num(0-6) + oStr.num(6);
// str.indexOf("a"); 
// 

 


// #######  垃圾代码 ↓ ######

// 	fetch('https://v1.hitokoto.cn?&c=i')
//     .then(response => response.json())
//     .then(data => {
//       const hitokoto = document.getElementById('hitokoto_text')
//       hitokoto.href = 'https://cn.bing.com/search?q=' + data.from
//       hitokoto.innerHTML = data.hitokoto 
//     })
//     .catch(console.error)


// 	fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
//     .then(response => response.json())
//     .then(data => {
//       const hitokoto = document.getElementById('hitokoto_text')
//     })
//     .catch(console.error)

// let format = 'js'
// let idx = '0'
// let n = '1'
// let mkt = 'zh-CN'
// let = options ={
// }
//  let imgUrl = '/proxy/' + 'HPImageArchive.aspx?' + `format=${format}&idx=${idx}&n=${n}&mkt=${mkt}`
//  fetch(imgUrl,options).then(
// 	data => { const copyright = document.getElementById('hitokoto_text')
//     })


// function cst() {
// 	var date = new Date();
// 	var h = date.getHours();
// 	if  (h >= 19){						//如果是晚上切换白天
// 	var obj = document.getElementById("ss");
//    obj.setAttribute("href","light.css");
// 	}
// 	else if(h < 5){
// 	var obj = document.getElementById("ss");
//    obj.setAttribute("href","light.css");
// 	}
// 	else if(19 > h >= 5 ){
// 	var obj = document.getElementById("ss");
//    obj.setAttribute("href","dark.css");
// 	}
//  }