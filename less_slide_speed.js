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
      var carousel = $('#top-image-carousel').data('bs.carousel');
      if (carousel){
        carousel.options.interval = 2000;      //è espresso in millisecondi, di default è 5000    });
      } 
    });

  }
})();