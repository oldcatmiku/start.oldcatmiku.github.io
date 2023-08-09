		setInterval(function(){   
        var date = new Date();   
        var year = date.getFullYear();    //获取当前年份   
        var mon = date.getMonth()+1;      //获取当前月份   
        var da = date.getDate();          //获取当前日   
        var day = date.getDay();          //获取当前星期几   
        var h = date.getHours();          //获取小时   
        var m = date.getMinutes();        //获取分钟   
        var s = date.getSeconds();        //获取秒   
		let d = date.now();
        var nnn = document.getElementById('Date');
          d.innerHTML= '<span style="font-size: 40px">'+mon+'月'+da+'日</span><br>'+h+':'+m+'<span style="font-size: 40px">:'+s+nnn+"</span>";},1000)

	fetch('https://v1.hitokoto.cn?&c=i')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://cn.bing.com/search?q=' + data.from
      hitokoto.innerHTML = data.hitokoto + '<br><div style="font-size: 20px;margin-left: 50%;">——' + data.from_who + '《' + data.from + '》</div>'
    })
    .catch(console.error)

/*
function cst() {
	var date = new Date();
	var h = date.getHours();
	if  (h >= 19){						//如果是晚上切换白天
	var obj = document.getElementById("ss");
   obj.setAttribute("href","light.css");
	}
	else if(h < 5){
	var obj = document.getElementById("ss");
   obj.setAttribute("href","light.css");
	}
	else if(19 > h >= 5 ){
	var obj = document.getElementById("ss");
   obj.setAttribute("href","dark.css");
	}
 }

 */