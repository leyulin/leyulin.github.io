var nowTime ;
function play(){
        var time = new Date();
        nowTime = "北京时间:"+time.getFullYear()+"年"+time.getMonth()+"月"+time.getDate()+"日"+time.getHours()+"时"+time.getMinutes()+"分"+time.getSeconds()+"秒";
        document.getElementById("time").innerHTML = nowTime;
}
setInterval(play,1000);//每一秒执行一次
