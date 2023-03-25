// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import {
    getAuth,
    deleteUser,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import {
    getDatabase,
    set,
    ref,
    onValue,
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


auth.onAuthStateChanged((user) => {
    if (user) {

        const databaseRef = ref(database, '/users/' + user.uid);
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            const name = data.name;
            const email = data.email;
            const nameElement = document.querySelector('#name');
            nameElement.value = name;
            const emailElement = document.querySelector('#email');
            emailElement.value = email
            const deleteButton = document.querySelector('#delete-btn');
            deleteButton.addEventListener('click', () => {
                deleteUser(user).then(() => {
                    location.href='/home?success=delete';
                  }).catch((error) => {
                    alert(error);
                  });
            })
        });

    }
});


