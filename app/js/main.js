
$(function () {
  $('.header__burger').on('click', function () {
    $('.header__menu-list').slideToggle();
    $('.header__burger').toggleClass("header__burger--active");
  });

  $('.promo-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    fade: true
  }
  );

  $('.testimonials__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  }
  );


  //-------Счетчик цифр--------//

  var num = $(".achivement__number");

  num.each(function (indx, el) {

    var max = $(el).data("max");
    var duration = 3000;
    var visibility = checkViewport(el);

    $(el).on("animeNum", function () {
      if (!el.classList.contains('active')) {
        $({ n: 0 }).animate({ n: max }, {
          easing: "linear",
          duration: duration,
          step: function (now, fx) {
            $(el).html(now | 0)
          }
        })
      }
      el.classList.add('active');

    }).data("visibility", visibility);

    visibility && $(el).trigger("animeNum");

  });


  function checkViewport(el) {

    var H = document.documentElement.clientHeight,
      h = el.scrollHeight,
      pos = el.getBoundingClientRect();
    return pos.top + h > 0 && pos.bottom - h < H
  }

  $(window).scroll(function () {

    num.each(function (indx, el) {
      var visibility = checkViewport(el);
      el = $(el);
      var old = el.data("visibility");
      old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum");
    })
  })


  //--------MixitUp--------//

  var mixer = mixitup('.works__item-box');

});





