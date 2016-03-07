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

      //cambio il testo dell'aggiungi al carrello
  
      $(".product-add-to-cart a span span").text("Prenotazione");
      $(".bottone_checkout span span, .bottone_ordina span span").text("Prenota");

    });

  }
})();





