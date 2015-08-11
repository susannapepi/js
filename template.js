//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  
  //cambio il testo dell'aggiungi al carrello
  
  $(".product-add-to-cart a span span").text("Crea il tuo sito");
  
  //per ogni prezzo, modifico il contenuto
  $(".product-price .price").each(function(){
      var prezzoVecchio=$(this).text();
      var prezzoNuovo=prezzoVecchio.replace(".00","");
      $(this).text(prezzoNuovo);
    });
    
  
});
