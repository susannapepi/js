; (function() {
  "use strict";

  if (typeof omsOnInit === 'function') {
    omsOnInit(function() {
      require(['oms/ecommerce/product-filter', 'oms/translations','oms/ecommerce/store'], function(ProductFilter, translations) {
        doWork(ProductFilter, translations);
        onSuccessLoadStore1MS();
      });
    });
  }
  else if (typeof require === 'function') {
    doWork(ProductFilter, translations);
  }
  else {
    doWork(ProductFilter, translations);
  }

  function doWork(ProductFilter, translations) {
    //Configurazione generale di ogni filtro
    ProductFilter.defaultConfig = {
      fulltextSearchEnabled: true,    //server ad abilitare la ricerca testuale (opzionale, di default false)
      filters: [                       // elenco filtri
        {
          tagPrefix: 'C-',        // prefisso usato nei tag per individuare i valori di questo filtro
          label: 'Categoria',
          code: 'cat',            // codice del filtro, viene messo come "name" nella select del filtro e nel div contenitore del filtro, con questa convenzione: "filter-CODICE". Può essere utile per interventi puntuali su singoli filtri
          noSelectedText: 'tutte'  // testo da mostrare di default nella tendina (se omesso viene messo a vuoto)
        },
        {
          tagPrefix: 'M-',
          label: 'Marca',
          code: 'marca',
          noSelectedText: 'tutte'
        }
      ]
    }

    window.onSuccessLoadStore1MS = function() {

      //qui è possibile inserire traduzioni diverse per i test del filtro
      translations["label.ecommerce.product-filter.fulltext_search"] = "Inserisci il nome del prodotto che stai cercando";
      translations["button.ecommerce.product-filter.filter"] = "Cerca";
      translations["label.ecommerce.product-filter.no_results"] = "Nessun prodotto corrispondente ai criteri di ricerca";
      
      ProductFilter.generate();
    }
  }
})();




