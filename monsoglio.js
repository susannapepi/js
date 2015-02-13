//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  
//rimuovo la scritta Codice:
if ($(".product_code").size()>0){
$(".product_code").html($(".product_code").html().replace("Codice:",""));
}

//modifico la scritta Prezzo: con A partire da:
if ($(".bd-last-minute .product_price").size()>0){
$(".bd-last-minute .product_price").html($(".bd-last-minute .product_price").html().replace("Prezzo:","A partire da:"));
}

//modifico la scritta del link più info
$("a.more").text("scopri il programma »");

  
});

//ordinamento prodotti

function onSuccessLoadStore1MS(){

  		
		if (typeof moment != 'function'){
				var head = document.getElementsByTagName("head")[0] || document.documentElement;
				var s = document.createElement("script");
				s.src = "http://momentjs.com/downloads/moment.min.js";
				
				s.onload = s.onreadystatechange = function(){
						_sortCatalogProducts();
				}
				head.insertBefore(s, head.firstChild);
		}else{
			_sortCatalogProducts();
		}
		
    }
	
	function _sortCatalogProducts(){
		function getProductId(productItemDiv){
			productItemDiv = $(productItemDiv);
			var productId = null;
			$.each(productItemDiv.get(0).className.split(" "), function(){
				if (this.indexOf("product-item-") == 0){
					productId = this.replace("product-item-","");
					return false;
				}
			});
			
			return productId;
		}
		
		var dateFormat = "DD/MM/YYYY";
		var direction = 1;
		$(".div_product_catalog").each(function(){
			var catalog = $(this);
			
			var items = catalog.find(".product-item").sort(function(p1, p2){			
				
				var id1 = getProductId(p1);
				var id2 = getProductId(p2);

				var code1 = store.products[id1].product_code;
				var code2 = store.products[id2].product_code;
				
				var dt1 = moment(code1, dateFormat);
				var dt2 = moment(code2, dateFormat);
				
				if (!dt1.isValid() && !dt1.isValid()){
					return 0;
				}
				
				if (!dt1.isValid()){
					return 1 * direction;
				}
				
				if (!dt2.isValid()){
					return -1 * direction;
				}
				
				if (dt1.isSame(dt2)){
					return 0;
				}
				
				return ((dt1.isBefore(dt2)) ? -1 : 1) * direction;
				
			});
			
			items.detach().appendTo(catalog);
			
			catalog.show();
			
		});
		
		
		
	};
