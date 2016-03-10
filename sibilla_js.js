(function() {
  if (typeof omsOnInit === 'function') {
    omsOnInit(doWork);
  }
  else {
    doWork($);
  }
  
  function doWork($) {

    require(['jquery', 'domReady!'], function($) {
      $('.bxslider').bxSlider({
        slideWidth: 734,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 3,
        slideMargin: 11,
        pager: false
      });
    });
  }
})();
