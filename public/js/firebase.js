// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import {
  getDatabase,
  set,
  ref,
  update
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd9VB2QGw70kU2i0sxqVcZwHnBVa4MqEE",
  authDomain: "comparemysupplies-2ef7e.firebaseapp.com",
  databaseURL: "https://comparemysupplies-2ef7e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "comparemysupplies-2ef7e",
  storageBucket: "comparemysupplies-2ef7e.appspot.com",
  messagingSenderId: "784827005574",
  appId: "1:784827005574:web:2f8b800ca8d2f260836f07",
  measurementId: "G-77Z1F88B29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);
var isLoggedIn;

if (typeof signUp !== 'undefined') {
  signUp.addEventListener('click', (e) => {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    var confirm_password = document.getElementById('confirm-pwd').value;
    var terms_checkbox = document.getElementById('terms-and-cond');

    // Validate input fields
    if (validate_email(email) == false) {
      showAlert('Must be a valid email');
      return;
      // Don't continue running the code
    }
    if (validate_password(password) == false || validate_password(confirm_password) == false) {
      showAlert('Password must be over 6 characters');
      return;
    }
    if (password != confirm_password) {
      showAlert('Passwords must match');
      return;
    }
    if (validate_field(name) == false) {
      showAlert('Please enter your full name');
      return;
    }
    if (terms_checkbox.checked == false) {
      showAlert('Please accept the terms and conditions');
      return;
    }
    //sign up user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ... user.uid
        set(ref(database, 'users/' + user.uid), {
          name: name,
          email: email,
          last_login: new Date(Date.now()).toString(),
        })
          .then(() => {
            // Data saved successfully!
            sendEmailVerification(auth.currentUser)
              .then(() => {
                // Email verification sent!
                // ...
              });
            isLoggedIn = true;
            window.location.replace("/home?success=signup");
          })
          .catch((error) => {
            // The write failed...
            showAlert(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorMessage == "Firebase: Error (auth/email-already-in-use).") {
          showAlert("Email already in use");
        }
      });

  });
}

if (typeof signIn !== 'undefined') {
  signIn.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;


    // Validate input fields
    if (validate_email(email) == false) {
      showAlert('Must be a valid email');
      return;
      // Don't continue running the code
    }
    if (validate_password(password) == false) {
      showAlert('Password must be over 6 characters');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        // save log in details into real time database
        var lgDate = new Date();
        update(ref(database, 'users/' + user.uid), {
          last_login: lgDate,
        })
          .then(() => {
            // Data saved successfully!
            isLoggedIn = true;
            window.location.replace("/home?success=signin");
          })
          .catch((error) => {
            if (errorMessage == "Firebase: Error (auth/user-not-found).") {
              showAlert("User not found");
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage == "Firebase: Error (auth/user-not-found).") {
          showAlert("User not found");
        }
      });


  });
}

if (typeof newsSubmit !== 'undefined') {
  newsSubmit.addEventListener('click', (e) => {
    var email = document.getElementById('news-form').value;
    set(ref(database, 'users/' + email.replaceAll(".", "")), {
      email: email,
      last_login: new Date(Date.now()).toString(),
    })
      .then(() => {
        // Data saved successfully!
        isLoggedIn = true;
        alert("Success");
        window.location.replace("/home");
      })
      .catch((error) => {
        alert("Unsuccessful " + error.message);
      })
  })
}

function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
};


function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
};


function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
};

function showAlert(message) {
  const alertBox = document.querySelector('.alert-box');
  const msg = alertBox.querySelector('.alert-msg');

  msg.textContent = message;
  alertBox.classList.add('show');

  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 2500);
}







