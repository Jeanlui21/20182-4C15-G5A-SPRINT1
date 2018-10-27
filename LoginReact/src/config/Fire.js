import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDgKpgsQGHBKK8aHQQK_0_wV03CtR184sY",
    authDomain: "twitteran-774fd.firebaseapp.com",
    databaseURL: "https://twitteran-774fd.firebaseio.com",
    projectId: "twitteran-774fd",
    storageBucket: "twitteran-774fd.appspot.com",
    messagingSenderId: "431826324118"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
