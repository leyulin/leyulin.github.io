function tougao() {
  let a = "14234036@qq.com [你的b站昵称]+[合唱]/[独唱]+[曲目名称]";
  var b = new ClipboardJS(a);
  b.on("success", function (e) {
    swal({
      button: "确定",
      title: "投稿格式" + a.innerText + " 复制成功！",
      icon: "success",
      text: "下个夺冠的就是你！"
    });
  });
  b.on("error", function (e) {
    swal("复制失败 请联系缸子的奶爸");
  });
}