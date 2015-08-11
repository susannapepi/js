//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  
  //cambio dei testi
  
  $(".product-add-to-cart a span span").text("Crea il tuo sito");
  
  $(".price-vat").text("+ iva");
  
  //modifico la scritta Prezzo: con A partire da:
if ($(".product_price, .bd-a-partire-da .product_price").size()>0){
$(".product_price, .bd-a-partire-da .product_price").html($(".product_price, .bd-a-partire-da .product_price").html().replace("Prezzo:","a partire da:"));
}
  
  //per ogni prezzo, modifico il contenuto
  $(".product-price .price").each(function(){
      var prezzoVecchio=$(this).text();
      var prezzoNuovo=prezzoVecchio.replace(".00","");
      $(this).text(prezzoNuovo);
    });
    
  
});
