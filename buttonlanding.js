$(document).ready(function(){
  
  //cambio il testo del pulsante invia
  
$('.page-type-6 #invia').html(function() {
    return $(this).text().replace('Invia', 'Richiedi Informazioni');
});
