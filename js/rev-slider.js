(function ($) {
  "use strict";

  $(document).ready(function () {

    // Agency Hero
    $('#slider1').revolution({
      sliderLayout: "fullscreen",
      sliderType: "hero",
      delay: 12000,
      responsiveLevels: [4096, 1024, 778, 460],
      gridwidth: [1280, 1024, 778, 460],
      gridheight: 600,
      hideThumbs: 10,

      parallax: {
        type: "scroll",
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        origo: "slidercenter",
        speed: 2000,
        bgparallax: "on",
        disable_onmobile: "on"
      },

      spinner: "spinner4"
    });

    // Agency Hero
    $('#slider-video').revolution({
      sliderLayout: "fullscreen",
      sliderType: "hero",
      delay: 12000,
      responsiveLevels: [4096, 1024, 778, 460],
      gridwidth: [1280, 1024, 778, 460],
      gridheight: 600,
      hideThumbs: 10,

      parallax: {
        type: "scroll",
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        origo: "slidercenter",
        speed: 2000,
        bgparallax: "on",
        disable_onmobile: "on"
      },

      spinner: "spinner4"
    });


    // Projects Showcase
    $('#slider2').revolution({
      sliderLayout: "fullscreen",
      autoHeight: 'on',
      sliderType: "auto",
      delay: 12000,
      responsiveLevels: [4096, 1024, 778, 460],
      // gridwidth: [1280, 1024, 778, 460],
      // gridheight: 600,
      hideThumbs: 10,
      spinner: "spinner4"
    });

    // Projects Showcase
    $('#slider3').revolution({
      sliderLayout: "fullwidth",
      sliderType: "auto",
      autoHeight: 'on',
      delay: 12000,
      responsiveLevels: [4096, 1024, 778, 460],
      hideThumbs: 10,
      spinner: "spinner4"
    });
  });

})(jQuery);