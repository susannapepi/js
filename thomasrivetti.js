$(function(){

var popupContent = $("<p>Iscriviti alla newsletter per rimanere sempre aggiornato su nuovi articoli e video pubblicati dal dott. Rivetti e sapere quando e dove tiene corsi di formazione</p>");    //qui mettere contenuto del popup, come selettore o direttamente il suo contenuto
var cookieName = "news_pop";
var newsletterPopupCookie = $.cookie(cookieName);

if (newsletterPopupCookie != "1"){
	popupContent.dialog({
		modal: true,
		title: "Iscriviti alla newsletter",			//titolo del popup
		dialogClass: "newsletter-dialog",
		width: 600,		//larghezza, l'altezza va in automatico
		resizable: false,
		draggable: false
	});
	
	$.cookie(cookieName, "1", {
		expires: 9999
	});
}

});
