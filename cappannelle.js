(function () {
  if (typeof omsOnInit === 'function') {
    omsOnInit(function () {
      require(['jquery'], function ($) {
        doWork($);
      });
    });
  }
  else if (typeof require === 'function') {
    require(['jquery'], function ($) {
      doWork($);
    });
  }
  else {
    doWork($);
  }

  function doWork($) {
    //lo eseguo dopo che ho caricato il sito
    $(document).ready(function () {

      //modifico la scritta del link più info
      $("a.more").text("read all »");


    });
  }
})();









