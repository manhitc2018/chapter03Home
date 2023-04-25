
var moreBtn = $(".c-uses__moreBtn");
moreBtn.click(function () { 
    $(this).parent().parent().parent().parent().find(".c-box01").removeClass("is-show");
    $(this).parent().find(".c-box01").addClass("is-show")
});
$(window).scroll(function () {
    const scrollTop = 100;
    console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 100) {
    $(".c-bubbles").css("transform", "translateY(-100%)");
    $(".c-leaf__top").addClass("c-leaf__transformtop");
    $(".c-leaf__bottom").addClass("c-leaf__transformright");
    }
    if ($(window).scrollTop() < 100) {
    $(".c-bubbles").css("transform", "translateY(0)");
    $(".c-leaf__top").removeClass("c-leaf__transformtop");
    $(".c-leaf__bottom").removeClass("c-leaf__transformright");
    }
});
$(".c-box02__collapse").click(function(){
    $(".c-feature__content .c-box02").not($(this).parent()).removeClass('is-show')

    $(this).parent().toggleClass('is-show')
})
$(".c-headerMb__icon").click(function () {
    $('body').toggleClass('is-openNavMb')
});
$(".c-headerMb .c-nav__item").click(function () {
    $('body').removeClass('is-openNavMb')
});

// $(function () {

  
//     // Handle show hide menu
//     function handleCloseMenu() {
//       $('body').css("position", "relative")
//       $(".c-header__nav").css("display", "none");
//     }
  
//     // Close menu
//     $(".c-header__toggleclose").click(handleCloseMenu);
//     $('.c-header__navlink').click(handleCloseMenu)
  
//     // Open menu
//     $(".c-header__toggleopen").click(function () {
//       $('body').css("position", "fixed")
//       $(".c-header__nav").css("display", "block");
//       $(".c-header__toggleclose").css("display", "block");
//     });
  
//     // Handle expand feature
  
  
//   // Active menu when page scroll
    
  
  
//     $(window).scroll(function() {
//         var scrollDistance = $(window).scrollTop();
//         $('section').each(function(i) {
//             if ($(this).position().top <= scrollDistance + 500 ) {
//                 $('.c-header__navitem .c-header__navlink.is-active').removeClass('is-active');
//                 $('.c-header__navitem .c-header__navlink').eq(i).addClass('is-active');
//             }
//         });
//     }).scroll();
//   });
  