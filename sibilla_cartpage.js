function onAddProductSuccess1MS(id , childProductId, quantity,product){
if (siteLanguage.code == 'it'){
  alert("Il prodotto è stato aggiunto al carrello. Verrai reindirizzato al checkout in pochi secondi.") ;
}else if(siteLanguage.code == 'en'){
   alert("The product has been added to cart. You will be redirected to the checkout in a few seconds.")
}

window.location=Oms.Util.getLanguageBaseUrl("/carrello.html");
};
