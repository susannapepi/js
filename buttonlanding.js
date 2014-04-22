$(document).ready(function(){
  
  //cambio il testo del pulsante invia
  
$('.page-type-6 button#invia').html(function() {
    return $(this).text().replace('Invia', 'Richiedi Informazioni');
});
