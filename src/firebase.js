let firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAjLF_Q7MKFGFpOmxvkCQDxS3fjUXwoFpc",
    authDomain: "mlproject-bef8f.firebaseapp.com",
    databaseURL: "https://mlproject-bef8f.firebaseio.com",
    projectId: "mlproject-bef8f",
    storageBucket: "mlproject-bef8f.appspot.com",
    messagingSenderId: "719085360339",
    appId: "1:719085360339:web:4aaf8aec7d0a2395247026",
    measurementId: "G-L9Q97R2M7N"
};
export const myFirebase = firebase.initializeApp(firebaseConfig);
