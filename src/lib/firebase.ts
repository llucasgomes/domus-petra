// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'domus-f7f49.firebaseapp.com',
  projectId: 'domus-f7f49',
  storageBucket: 'domus-f7f49.appspot.com',
  messagingSenderId: '402350293667',
  appId: '1:402350293667:web:be956d0a73f45903bcb516'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
