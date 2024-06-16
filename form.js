(function () {
    "use strict";
  


    
    document.addEventListener('DOMContentLoaded', function () {
      let forms = document.querySelectorAll('.php-email-form');
  
      forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
          event.preventDefault();
  
          let thisForm = this;
          let formData = new FormData(thisForm);
          let action = thisForm.getAttribute('action');
  
          let loading = thisForm.querySelector('.loading');
          let errorMessage = thisForm.querySelector('.error-message');
          let sentMessage = thisForm.querySelector('.sent-message');
  
          loading.classList.add('d-block');
          errorMessage.classList.remove('d-block');
          sentMessage.classList.remove('d-block');
  
          // Simulate successful submission for demonstration purposes
          setTimeout(function () {
            loading.classList.remove('d-block');
            sentMessage.classList.add('d-block');
            thisForm.reset(); // Optional: Reset the form after successful submission
  
            // Show prompt to user
            alert('Message sent successfully!'); // Replace with your custom prompt or notification method
          }, 1000); // Adjust timeout as needed, 1000ms = 1 second
  
          // Replace with actual fetch request for real backend integration
          /*
          fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
              'X-Requested-With': 'XMLHttpRequest'
            }
          })
            .then(response => response.text())
            .then(data => {
              loading.classList.remove('d-block');
              if (data.trim() === 'OK') {
                sentMessage.classList.add('d-block');
                thisForm.reset(); // Optional: Reset the form after successful submission
  
                // Show prompt to user
                alert('Message sent successfully!'); // Replace with your custom prompt or notification method
              } else {
                throw new Error(data ? data : 'Form submission failed and no error message returned.');
              }
            })
            .catch(error => {
              errorMessage.innerHTML = error.message ? error.message : error;
              errorMessage.classList.add('d-block');
              loading.classList.remove('d-block');
            });
          */
        });
      });
    });
  
  })();
  