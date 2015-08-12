//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  
  //cambio dei testi
  
  $(".product-add-to-cart a span span").text("Crea il tuo sito");
  
  $(".price-vat").text("+ iva");
  
  //per ogni prezzo, modifico il contenuto
  $(".product_price .price").each(function(){
      var prezzoVecchio=$(this).text();
      var prezzoNuovo=prezzoVecchio.replace(".00","");
      $(this).text(prezzoNuovo);
    });
  
  //modifico la scritta Prezzo: con a partire da:
  if ($(".product_price, .bd-a-partire-da .product_price").size()>0){
  $(".product_price, .bd-a-partire-da .product_price").html($(".product_price, .bd-a-partire-da .product_price").html().replace("Prezzo:","a partire da* "));
  }
  
});

  //bottone link pagina listino
  function onAddProductSuccess1MS(id , childProductId, quantity,product){

  window.location="http://www.oneminutesite.it/listini.html";
  };
