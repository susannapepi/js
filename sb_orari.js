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

      //cambio il testo dell'aggiungi al carrello

      $("#sidebar-btn-show").text("Orari e contatti");
      $("#sidebar-btn-hide").text("Nascondi orari e contatti");
    });

  }
})();
