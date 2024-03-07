// 漢堡
$(document).ready(function ()
{
  $('.all-clos').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('act');
  });
});


//向下滾動 Ｘ Ｙ 軸會有進入進出效果
$(document).ready(function(){    

  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    // console.log(scrollPos, windowHeight);
    
    // bg scroll 
    $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px');

    // animated－左邊進
    $('.all-animated-s').each(function(){
    var thisPos = $(this).offset().top;

    if((windowHeight + scrollPos) >= thisPos) {
      $(this).addClass('fadeln-s');
    }
     else if((windowHeight - scrollPos / 2) <= thisPos) {
        $(this).removeClass('fadeln-s');
      }
    });
    // animated－右邊進
    $('.all-animated-e').each(function(){
      var thisPos = $(this).offset().top;
  
      if((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeln-e');
      }
       else if((windowHeight - scrollPos / 2) <= thisPos) {
          $(this).removeClass('fadeln-e');
        }
      });
    // animated－上邊進
    $('.all-animated-t').each(function(){
      var thisPos = $(this).offset().top;
  
      if((windowHeight + scrollPos * 2.5) >= thisPos) {
        $(this).addClass('fadeln-t');
      }
       else if((windowHeight - scrollPos / 2) <= thisPos) {
          $(this).removeClass('fadeln-t');
        }
      });
    // animated－下邊進
    $('.all-animated-b').each(function(){
      var thisPos = $(this).offset().top;
  
      if((windowHeight + scrollPos) >= thisPos) {
        $(this).addClass('fadeln-b');
      }
       else if((windowHeight - scrollPos / 2) <= thisPos) {
          $(this).removeClass('fadeln-b');
        }
      });
    // animated－圖片反轉效果
    $('.all-animated-x').each(function(){
      var thisPos = $(this).offset().top;
  
        if((windowHeight - scrollPos / 2) <= thisPos) {
          $(this).removeClass('fadeln-x');
        }
        if((windowHeight + scrollPos) >= thisPos) {
          $(this).addClass('fadeln-x');
        }
      });
      // 導覽列效果
      $('.n').each(function(){
        var thisPos = $(this).offset().top;
        
        if((scrollPos * 2) <= thisPos) {
         $(this).removeClass('bg-coffee').addClass('bg-dark');
        }
        else if((windowHeight + scrollPos / 2) >= thisPos) {
          $(this).addClass('bg-coffee').removeClass('bg-dark');
        }
          // if((scrollPos * 2 ) <= thisPos) {
          //   $(this).removeClass('bg-coffee').addClass('bg-dark');
          // }
      });
  });

});



// 錨點
// $(document).ready(function ()
// {
//   $('.btn').click(function(e){
//     e.preventDefault();
//     var target = $(this).attr('href');
//     var targetPos = $(target).offset().top - 100;
//     $('html, body').animate({scrollTop: targetPos}, 500);
//   });
// });


//商品列表按鈕切換效果
// $(document).ready(function ()
// {
//   $('.product').click(function (e) { 
//     e.preventDefault();
//     $(this).addClass('active').parent().siblings().find('.product').removeClass('active');
//   });
// });



//核取方塊和選項按鈕 (Checks and radios) 切換 陰影 效果
// $(document).ready(function ()
// {
//   $('.btn-test-outline-info').click(function (e) { 
//     // e.preventDefault();//關閉
//     $(this).toggleClass('active').parent().siblings().find('.btn-test-outline-info').removeClass('active');
//   });
// });


//Swiper------banner
$(document).ready(function () {
  // const progressCircle = document.querySelector(".autoplay-progress svg");
  // const progressContent = document.querySelector(".autoplay-progress span");
  var mySwiper = new Swiper(".mySwiper", {
    // slidesPerView: "auto",
    // allowTouchMove: false,
    // speed: 8000,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
  });
});

//Swiper-------顧客評價
$(document).ready(function () {
  var swiPer = new Swiper('.swiPer', {
    slidesPerView: 3,
    spaceBetween: 60,
    // slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlid: 'true',
    fade:'true',
    grabCursor:'true',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 1,
        // spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 100,
      },
      1440: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
    },
  });
});
