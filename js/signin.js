function switchTab(tab) {
    // Toggle active class on tabs
    document.getElementById('signInTab').classList.remove('active');
    document.getElementById('registerTab').classList.remove('active');

    // Hide both forms
    document.getElementById('signinForm').classList.remove('active');
    document.getElementById('registerForm').classList.remove('active');

    // Show selected form and tab
    if (tab === 'signin') {
      document.getElementById('signInTab').classList.add('active');
      document.getElementById('signinForm').classList.add('active');
    } else {
      document.getElementById('registerTab').classList.add('active');
      document.getElementById('registerForm').classList.add('active');
    }
  }