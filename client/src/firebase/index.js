/**
 * Firebase Login
 * Reactify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase 
const config = {
   apiKey: "AIzaSyDFb4n6xky8O6vf6nk8lS8SGSObw16Vpxw",
   authDomain: "mmquotes-38225.firebaseapp.com",
   databaseURL: "https://mmquotes-38225.firebaseio.com",
   projectId: "mmquotes-38225",
   storageBucket: "mmquotes-38225.appspot.com",
   messagingSenderId: "237890054688",
   appId: "1:237890054688:web:9efc946469e266b920aa45"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
   auth,
   googleAuthProvider,
   githubAuthProvider,
   facebookAuthProvider,
   twitterAuthProvider,
   database
};
