// Import the Firebase SDK
import { firebase } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

// Initialize the Firebase app with your project credentials
firebase.initializeApp({
    apiKey: "AIzaSyAd9VB2QGw70kU2i0sxqVcZwHnBVa4MqEE",
    authDomain: "comparemysupplies-2ef7e.firebaseapp.com",
    projectId: "comparemysupplies-2ef7e",
    storageBucket: "comparemysupplies-2ef7e.appspot.com",
    messagingSenderId: "784827005574",
    appId: "1:784827005574:web:2f8b800ca8d2f260836f07",
    measurementId: "G-77Z1F88B29"
  });

const db = getFirestore(firebase);


const generateToken = (key) => {
  // Remain the same
}

const compareToken = (token, key) => {
  // Remain the same
}

const signUpForm = document.getElementById('signup-form');
  const signUpName = document.getElementById('signup-name');
  const signUpEmail = document.getElementById('signup-email');
  const signUpPassword = document.getElementById('signup-password');

  signUpForm.addEventListener('submit', (event) => {


    const name = signUpName.value.trim();
    const email = signUpEmail.value.trim();
    const password = signUpPassword.value.trim();

    if (name === '' || email === '' || password === '') {
      showAlert('Please fill in all fields');
      return;
    }

    signUpWithEmailAndPassword(email, password, name);
  });



const processData = (data) => {
    loader.style.display = null;
    if (data.alert) {
      showAlert(data.alert);
    } else if (data.name) {
      // Create authToken
      data.authToken = generateToken(data.email);
      // Store user data in Firestore
      db.collection('users').add(data)
        .then((docRef) => {
          sessionStorage.user = JSON.stringify({ ...data, uid: docRef.id });
          location.replace('/');
        })
        .catch((error) => {
          showAlert(error.message);
        });
    }
  };
  

const showAlert = (msg) => {
  // Remain the same
}

const signUpWithEmailAndPassword = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully, call processData with the user data
      processData(userCredential.user);
    })
    .catch((error) => {
      showAlert(error.message);
    });
};

const signInWithEmailAndPassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully, get the user data from Firestore
        db.collection('users').doc(userCredential.user.uid).get()
            .then((doc) => {
                if (doc.data()) {
                    // User data found, call processData with the user data
                    processData(doc.data());
                } else {
                    // User data not found, show an error message
                    showAlert('User data not found');
                }
            })
            .catch((error) => {
                showAlert(error.message);
            });

    })
    .catch((error) => {
      showAlert(error.message);
    });
};


