function onAddProductSuccess1MS(id , childProductId, quantity,product){

var destUrl = null;
var msg = null;
if (siteLanguage.code == 'it'){
  destUrl = "carrello.html";
  msg = "Il prodotto è stato aggiunto al carrello. Verrai reindirizzato al checkout in pochi secondi.";
}else if(siteLanguage.code == 'en'){
   destUrl = "/cart.html";
  msg = "The product has been added to cart. You will be redirected to the checkout in a few seconds.";
}
  alert(msg);
  window.location=Oms.Util.getLanguageBaseUrl(destUrl);
};
