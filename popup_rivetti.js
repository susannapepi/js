$(function(){

var popupContent = $(<div><p>Iscriviti alla newsletter per rimanere sempre aggiornato su nuovi articoli e video pubblicati dal dott. Rivetti e sapere quando e dove tiene corsi di formazione</p>
<form name="subscribeform" action="http://www.sendminer.it/sm/public/subscribe.do" method="post" onsubmit="return SC_SM.onSubscriptionFormSubmit(this);"><input name="idutente" type="hidden" value="ScQGHNFScQ"><input name="idgruppo" type="hidden" value="ScQNMFKScQ"><input name="action" type="hidden" value="dosubscribe">
<table><tbody><tr><td>Nome:</td><td><input name="db_nome" type="text"></td></tr>
<tr><td class="scf_label">Cognome:</td><td><input name="db_cognome" type="text"></td></tr>
<tr><td class="scf_label">Posta Elettronica:</td><td><input class="scf-required scf-email" name="db_email" type="text"></td></tr>
<tr><td class="scf_label">Telefono:</td><td><input name="db_telefono" type="text"></td></tr>
<tr><td class="scf_label">Come ho conosciuto il dott. Rivetti <br>(corso insegnanti, formazione genitori, passaparola, internet, ecc.):</td><td><input name="db_cellulare" type="text"></td></tr>
<tr><td class="scf_label">Città:</td><td><input name="db_fax" type="text"></td></tr>
<tr><td><input class="scf_button" type="reset" value="Cancella"></td><td class="scf_label"><input class="scf_button" type="submit" value="Conferma"></td></tr></tbody></table>
</form></div>);    //qui mettere contenuto del popup, come selettore o direttamente il suo contenuto
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
