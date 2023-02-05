$(document).ready(function(){
    $('.slider-var').slick({
      autoplay: false,
      autoplaySpeed:900,
      dots: false,
      infinite: false,
      speed: 900,
      slidesToShow: 3,
      adaptiveHeight: true,
      touchMove: true,
      centerMode: true,
      initialSlide: 2,
      // asNavFor:".slider-var-big",
      // Адаптив
      responsive:[
        {
          breakpoint: 500,
          settings:{
            slidesToShow: 1
          }
        }
      ]
    });
    // ----------------------------Большой слайдер-------------------------------
    // $('.slider-var-big').slick({
    //   arrows:false,
    //   fade: true,
    //   centerMode: true,
    //   asNavFor:".slider-var"
    // });
  })