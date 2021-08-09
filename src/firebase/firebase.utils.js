import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSrcsoopzCh1Xq_rZOWB_MkY8-lucf9pE",
    authDomain: "clothing-ecommerce-98e03.firebaseapp.com",
    projectId: "clothing-ecommerce-98e03",
    storageBucket: "clothing-ecommerce-98e03.appspot.com",
    messagingSenderId: "642498838844",
    appId: "1:642498838844:web:71a96fd450763fd7f65e39",
    measurementId: "G-K1W8W15FTZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  