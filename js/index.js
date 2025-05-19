// document.querySelectorAll(".tab").forEach((button) => {
//   button.addEventListener("click", () => {
//     document
//       .querySelectorAll(".tab")
//       .forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");
//   });
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

function switchTab(tab) {
  // Toggle active class on tabs
  document.getElementById("signInTab").classList.remove("active");
  document.getElementById("registerTab").classList.remove("active");

  // Hide both forms
  document.getElementById("signinForm").classList.remove("active");
  document.getElementById("registerForm").classList.remove("active");

  // Show selected form and tab
  if (tab === "signin") {
    document.getElementById("signInTab").classList.add("active");
    document.getElementById("signinForm").classList.add("active");
  } else {
    document.getElementById("registerTab").classList.add("active");
    document.getElementById("registerForm").classList.add("active");
  }
}
// $(document).ready(function () {
//   console.log($);
// });

// create acc form val
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("registerForm");

//   const username = document.getElementById("username");
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   const confirmPassword = document.getElementById("confirmPassword");
//   const role = document.getElementById("role");

//   const userErr = document.getElementById("userErr");
//   const mailErr = document.getElementById("mailErr");
//   const pwdErr = document.getElementById("pwdErr");
//   const confirmErr = document.getElementById("confirmErr");
//   const roleErr = document.getElementById("roleErr");

//   form.addEventListener("submit", function (e) {
//     let isValid = true;

   
//     if (username.value.trim() === "") {
//       userErr.style.display = "block";
//       userErr.innerText = "Username is required";
//       isValid = false;
//     } else {
//       userErr.style.display = "none";
//     }

    
//     if (email.value.trim() === "") {
//       mailErr.style.display = "block";
//       mailErr.innerText = "Email is required";
//       isValid = false;
//     } else if (email.value.length < 10) {
//       mailErr.style.display = "block";
//       mailErr.innerText = "Minimum 10 characters required";
//       isValid = false;
//     } else {
//       mailErr.style.display = "none";
//     }

    
//     if (password.value === "") {
//       pwdErr.style.display = "block";
//       pwdErr.innerText = "Password is required";
//       isValid = false;
//     } else if (password.value.length < 6) {
//       pwdErr.style.display = "block";
//       pwdErr.innerText = "Minimum 6 characters required";
//       isValid = false;
//     } else {
//       pwdErr.style.display = "none";
//     }

    
//     if (confirmPassword.value === "") {
//       confirmErr.style.display = "block";
//       confirmErr.innerText = "Please confirm your password";
//       isValid = false;
//     } else if (confirmPassword.value !== password.value) {
//       confirmErr.style.display = "block";
//       confirmErr.innerText = "Passwords do not match";
//       isValid = false;
//     } else {
//       confirmErr.style.display = "none";
//     }

    
//     if (role.value === "") {
//       roleErr.style.display = "block";
//       roleErr.innerText = "Please select a role";
//       isValid = false;
//     } else {
//       roleErr.style.display = "none";
//     }

    
//     if (!isValid) {
//       e.preventDefault();
//     }
//   });
// });

$(document).ready(function () {
  // console.log($)

  $(".mailErr").hide();
  $(".pwdErr").hide();

  $("#email").on("input", function () {
    // alert();

    let data = $("#email").val();
    // console.log("vaule in email",data);
    if (data.length < 1) {
      // console.log("required field");
      $(".mailErr").show();
      $(".mailErr").html("required field");
    } else if (data.length < 10) {
      $(".mailErr").show();
      $(".mailErr").html("minimum 10 characters required");
    } else {
      $(".mailErr").hide();
    }
  });


  $(document).ready(function () {
    $('.mailErr, .pwdErr, .userErr, .confirmErr, .roleErr').hide();

    $('#username, #email, #password, #confirmPassword, #role').on('input change', function () {
        validateForm();
    });

    function validateForm() {
        let username = $('#username').val().trim();
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();
        let confirmPassword = $('#confirmPassword').val().trim();
        let role = $('#role').val();

        // Username validation
        if (username.length < 1) {
            $('.userErr').show().html("Username is required");
        } else {
            $('.userErr').hide();
        }

        // Email validation
        if (email.length < 1) {
            $('.mailErr').show().html("Email is required");
        } else if (email.length < 10) {
            $('.mailErr').show().html("Minimum 10 characters required");
        } else {
            $('.mailErr').hide();
        }

        // Password validation
        if (password.length < 1) {
            $('.pwdErr').show().html("Password is required");
        } else if (password.length < 6) {
            $('.pwdErr').show().html("Minimum 6 characters required");
        } else {
            $('.pwdErr').hide();
        }

        // Confirm password validation
        if (confirmPassword.length < 1) {
            $('.confirmErr').show().html("Please confirm your password");
        } else if (confirmPassword !== password) {
            $('.confirmErr').show().html("Passwords do not match");
        } else {
            $('.confirmErr').hide();
        }

        // Role validation
        if (role === "" || role === null) {
            $('.roleErr').show().html("Please select a role");
        } else {
            $('.roleErr').hide();
        }
    }

    // Optional: prevent form submission if invalid
    $('#registerForm').on('submit', function (e) {
        validateForm();
        if ($('.mailErr:visible, .pwdErr:visible, .userErr:visible, .confirmErr:visible, .roleErr:visible').length > 0) {
            e.preventDefault();
        }
    });
});

});
