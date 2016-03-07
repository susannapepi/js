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
    $(document).ready(function () {
  
      //cambio il testo del pulsante invia
  
      var nuovoBottone = "Richiedi Informazioni";
      $(".page-type-6 #invia").html(nuovoBottone);
    });

  }
})();

