import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCd6RgfmGk1Blp0dfjwTeT8-YztQEvKOwc",
  authDomain: "netflix-clone-16ae4.firebaseapp.com",
  projectId: "netflix-clone-16ae4",
  storageBucket: "netflix-clone-16ae4.appspot.com",
  messagingSenderId: "319114706224",
  appId: "1:319114706224:web:4123f0902fc297c8f55cf5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;