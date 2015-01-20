//rimuovo la scritta Codice:
$("a.more").text("scopri il programma");

  $(function() {
  $(".product_code").html($(".product_code").html().replace("Codice:",""));
});

//modifico la scritta more info:

  
  
//modifico la scritta prezzo:

  $(function() {
  $(".bd-last-minute .product_price").html($(".bd-last-minute .product_price").html().replace("Prezzo:","A partire da:"));
});
