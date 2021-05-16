import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCSn7f7WqSHPTcZYawPiAu-WT10qrL4JI0",
  authDomain: "slackcomponents.firebaseapp.com",
  projectId: "slackcomponents",
  storageBucket: "slackcomponents.appspot.com",
  messagingSenderId: "1088589199004",
  appId: "1:1088589199004:web:1a42c666fcbdcdc7551f59"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };