
const form = document.getElementById('contact-form')
const successMessage = document.getElementById('success-message')

form.addEventListener('submit', async function (event) {
  event.preventDefault()

  const formData = new FormData(form)
  const action = form.action

  try {
    const response = await fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      form.reset()
      successMessage.style.display = 'block'
    } else {
      alert('There was a problem submitting the form.')
    }
  } catch (error) {
    alert('Network error. Please try again.')
  }
})
