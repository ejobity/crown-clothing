// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt-2rheMi4qWZqoHM7v1YgzIVNygMFGrw",
  authDomain: "crwn-clothing-db-58656.firebaseapp.com",
  projectId: "crwn-clothing-db-58656",
  storageBucket: "crwn-clothing-db-58656.appspot.com",
  messagingSenderId: "51919047285",
  appId: "1:51919047285:web:ee8b25c6d51c039fe6063c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

}