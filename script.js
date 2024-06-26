document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
});

document.getElementById('signup-button').addEventListener('click', function(event) {
    event.preventDefault();

    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        vendorname: document.getElementById('vendorname').value,
        contactnumber: document.getElementById('contactnumber').value
    };

    fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const notification = document.getElementById('notification');
        if (data.created) {
            notification.textContent = `Registration successful! Welcome, ${data.user.fullname}.`;
            notification.className = 'notification success';
        } else {
            notification.textContent = 'Registration failed. Please try again.';
            notification.className = 'notification error';
        }
        notification.style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
        const notification = document.getElementById('notification');
        notification.textContent = 'Registration failed. Please try again.';
        notification.className = 'notification error';
        notification.style.display = 'block';
    });
});
