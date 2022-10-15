function copy(val) {
        var clipboard = new ClipboardJS(val);
        clipboard.on('success', function(e) {
                swal({ button: "确定",title: "歌名:"+ val.innerText +" 复制成功！" ,icon:"success",text:"记得给菜菜打米嗷！"});
        });
        clipboard.on('error', function(e) {
                swal("复制失败 请联系缸子的奶爸");
        });
}