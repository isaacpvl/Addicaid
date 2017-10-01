/*var stripe = Stripe('pk_test_MWScvgZgTeF6jmMkzZPeUmfx');
 var elements = stripe.elements();
 var card = elements.create('card', {
 'style': {
 'base': {
 'fontFamily': 'Arial, sans-serif',
 'color': '#C1C7CD'
 },
 'invalid': {
 'color': 'red'
 }
 }
 });
 card.mount('#card-element');

 function createToken() {
 stripe.createToken(card).then(function (result) {
 if (result.error) {
 var errorElement = document.getElementById('card-errors');
 errorElement.textContent = result.error.message;
 } else {
 $.post("http://pay.addicaid.com/pay", {token: result.token.id, amount: 25})
 .done(function () {
 alert("second success");
 })
 .fail(function () {
 alert("error");
 });
 }
 });
 }

 // Create a token when the form is submitted.
 var form = document.getElementById('payment-form');
 form.addEventListener('submit', function (e) {
 e.preventDefault();
 createToken();
 });
 card.addEventListener('change', function (event) {
 var displayError = document.getElementById('card-errors');
 if (event.error) {
 displayError.textContent = event.error.message;
 } else {
 displayError.textContent = '';
 }
 });*/

/*
 *
 * JS BY ACHRAF
 *
 */

$(document).ready(function () {
  var modal = $('#purshase-form-modal');

  $(".open-purshase-modal").click(function () {
    modal.fadeIn();
  });

  $(".close").click(function () {
    modal.fadeOut();
  });

  $(document).bind('click', function (event) {
    if (event.target.id === 'purshase-form-modal') {
      modal.fadeOut();
    }
  })

  // NEW MODAL
  $(function () {
    $('#cardnumber').payment('formatCardNumber');
    $('#cardexpiration').payment('formatCardExpiry');
    $('#cardcvc').payment('formatCardCVC');

    $('#cardnumber').keyup(function (event) {
      nbrValue = $(this).val() || "0000 0000 0000 0000";
      $('#label-cardnumber').empty().append(nbrValue);

    });

    $('#cardexpiration').keyup(function (event) {
      expirationValue = $(this).val() || "00 / 0000";
      cvcValue = $('#cardcvc').val() || "000";
      var data = expirationValue + '<span>' + cvcValue + '</span>';
      $('#label-cardexpiration').empty().append(data);
    });

    $('#cardcvc').keyup(function (event) {
      cvcValue = $(this).val() || "000";
      expirationValue = $('#cardexpiration').val() || "00 / 0000";
      var data = expirationValue + '<span>' + cvcValue + '</span>';
      $('#label-cardexpiration').empty().append(data);
    });

    $('.button-cta').on('click', function () {
      var proceed = true;
      $(".field input").each(function () {
        $(this).parent().find('path').each(function () {
          $(this).attr('fill', '#dddfe6');
        });

        if (!$.trim($(this).val())) {
          $(this).parent().find('path').each(function () {
            $(this).attr('fill', '#f1404b');
            proceed = false;
          });

          if (!proceed) {
            $(this).parent().find('svg').animate({opacity: '0.1'}, "slow");
            $(this).parent().find('svg').animate({opacity: '1'}, "slow");
            $(this).parent().find('svg').animate({opacity: '0.1'}, "slow");
            $(this).parent().find('svg').animate({opacity: '1'}, "slow");
          }
        }
      });

      if (proceed) //everything looks good! proceed purchase...
      {
        $('.field').find('path').each(function () {
          $(this).attr('fill', '#3ac569');
        });
        $('.payment').fadeToggle('slow', function () {
          $('.paid').fadeToggle('slow', 'linear');
        });
      }
    });
  });
});
