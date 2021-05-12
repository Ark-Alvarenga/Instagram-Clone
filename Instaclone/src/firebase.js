import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATCk98lXExWZxiw44LvebAtUi_8riGj0g",
    authDomain: "instagram-clone-3368c.firebaseapp.com",
    projectId: "instagram-clone-3368c",
    storageBucket: "instagram-clone-3368c.appspot.com",
    messagingSenderId: "203388339267",
    appId: "1:203388339267:web:2f146472e80cee0844c0f6",
    measurementId: "G-3RHV5B7WQD"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };