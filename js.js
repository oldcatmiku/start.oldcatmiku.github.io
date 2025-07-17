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
var all = 36
tips = new Array(all);
//条目内容 Ps:若您想要添加诗句，请发给chenzicongok@foxmail.com 注意查重<3
tips[0] = '空山新雨后，天气晚来秋。<br>明月松间照，清泉石上流。 〔唐〕王维&nbsp;'
tips[1] = '空山不见人，但闻人语响。<br>返景入深林，复照青苔上。 〔唐〕王维&nbsp;'
tips[2] = '红豆生南国，春来发几枝。<br>愿君多采撷，此物最相思。 〔唐〕王维&nbsp;'
tips[3] = '多情自古伤离别，更那堪冷落清秋节。<br>今宵酒醒何处？杨柳岸，晓风残月。 〔宋〕柳永&nbsp;'
tips[4] = '毕竟西湖六月中，风光不与四时同。<br>接天莲叶无穷碧，映日荷花别样红。 〔宋〕杨万里&nbsp;'
tips[5] = '草长莺飞二月天，拂堤杨柳醉春烟。<br>儿童散学归来早，忙趁东风放纸鸢。 〔清〕高鼎&nbsp;'
tips[6] = '绿树村边合，青山郭外斜。<br>开轩面场圃，把酒话桑麻。 〔唐〕孟浩然&nbsp;'
tips[7] = '缺月挂疏桐，漏断人初静。<br>谁见幽人独往来，缥缈孤鸿影。 〔宋〕苏轼&nbsp;'
tips[8] = '驿外断桥边，寂寞开无主。<br>已是黄昏独自愁，更著风和雨。 〔宋〕陆游&nbsp;'
tips[9] = '山光悦鸟性，潭影空人心。<br>万籁此俱寂，但余钟磬音。 〔唐〕常建&nbsp;'
tips[10] = '种豆南山下，草盛豆苗稀。<br>晨兴理荒秽，带月荷锄归。 〔东晋〕陶渊明&nbsp;'
tips[11] = '道狭草木长，夕露沾我衣。<br>衣沾不足惜，但使愿无违。 〔东晋〕陶渊明&nbsp;'
tips[12] = '采菊东篱下，悠然见南山。<br>山气日夕佳，飞鸟相与还。 〔东晋〕陶渊明&nbsp;'
tips[13] = '梅子金黄杏子肥，麦花雪白菜花稀。<br>日长篱落无人过，惟有蜻蜓蛱蝶飞。 〔宋〕范成大&nbsp;'
tips[14] = '蝴蝶双双入菜花，日长无客到田家。<br>鸡飞过篱犬吠窦，知有行商来买茶。 〔宋〕范成大&nbsp;'
tips[15] = '篱落疏疏一径深，树头新绿未成阴。<br>儿童急走追黄蝶，飞入菜花无处寻。 〔宋〕杨万里&nbsp;'
tips[16] = '树绕村庄，水满陂塘。倚东风，豪兴徜徉。<br>小园几许，收尽春光。有桃花红，李花白，菜花黄。 〔宋〕秦观&nbsp;'
tips[17] = '碧玉妆成一树高，万条垂下绿丝绦。<br>不知细叶谁裁出，二月春风似剪刀。 〔唐〕贺知章&nbsp;'
tips[18] = '自古逢秋悲寂寥，我言秋日胜春朝。<br>晴空一鹤排云上，便引诗情到碧霄。 〔唐〕刘禹锡&nbsp;'
tips[19] = '孤山寺北贾亭西，水面初平云脚低。<br>几处早莺争暖树，谁家新燕啄春泥。 〔唐〕白居易&nbsp;'
tips[20] = '日暮苍山远，天寒白屋贫。<br>柴门闻犬吠，风雪夜归人。 〔唐〕刘长卿&nbsp;'
tips[21] = '绿树阴浓夏日长，楼台倒影入池塘。<br>水晶帘动微风起，满架蔷薇一院香。 〔唐〕高骈&nbsp;'
tips[22] = '去年元夜时，花市灯如昼。<br>月上柳梢头，人约黄昏后。 〔宋〕欧阳修&nbsp;'
tips[23] = '燎沉香，消溽暑。鸟雀呼晴，侵晓窥檐语。<br>叶上初阳干宿雨，水面清圆，一一风荷举。 〔宋〕周邦彦&nbsp;'
tips[24] = '满载一船秋色，平铺十里湖光。<br>波神留我看斜阳，放起鳞鳞细浪。 〔宋〕张孝祥&nbsp;'
tips[25] = '暗淡轻黄体性柔，情疏迹远只香留。<br>何须浅碧深红色，自是花中第一流。 〔宋〕李清照&nbsp;'
tips[26] = '少年听雨歌楼上，红烛昏罗帐。<br>壮年听雨客舟中，江阔云低、断雁叫西风。<br>而今听雨僧庐下，鬓已星星也。 〔宋〕蒋捷&nbsp;'
tips[27] = '晚年惟好静，万事不关心。<br>自顾无长策，空知返旧林。<br>松风吹解带，山月照弹琴。<br>君问穷通理，渔歌入浦深。 〔唐〕王维&nbsp;'
tips[28] = '满载一船明月，平铺千里秋江。<br>明日风回更好，今宵露宿何妨？ 〔宋〕张孝祥&nbsp;'
tips[29] = '留人不住，醉解兰舟去。<br>一棹碧涛春水路，过尽晓莺啼处。<br>渡头杨柳青青，枝枝叶叶离情。 〔宋〕晏几道&nbsp;'
tips[30] = '菡萏香销翠叶残，西风愁起绿波间。<br>还与韶光共憔悴，不堪看。<br>细雨梦回鸡塞远，小楼吹彻玉笙寒。 〔五代〕李璟&nbsp;'
tips[31] = '红叶黄花秋意晚，千里念行客。<br>飞云过尽，归鸿无信，何处寄书得？<br>泪弹不尽临窗滴，就砚旋研墨。 〔宋〕晏几道&nbsp;'
tips[32] = '薄雾浓云愁永昼，瑞脑销金兽。<br>佳节又重阳，玉枕纱厨，半夜凉初透。 〔宋〕李清照&nbsp;'
tips[33] = '念柳外青骢别后，水边红袂分时，怆然暗惊。<br>无端天与娉婷，夜月一帘幽梦，春风十里柔情。 〔宋〕秦观&nbsp;'
tips[34] = '梦绕神州路，怅秋风、连营画角，故宫离黍。<br>底事昆仑倾砥柱，九地黄流乱注？ 〔宋〕张元干&nbsp;'
tips[35] = '柳阴直，烟里丝丝弄碧。<br>隋堤上、曾见几番，拂水飘绵送行色。 〔宋〕周邦彦&nbsp;'
//tips[99]='Example 〔唐〕Name'

var radm
radm = Math.floor(Math.random() * 2);
// radm = 2

if (radm == 1){
fetch('https://v1.hitokoto.cn?c=i')
.then(response => response.json())
.then(
    data => {
    const hitokoto = document.getElementById('title')
    hitokoto.href = 'https://hitokoto.cn/?c=i&uuid=' + data.uuid
    if (data.length < 22){
        if(data.from_who == null)
            {data.from_who = "<br>"}
        hitokoto.innerHTML = "<div class='poem'>"+data.hitokoto+ "</div>"
        var button_text = "<div class='zhuozhe'>" + data.from_who+"</div>"
        document.getElementById("author").innerHTML = button_text;


        
    }
    else{
        index = Math.floor(Math.random() * tips.length);
        var getsj = tips[index];
        var search = " ";
        var pos = getsj.lastIndexOf(search);
        var output = "<div class='poem'>" + getsj.substring(0,pos) + "</div>"
        var button_text = "<div class='zhuozhe'>" + getsj.substring(pos)+"</div>"
        document.getElementById("title").innerHTML= output;
        document.getElementById("author").innerHTML= button_text;
        }
        })
    .catch(console.error)
    
}
else{

index = Math.floor(Math.random() * tips.length);
var getsj = tips[index];
var search = " ";
var pos = getsj.lastIndexOf(search);
var output = "<div class='poem'>" + getsj.substring(0,pos) + "</div>"
var button_text = "<div class='zhuozhe'>" + getsj.substring(pos)+"</div>"
document.getElementById("title").innerHTML= output;
document.getElementById("author").innerHTML= button_text;
}

}
console.info(
`/* 这其实是老猫的起始页*/
这是老猫自建自用的起始页，每次打开都会出现一句诗或一言。
这个项目从 2021 年开始开发。

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