; (function() {
  "use strict";

  if (typeof omsOnInit === 'function') {
    omsOnInit(function() {
      require(['jquery', 'jquery-validate', 'jquery-validate-i18n'], function($) {
        doWork($);
      });
    });
  }
  else if (typeof require === 'function') {
    require(['jquery', 'jquery-validate', 'jquery-validate-i18n'], function($) {
      doWork($);
    });
  }
  else {
    doWork($);
  }

  function doWork($) {
    $(document).ready(function() {
      $("#contact_form_1001").validate({
        submitHandler: sendHandler,
        invalidHandler: function(form, validator) {
          //mostro l'alert sulla privacy solo se è l'unico campo non valido  

          if (validator.numberOfInvalids() == 1 && validator.invalid.privacy_agreement != 'undefined') {
            alert("Devi accettare l'informativa per la privacy");
          }

        },
        errorClass: 'invalid_input_row',
        rules: {
          privacy_agreement: {
            required: true
          }

        }
      });
    });
  }

})();



