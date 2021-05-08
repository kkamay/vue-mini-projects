import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWH6oyI_AXmLGg9QMtEfaTNV3G2FS2I3U",
    authDomain: "vue-authentication-ced80.firebaseapp.com",
    projectId: "vue-authentication-ced80",
    storageBucket: "vue-authentication-ced80.appspot.com",
    messagingSenderId: "11221135599",
    appId: "1:11221135599:web:9cd529caa4d9da02a8ab1a"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFirestore, timestamp, projectAuth }