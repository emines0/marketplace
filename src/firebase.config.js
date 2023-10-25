import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyAD_qsm-wtLOin5xHc452J64XxrX8xm9Uo',
   authDomain: 'house-marketplace-app-8ff9c.firebaseapp.com',
   projectId: 'house-marketplace-app-8ff9c',
   storageBucket: 'house-marketplace-app-8ff9c.appspot.com',
   messagingSenderId: '655216632605',
   appId: '1:655216632605:web:fea2cfa9cfa513eafdb7f4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
