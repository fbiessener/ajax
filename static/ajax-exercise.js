'use strict';


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // $.get('/fortune', (response) => {
    //   // .text() returned plain text
    //   // .html() returns the html formatting for the response given by the form
    //       $('#fortune-text').html(response); 
    // });

    // get refactor with load()
    $('#fortune-text').load('/fortune');
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = '/weather.json';
    // let formData = {'zipcode': $('#zipcode-field').val()};

    // serialize() refactor
    const formValues = $('#weather-form').serialize();

    // TODO: request weather with that URL and show the forecast in #weather-info
    // replace formValues with formData to run non-serialized code block
    $.get(url, formValues, (response) => {
      $('#weather-info').text(response.forecast);
    });


}

$('#weather-form').on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
 
    // explicitly getting each individual input from the form
    // const formInputs = {
    //   'qty': $('#qty-field').val(),
    //   'melon_type': $('#melon-type-field').val()
    // };

    // console.log(formInputs);

    // Same code, but with serialize() instead
    const formValues = $('#order-form').serialize();

    // change data param to formInputs to run commented out block instead of 
    // serialize() block
    $.post('/order-melons.json', formValues, (response) => {
      $('#order-status').text(response.msg);
      if (response.code === 'ERROR') {
        $('#order-status').addClass('order-error');
      } else {
        $('#order-status').removeClass('order-error');
      }
    });
}

$('#order-form').on('submit', orderMelons);
