import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhuAjJCQ9h6u55UiXxapdCnXjNeYbpLY0",
    authDomain: "firstreactfire.firebaseapp.com",
    databaseURL: "https://firstreactfire-default-rtdb.firebaseio.com",
    projectId: "firstreactfire",
    storageBucket: "firstreactfire.appspot.com",
    messagingSenderId: "912877644350",
    appId: "1:912877644350:web:65edbbaa3b3293d1e9ff6f"
  };

  export default firebase.initializeApp(firebaseConfig);