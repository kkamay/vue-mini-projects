import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    // INITIALIZE FIREBASE CONFIG OBJECT HERE BEFORE USING THE REPO
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFirestore, timestamp, projectAuth }