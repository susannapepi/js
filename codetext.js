//rimuovo la scritta Codice:

  $(function() {
  $(".product_code").html($(".product_code").html().replace("Codice:",""));
});

//modifico la scritta more info:

  $(function() {
  $("a.more").text("scopri il programma");
});
  
//modifico la scritta prezzo:

  $(function() {
  $(".bd-last-minute .product_price").html($(".bd-last-minute .product_price").html().replace("Prezzo:","A partire da:"));
});
