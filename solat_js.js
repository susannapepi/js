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
      //submenu scheda prodotto
        $(".parent-18 #breadcrumbs").after($(".parent-18 #submenu").remove());
        $(".parent-18 #submenu").show();
    });
  }
})();
