import * as firebase from 'firebase';
import { AppRegistry } from 'react-native';
import App from './App';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCt8VnDKJN6FssJZJqEeA8VYodGQl5BtVE",
  authDomain: "workout-journal-ez96.firebaseapp.com",
  databaseURL: "https://workout-journal-ez96.firebaseio.com",
  storageBucket: "workout-journal-ez96.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent('SweatIt', () => App);
