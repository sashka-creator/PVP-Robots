var swiper = new Swiper('.slider .swiper-container', {
    
    slidesPerView: 5,
    spaceBetween: 20,

    autoplay: {
        delay: 1000,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1250: {
        slidesPerView: 5,
      }
      
  },

  });

$(document).ready(function() {
  $("a.nav__item").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});