//swipper slider for exercises images
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction:'horizontal',
    loop:true ,
    slidesPerView:4,
    autoplay: {     
      delay: 0,   
    },
    speed:3000, 
    spaceBetween:15 ,
    // centeredSlides: false,
    // grabCursor: true,
    // freeMode: false,
    // mousewheel: false,
    

    
    // Responsive breakpoints
  breakpoints: {
    240: {
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 10 
      },
    540: {
      centeredSlides: true,
      slidesPerView: 2.5,
      spaceBetween: 15
    },  
    840: {
      slidesPerView: 3.25,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }
  });

  swiper.el.addEventListener('mouseover', function(){
    swiper.autoplay.stop();
  })
  swiper.el.addEventListener('mouseleave', function(){
    swiper.autoplay.start();
  })

//fix bug bootstrap
$(document).ready(function () {
  $('.modal').on('shown.bs.modal', function (e) {
    $(this).css("display","flex");
  })
   });

// switch courses by hover item in desktop
  $(document).ready(function(){
    $("#link_course_1").hover(function(){
        $(".courses-title a").removeClass("active");
        $(".courses-detail .row").removeClass("visible");
        $("#link_course_1").addClass("active");
        $("#course_1").addClass("visible");
    });
    $("#link_course_2").hover(function(){
        $(".courses-title a").removeClass("active");
        $(".courses-detail .row").removeClass("visible");
        $("#link_course_2").addClass("active");
        $("#course_2").addClass("visible");
    });
    $("#link_course_3").hover(function(){
        $(".courses-title a").removeClass("active");
        $(".courses-detail .row").removeClass("visible");
        $("#link_course_3").addClass("active");
        $("#course_3").addClass("visible");
    });
    $("#link_course_4").hover(function(){
        $(".courses-title a").removeClass("active");
        $(".courses-detail .row").removeClass("visible");
        $("#link_course_4").addClass("active");
        $("#course_4").addClass("visible");
    });
    $("#link_course_5").hover(function(){
        $(".courses-title a").removeClass("active");
        $(".courses-detail .row").removeClass("visible");
        $("#link_course_5").addClass("active");
        $("#course_5").addClass("visible");
    });
    $("#link_course_6").hover(function(){
        $(".courses-title a").removeClass("active");
        $(".courses-detail .row").removeClass("visible");
        $("#link_course_6").addClass("active");
        $("#course_6").addClass("visible");
    });
 })

 //show more detail card course in mobile
 $(document).ready(function(){
  $("#link_more_detail_1").click(function(){
    $(".link-more-detail").show();
    $('.more-detail').slideUp();  
    $(".link-buy").hide();
    $(this).hide();
    $('#more_detail_1').slideDown();   
    $("#link_buy_1").show();
    });
    
   $("#link_more_detail_2").click(function(){
    $(".link-more-detail").show();
    $('.more-detail').slideUp();  
    $(".link-buy").hide();
    $(this).hide();
    $('#more_detail_2').slideDown();   
    $("#link_buy_2").show();
    });

   $("#link_more_detail_3").click(function(){
    $(".link-more-detail").show();
    $('.more-detail').slideUp();  
    $(".link-buy").hide();
    $(this).hide();
    $('#more_detail_3').slideDown();   
    $("#link_buy_3").show();
    });
     
   $("#link_more_detail_4").click(function(){
    $(".link-more-detail").show();
    $('.more-detail').slideUp();  
    $(".link-buy").hide();
    $(this).hide();
    $('#more_detail_4').slideDown();   
    $("#link_buy_4").show();
    }); 

   $("#link_more_detail_5").click(function(){
    $(".link-more-detail").show();
    $('.more-detail').slideUp();  
    $(".link-buy").hide();
    $(this).hide();
    $('#more_detail_5').slideDown();   
    $("#link_buy_5").show();
    }); 
    
   $("#link_more_detail_6").click(function(){
    $(".link-more-detail").show();
    $('.more-detail').slideUp();  
    $(".link-buy").hide();
    $(this).hide();
    $('#more_detail_6').slideDown();   
    $("#link_buy_6").show();
    });  
  })


//play and pause video when the modal is opened or closed
$(document).ready(function () {
  $('#MainVideoModal').on('shown.bs.modal', function (e) {
    $(this).find('video').get(0).play();
  })
  $('#MainVideoModal').on('hide.bs.modal', function (e) {
    $(this).find('video').get(0).pause();
  })

  $('#VideoOneModal').on('shown.bs.modal', function (e) {
    $(this).find('video').get(0).play();
  })
  $('#VideoOneModal').on('hide.bs.modal', function (e) {
    $(this).find('video').get(0).pause();
  })

  $('#VideoTwoModal').on('shown.bs.modal', function (e) {
    $(this).find('video').get(0).play();
  })
  $('#VideoTwoModal').on('hide.bs.modal', function (e) {
    $(this).find('video').get(0).pause();
  })

  $('#VideoThreeModal').on('shown.bs.modal', function (e) {
    $(this).find('video').get(0).play();
  })
  $('#VideoThreeModal').on('hide.bs.modal', function (e) {
    $(this).find('video').get(0).pause();
  })

  $('#VideoFourModal').on('shown.bs.modal', function (e) {
    $(this).find('video').get(0).play();
  })
  $('#VideoFourModal').on('hide.bs.modal', function (e) {
    $(this).find('video').get(0).pause();
  })

  $('#VideoFiveModal').on('shown.bs.modal', function (e) {
    $(this).find('video').get(0).play();
  })
  $('#VideoFiveModal').on('hide.bs.modal', function (e) {
    $(this).find('video').get(0).pause();
  })

  $('#VideoSixModal').on('shown.bs.modal', function (e) {
    $(this).find('video').get(0).play();
  })
  $('#VideoSixModal').on('hide.bs.modal', function (e) {
    $(this).find('video').get(0).pause();
  })
   });

/*===================================== StickyMobile =====================================*/

const showSticky = function(){
    if ($(this).scrollTop() > 300) {
      $("#StickyMobile").slideDown(); 
    } else {
      $("#StickyMobile").slideUp();
    }
}

jQuery(function ($) {
  $(window).on("scroll", function () {
    showSticky();
  });
});

//show and hide sticky when modal is opened or closed
$(document).ready(function () {
  $('.modal').on('shown.bs.modal', function (e) {
    $("#StickyMobile").slideUp();
  })
  $('.modal').on('hide.bs.modal', function (e) {
    showSticky();
  })
});

// safe resize jquery
$(window).on('resize', function(){
  if ($(window).width() > 992) {
    $('.more-detail').show(); 
    $(".link-buy").show();
    $(".link-more-detail").hide();
  }else{
    $('.more-detail').hide(); 
    $(".link-buy").hide();
    $(".link-more-detail").show();
  }
})