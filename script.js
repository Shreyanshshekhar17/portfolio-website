document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
    formMessage.classList.remove('hidden');
    return;
  }

  // Basic email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    formMessage.classList.remove('hidden');
    return;
  }

  // Placeholder for sending message (e.g., API call)
  // For demo, just show success message

  formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
  formMessage.style.color = 'green';
  formMessage.classList.remove('hidden');

  // Reset form
  this.reset();
});
