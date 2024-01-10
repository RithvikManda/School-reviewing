import "firebase/firestore"

import { app } from 'firebase/app';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDdboFswbhpX7Of5vBlyvKEo6lK-HkvSfg",
    authDomain: "job-listing-c8233.firebaseapp.com",
    projectId: "job-listing-c8233",
    storageBucket: "job-listing-c8233.appspot.com",
    messagingSenderId: "190492914666",
    appId: "1:190492914666:web:d7760db8147ee94daf7893"
  };

  // Initialize Firebase
 const firebase=app.initializeApp(firebaseConfig)
 const firestore=firebase.firestore()

 export {firebase,firestore,app}