
//Utility function to handle timeouts
function createFunctionWithTimeout(callback, opt_timeout) {
  var called = false;
  function fn() {
    if (!called) {
      called = true;
      callback();
    }
  }
  setTimeout(fn, opt_timeout || 10000);
  return fn;
}

//create user cookie for asynchronous data sharing so we know when people click the appointment and contact buttons
ga('create', 'UA-115477467-1', 'auto');
// Updates the tracker to use `navigator.sendBeacon` if available.
ga('set', 'transport', 'beacon');

// Gets a reference to the form element, assuming
// it contains the id attribute "signup-form".
var form = document.getElementById('formspree-contact');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function(event) {
  // Prevents the browser from submitting the form
  // and thus unloading the current page.
  event.preventDefault();

  // Sends the event to Google Analytics and
  // resubmits the form once the hit is done.
  ga('send', 'event', 'Contact Form', 'submit', {
    hitCallback: createFunctionWithTimeout(function() {
      form.submit();
    })
  });
});

//track when someone clicks the spwidget button
var spw = document.getElementById('spwidget-link');
spw.addEventListener('click', function(event) {

  // Prevents the browser from opening window
  // and thus unloading the current page.
  event.preventDefault();

  // Sends the event to Google Analytics and
  // opens the new window once the hit is done.
  ga('send', 'event', 'SP Widget', 'click', {
    hitCallback: createFunctionWithTimeout(function() {
      spw.submit();
    })
  });
});
