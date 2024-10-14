let form = document.getElementById('login-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log('Form was submitted.')

    let formData = {
        'username': form.username.value,
        'password': form.password.value
    }

    fetch('http://127.0.0.1:8000/api/users/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })

        .then(response => response.json())
        .then(data => {
            console.log('DATA', data.access)
            if (data.access){
                localStorage.setItem('token', data.access)
                window.location = 'file:///C:/code/Developer-Platform/frontend/projects-list.html'
            }

            else {
                alert('Username OR Password did not work.')
            }
        })
})