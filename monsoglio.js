//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  
//rimuovo la scritta Codice:
if ($(".product_code").size()>0){
$(".product_code").html($(".product_code").html().replace("Codice:",""));
}

//modifico la scritta Prezzo: con A partire da:
if ($(".bd-last-minute .product_price").size()>0){
$(".bd-last-minute .product_price").html($(".bd-last-minute .product_price").html().replace("Prezzo:","A partire da:"));
}

//modifico la scritta del link più info
$("a.more").text("scopri il programma »");

  
});
