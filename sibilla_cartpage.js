(function() {
  if (typeof omsOnInit === 'function') {
    omsOnInit(function() {
      require(['oms/context', 'oms/utils'], function(Context, Utils) {
        doWork(Context.siteLanguage, Utils);
      })
    });
  }
  else {
    doWork(siteLanguage, Oms.Utils);
  }
  
  function doWork(siteLanguage, Utils) {
    window.onAddProductSuccess1MS = function(id, childProductId, quantity, product) {

      var destUrl = null;
      var msg = null;
      if (siteLanguage.code == 'it') {
        destUrl = "carrello.html";
        msg = "Il prodotto è stato aggiunto al carrello. Verrai reindirizzato al checkout in pochi secondi.";
      } else if (siteLanguage.code == 'en') {
        destUrl = "/cart.html";
        msg = "The product has been added to cart. You will be redirected to the checkout in a few seconds.";
      }
      alert(msg);
      window.location = Utils.getLanguageBaseUrl(destUrl);
    };

    /*function onAddProductSuccess1MS(id , childProductId, quantity,product){
    
    alert('Il prodotto è stato aggiunto al carrello. Verrai reindirizzato al checkout in pochi secondi.');
    window.location="/carrello.html";
    };*/
  }
})();





