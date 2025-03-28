document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Collect form data.
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      company: document.getElementById("company").value,
      designation: document.getElementById("designation").value,
      consent: document.getElementById("consent").checked ? "Yes" : "No",
      timestamp: new Date().toISOString()
    };

    // Optionally, save to localStorage for demo purposes.
    localStorage.setItem("userData", JSON.stringify(formData));

    // Send data to Google Sheets.
    sendToGoogleSheets(formData);
  });

  function validateForm() {
    // Add your validation logic if needed.
    return true;
  }

  function sendToGoogleSheets(formData) {
    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we process your information",
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); },
    });

    // Replace this URL with your deployed Web App URL.
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxwWKiYPAXChxIerEvEo5AB56_lcNhEp7WGWgXdUTgTutOcftQDvPyCX4Ul9tMfiSV5/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors', // Use no-cors mode to bypass CORS preflight
      body: JSON.stringify(formData)
      // Do not set any custom headers here.
    })
    .then(() => {
      // With no-cors, the response is opaque, so we assume success.
      Swal.fire({
        title: 'Success!',
        text: 'Your information has been submitted successfully',
        icon: 'success',
        confirmButtonColor: '#f39c12'
      }).then(() => {
        window.location.href = 'success.html';
      });
    })
    .catch(error => {
      Swal.fire({
        title: 'Error!',
        text: 'There was a problem submitting your information. Please try again.',
        icon: 'error',
        confirmButtonColor: '#f39c12'
      });
      console.error('Error:', error);
    });
  }
});
