document.addEventListener("DOMContentLoaded", () => {
  // Import SweetAlert
  // Assuming you are using a CDN or module bundler
  // If using CDN, add this to your HTML:
  // <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  // If using a module bundler (e.g., Webpack, Parcel), you can import it like this:
  // import Swal from 'sweetalert2';

  const form = document.getElementById("userForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      company: document.getElementById("company").value,
      designation: document.getElementById("designation").value,
      consent: document.getElementById("consent").checked ? "Yes" : "No",
      timestamp: new Date().toISOString(),
    }

    // Save to localStorage for demo purposes
    localStorage.setItem("userData", JSON.stringify(formData))

    // In a real implementation, you would send this data to Google Sheets
    // using Google Apps Script Web App URL
    sendToGoogleSheets(formData)
  })

  function validateForm() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const company = document.getElementById("company").value
    const designation = document.getElementById("designation").value

    if (!name || !email || !phone || !company || !designation) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields",
        icon: "error",
        confirmButtonColor: "#f39c12",
      })
      return false
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid email address",
        icon: "error",
        confirmButtonColor: "#f39c12",
      })
      return false
    }

    // Basic phone validation (at least 10 digits)
    const phoneRegex = /^\d{10,}$/
    if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid phone number (at least 10 digits)",
        icon: "error",
        confirmButtonColor: "#f39c12",
      })
      return false
    }

    return true
  }

  function sendToGoogleSheets(formData) {
    // Show loading indicator
    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we process your information",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    // setTimeout(() => {
//   Swal.fire({
//     title: "Success!",
//     text: "Your information has been submitted successfully",
//     icon: "success",
//     confirmButtonColor: "#f39c12",
//   }).then(() => {
//     // Redirect to the share page
//     window.location.href = "success.html"
//   })
// }, 1500)


    // In a real implementation, you would use fetch to send data to Google Sheets
    // Example:
    
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxF8npd9aXxCY2kcFkNmIzfrweHPdpcSNfotK8Koei4vZcpfY3EZLQhV62hl_jOxkm7/exec';
        
        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your information has been submitted successfully',
                    icon: 'success',
                    confirmButtonColor: '#f39c12'
                }).then(() => {
                    window.location.href = 'success.html';
                });
            } else {
                throw new Error('Network response was not ok');
            }
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
})

