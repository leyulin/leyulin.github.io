(function () {
    var imgshow = document.getElementById("img_show"),
        imgcontent = document.getElementById("img_content"),
        imglist = document.querySelectorAll(".article .content img");
    function show(src) {
        imgcontent.setAttribute("src", src);
        imgshow.style.display = "flex";
        setTimeout(function () {
            imgshow.style.opacity = 1;
        }, 5);
    }
    function hide() {
        imgshow.style.opacity = 0;
        setTimeout(function () {
            imgshow.removeAttribute("style");
            document.body.removeAttribute("style");
        }, 250);
    }
    for (var img of imglist)
        img.addEventListener("click", function () {
            show(this.getAttribute("src"));
        });
    imgshow.addEventListener("click", function () {
        hide();
    });
    window.addEventListener("resize", function () {
        hide();
    });
})();

        !function () {
          var devices = ["iPhone","Android","Windows Phone"]
          var ua = window.navigator.userAgent
          var isMobile = false;
          for (var i = 0; i < devices.length; i++) {
              if (ua.indexOf(devices[i]) != -1) {
                isMobile = true;
              }
          }
          if(isMobile)
          {
            document.getElementById("selector").style.visibility="hidden";	
            document.getElementById("selectorForMobieDevice").style.visibility="visible";
          }
          else
          {
            document.getElementById("selectorForMobieDevice").style.visibility="hidden";
          }
        }()
