//modifiche testi:
$(document).ready(function(){
  
$("a.more").text("scopri il programma");
$(".product_code").html($(".product_code").html().replace("Codice:",""));
$(".bd-last-minute .product_price").html($(".bd-last-minute .product_price").html().replace("Prezzo:","A partire da:"));

})
