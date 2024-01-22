const scriptURL = 'https://script.google.com/macros/s/AKfycbzT9WttKnoMCLBnDb8RYnYsxl5tZ3XBkYMQWAE6YQwlQMcZCcIJtM6SnZp_jzJYM9nnUg/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  const submissionDateInput = form.querySelector('#submission-date');
  const currentDate = new Date();
  submissionDateInput.value = currentDate.toISOString();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})