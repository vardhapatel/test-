const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-message').textContent = 'Thanks — we will be in touch soon.';
  form.reset();
});
