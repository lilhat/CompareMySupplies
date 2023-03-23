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
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const tac = document.querySelector('#terms-and-cond') || null;

signupBtn.addEventListener('click', () => {
    if(!email.value.length || !password.value.length){
        showAlert('Please fill all the fields');
    } else{
    loader.style.display = 'block';
        sendData('/signin', {
            email: email.value,
            password: password.value
        });
    }

    if(name != null){
        if(!name.value.length){
            showAlert('Name is required');
        } else if(!email.value.length){
            showAlert('Email is required');
        } else if(password.value.length < 6){
            showAlert('Password must be more than 6 characters');
        } else if(!tac.checked){
            showAlert('You must agree to the terms and conditions to sign up');
        } else{
            // sumbit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: name.value,
                email: email.value,
                password: password.value,
                tac: tac.checked
            });
        }
    } else{
        // login page
        if(!email.value.length || !password.value.length){
            showAlert('Please fill all the fields');
        } else{
            loader.style.display = 'block';
            sendData('/signin', {
                email: email.value,
                password: password.value
            });
        }
    }

})