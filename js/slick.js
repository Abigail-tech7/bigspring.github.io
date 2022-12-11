$('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    touchMove:true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }

  ]
  });

  $('.worksSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    touchMove:true,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        // {
        //     breakpoint: 700,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3
        //     }
        // },
        // {
        //     breakpoint: 550,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        // }

  ]
  });

  $('.img-sliders').slick({
    
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    // dots: true,
    // customPaging : function(slider, i) {
    //     return '<a href="#"><img src="images/slide-dot.png" /><img src="images/slide-dot-active.png" /></a>';
    //     },
  });