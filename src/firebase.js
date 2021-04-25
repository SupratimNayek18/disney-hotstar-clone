import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNky-ezqnWKyMEfGjw3vvPCpHjFbcR9RE",
  authDomain: "disney-hotstar-clone-605d6.firebaseapp.com",
  projectId: "disney-hotstar-clone-605d6",
  storageBucket: "disney-hotstar-clone-605d6.appspot.com",
  messagingSenderId: "1049013472967",
  appId: "1:1049013472967:web:026372b48cc2f6dd9478e2",
  measurementId: "G-5WS22RLCVJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
