; (function() {
  "use strict";
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
      var $col1 = $('.col-1').clone();
      $('.col-1').remove();
      $col1.insertAfter('.col-2');
    });
  }
})();



