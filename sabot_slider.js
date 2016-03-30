(function() {
  if (typeof omsOnInit === 'function') {
    omsOnInit(function() {
      require(['jquery'], function($) {
        doWork($);
      });
    });
  }
  else if (typeof require === 'function') {
    require(['jquery'], function($) {
      doWork($);
    });
  }
  else {
    doWork($);
  }
  
  function doWork($) {
    $(document).ready(function() {
      if ($.fn.cssOriginal != undefined)
        $.fn.css = $.fn.cssOriginal;

      $('.bannercontainer').kenburn(
        {

          thumbWidth: 100,
          thumbHeight: 100,

          thumbAmount: 7,
          thumbStyle: "thumb",			//thumb, bullet, none, both
          thumbVideoIcon: "off",

          thumbVertical: "bottom",
          thumbHorizontal: "center",
          thumbXOffset: 20,
          thumbYOffset: 40,
          bulletXOffset: 0,
          bulletYOffset: -16,

          hideThumbs: "off",
          repairChromeBug: "on",

          touchenabled: 'on',
          pauseOnRollOverThumbs: 'on',
          pauseOnRollOverMain: 'off',
          preloadedSlides: 3,

          timer: 7,

          debug: "off",


        });
    });

  }
})();





