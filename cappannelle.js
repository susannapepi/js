(function() {
  if (typeof omsOnInit === 'function') {
    omsOnInit(doWork);
  }
  else {
    doWork();
  }

  function doWork() {
    require(['jquery', 'domReady!'], function($) {
      //modifico la scritta del link più info
      $("a.more").text("read all »");
    });
  }
})();









