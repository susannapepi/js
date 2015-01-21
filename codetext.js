//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  
//cambio il testo dell'aggiungi al carrello

$(".product_code").html($(".product_code").html().replace("Codice:",""));
$(".bd-last-minute .product_price").html($(".bd-last-minute .product_price").html().replace("Prezzo:","A partire da:"));
$("a.more").text("scopri il programma");

  
});
