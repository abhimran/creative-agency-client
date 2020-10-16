import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './config.firebase';

export const initilizeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}
const Googleprovider = new firebase.auth.GoogleAuthProvider();
const setUserTOken = () =>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token', idToken)
    }).catch(function(err) {
        console.log(err);
        console.log(err.message);
    });
}

export const handleGoogleSignIn = () => {
    return firebase.auth().signInWithPopup(Googleprovider)
        .then(res => {
            const {
                displayName,
                email,
                photoURL
            } = res.user;
            const signInUser = {
                isSignin: true,
                email: email,
                name: displayName,
                photo: photoURL,
                success: true,
            }
           setUserTOken();
            return signInUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignin: false,
                email: '',
                name: '',
                photo: '',
            }
            return signOutUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}