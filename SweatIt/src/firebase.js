import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCt8VnDKJN6FssJZJqEeA8VYodGQl5BtVE",
  authDomain: "workout-journal-ez96.firebaseapp.com",
  databaseURL: "https://workout-journal-ez96.firebaseio.com",
  storageBucket: "workout-journal-ez96.appspot.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
