import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  const config = {
    apiKey: "AIzaSyDgKpgsQGHBKK8aHQQK_0_wV03CtR184sY",
    authDomain: "twitteran-774fd.firebaseapp.com",
    databaseURL: "https://twitteran-774fd.firebaseio.com",
    projectId: "twitteran-774fd",
    storageBucket: "twitteran-774fd.appspot.com",
    messagingSenderId: "431826324118"
  };

  firebase.initializeApp(config);

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
