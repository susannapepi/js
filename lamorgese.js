(function() {
  if (typeof omsOnInit === 'function') {
    omsOnInit(function() {
      require(['jquery', 'jquery-ui'], function($) {
        doWork($);
      });
    });
  }
  else if (typeof require === 'function') {
    require(['jquery', 'jquery-ui'], function($) {
      doWork($);
    });
  }
  else {
    doWork($);
  }
  function doWork($) {
    $(document).ready(function() {
      $(".page_id_5 .col-1").accordion({
        header: "> div > h2",
        collapsible: true,
        autoHeight: false
      });
    });

  }
})();
