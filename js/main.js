'use strict';

$(function () {
  // $(".menu_brg").click(function (event) {
  //   $(".menu_brg,.menu_list,.header_social").toggleClass("active");
  // });

  $('.baner__slider').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../images/left_arrow.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../images/right_arrow.svg" alt=""></button>',
    // responsive: [
    //   {
    //     breakpoint: 880,
    //     settings: {
    //       arrows: false,
    //       dots: true,
    //     },
    //   },
    // ],
  });
});
