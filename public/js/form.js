// redirect to home page if user logged in
window.onload = () => {
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

// select inputs
const signupBtn = document.querySelector('.signup-btn');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const tac = document.querySelector('#terms-and-cond');

signupBtn.addEventListener('click', () => {
    if(!email.value.length){
        showAlert('Email is required');
    } else if(password.value.length < 6){
        showAlert('Password must be more than 6 characters');
    } else if(!tac.checked){
        showAlert('You must agree to the terms and conditions to sign up');
    } else{
        // sumbit form
        loader.style.display = 'block';
        sendData('/signup', {
            email: email.value,
            password: password.value,
            tac: tac.checked
        })
    }
})

// send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    } else if(data.email){
        //create authToken
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

// alert function
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}