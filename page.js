const message = document.querySelector('#message')
messageName = localStorage.getItem('name')
message.textContent = `Welcome ${messageName}. Your attendance has been registered`

const submit = document.querySelector('#submit')

submit.addEventListener('click', e => {
  e.preventDefault()

  localStorage.removeItem('email')
  localStorage.removeItem('password')
  localStorage.removeItem('name')

  window.location = 'index.html'
})