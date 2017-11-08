//加载广告轮播
(()=>{
  ajax("get","data/banners.php","")
    .then(data=>{
        console.log(data);
    const LIWIDTH=960;
    var htmlImgs="";//保存图片li的HTML片段
    //for(var i=0;i<data.length;i++){
      //var p=data[i];
    data.push(data[0]);
    for(var p of data){
      htmlImgs+=`<li>
              <a href="${p.href}" title="${p.title}">
                <img src="${p.img}">
              </a>
            </li> `;
    }
    var bannerImg=
      document.getElementById("banner-img");
    bannerImg.style.width=
      LIWIDTH*data.length+"px";
    bannerImg.innerHTML=htmlImgs;
    document.getElementById("indicators")
            .innerHTML=
              "<li></li>".repeat(data.length-1);
    $("#indicators>li:first").addClass("hover");

    var i=0,wait=3000,timer=null;
        $banner=$(bannerImg);
    function move(){
      timer=setTimeout(()=>{
        if(i<data.length-1){
          i++;
          $banner.css("left",-LIWIDTH*i);
          if(i<data.length-1)
            $("#indicators>li:eq("+i+")")
              .addClass("hover")
              .siblings().removeClass("hover");
          else
            $("#indicators>li:eq("+0+")")
            .addClass("hover")
            .siblings().removeClass("hover");
          move();
        }else{
          $(bannerImg).css("transition","")
          $banner.css("left",0);
          setTimeout(()=>{
            $(bannerImg)
              .css(
              "transition","all .3s linear");
            i=1;
            $banner.css("left",-LIWIDTH*i);
            $("#indicators>li:eq("+i+")")
            .addClass("hover")
            .siblings().removeClass("hover");
          },100);
          $("#indicators>li:eq("+i+")")
            .addClass("hover")
            .siblings().removeClass("hover");
          move();
        }
        
      },3000);
    }
    move();
    $("#banner").hover(
      ()=>clearTimeout(timer),
      ()=>move()
    );
    $("#indicators")
      .on("mouseover","li",function(){
      var $this=$(this);
      if(!$this.hasClass("hover")){
        i=$this.index();
        $banner.css("left",-LIWIDTH*i);
        $("#indicators>li:eq("+i+")")
              .addClass("hover")
              .siblings().removeClass("hover");
      }
    })
  })

  // 滚动条滚动
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      var l = 1460;
      var w = $(".goTop").width();
      $(".goTop").css("left", l - w).css("bottom", "295px");
      $(".goTop").fadeIn(600);
    } else {
      $(".askTable").fadeOut(600);
      $(".goTop").fadeOut(600);
    }
  });

})();