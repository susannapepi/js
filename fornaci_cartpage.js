function onAddProductSuccess1MS(id , childProductId, quantity,product){
console.log(id);
console.log(childProductId);
console.log(quantity);
console.log(product);
alert('Il prodotto è stato aggiunto al carrello. Verrai reindirizzato al checkout in pochi secondi.');
window.location="/carrello.html";
};
