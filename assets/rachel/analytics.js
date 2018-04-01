
//Utility function to handle timeouts
function createFunctionWithTimeout(callback, opt_timeout) {
  var called = false;
  function fn() {
    if (!called) {
      called = true;
      callback();
    }
  }
  setTimeout(fn, opt_timeout || 20000);
  return fn;
}

// Gets a reference to the form element, assuming
// it contains the id attribute "signup-form".
var button = document.getElementById('formspree-button');

// Adds a listener for the "submit" event.
button.addEventListener('click', function(event) {

  // Prevents the browser from submitting the form
  // and thus unloading the current page.
  event.preventDefault();

  // Sends the event to Google Analytics and
  // resubmits the form once the hit is done.
  ga('send', 'event', 'Contact Form', 'submit', {
    hitCallback: createFunctionWithTimeout(function() {
      console.log('failed to connect to google');
      button.click();
    })
  });
});

//track when someone clicks the spwidget button
//var spw = document.getElementById('spwidget-link');
//spw.addEventListener('click', function(event) {
//
//  // Prevents the browser from submitting the form
//  // and thus unloading the current page.
//  event.preventDefault();
//
//  // Sends the event to Google Analytics and
//  // resubmits the form once the hit is done.
//  ga('send', 'event', 'SP Widget', 'click');
//});
