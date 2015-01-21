//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  
//rimuovo la scritta Codice:
$(".product_code").html($(".product_code").html().replace("Codice:",""));

//modifico la scritta Prezzo: con A partire da:
$(".bd-last-minute .product_price").html($(".bd-last-minute .product_price").html().replace("Prezzo:","A partire da:"));

//modifico la scritta del link più info
$("a.more").text("scopri il programma");

  
});
