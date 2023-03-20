import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHYIDeIGXnFf7LH8Fae3k5ytYzdSO2pF0",
  authDomain: "ifl-auction.firebaseapp.com",
  projectId: "ifl-auction",
  storageBucket: "ifl-auction.appspot.com",
  messagingSenderId: "802324506971",
  appId: "1:802324506971:web:752ecf7dd8b8efe048d27e",
  measurementId: "G-NME0DTRE54"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { auth, db };
