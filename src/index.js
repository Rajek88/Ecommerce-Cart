import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAP9aiyjcpaSILgNXbh61UUdidvpGhgvWQ',
    authDomain: 'ec-cart.firebaseapp.com',
    projectId: 'ec-cart',
    storageBucket: 'ec-cart.appspot.com',
    messagingSenderId: '742600826515',
    appId: '1:742600826515:web:bd37ff7f3713d7168a3766',
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
