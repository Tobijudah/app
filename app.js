const submit = document.querySelector('#submit')

submit.addEventListener('click', e => {
  e.preventDefault()

  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const name = document.querySelector('#name').value

  if (email == '' || name == '' || password == '') {
    alert('fill out all fields')
    return
  }

  localStorage.setItem('email', email)
  localStorage.setItem('password', password)
  localStorage.setItem('name', name)

  window.location = 'page.html'
})


