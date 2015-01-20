//modifiche testi:
  
$("a.more").text("scopri il programma");
$(".bd-last-minute .product_price").html($(".bd-last-minute .product_price").html().replace("Prezzo:","A partire da:"));
$(function() {
  $(".product_code").html($(".product_code").html().replace("Codice:",""));
});
