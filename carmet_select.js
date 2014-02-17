function onSuccessLoadStore1MS(){
    translations['error.ecommerce.product_child_not_selected'] = "Scegli la configurazione di scarico";
    var $productChildSelect = $(".product-child-select");
    if ($productChildSelect.size() > 0){
        $productChildSelect.prepend("<option value=''>Configurazione di scarico</option>").val("").val("").change();
    }
    
}
