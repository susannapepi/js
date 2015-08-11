//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  
  //cambio dei testi
  
  $(".product-add-to-cart a span span").text("Crea il tuo sito");
  
  $(".price-vat").text("+ iva");
  
  //per ogni prezzo, modifico il contenuto
  $(".product-price .price").each(function(){
      var prezzoVecchio=$(this);
      var prezzoNuovo=prezzoVecchio.replace(".00","");
      $(this).text(prezzoNuovo);
    });
    
  
});
