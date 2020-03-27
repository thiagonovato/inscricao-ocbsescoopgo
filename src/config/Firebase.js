import firebase from "firebase";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCoVYH5eeunKIPywWVOQFdtonNjnrEeM-Q",
  authDomain: "covid19-ocbsescoopgo.firebaseapp.com",
  databaseURL: "https://covid19-ocbsescoopgo.firebaseio.com",
  projectId: "covid19-ocbsescoopgo",
  storageBucket: "covid19-ocbsescoopgo.appspot.com",
  messagingSenderId: "833280003575",
  appId: "1:833280003575:web:4841b5d9e70e6bd87232f2",
  measurementId: "G-MEV89FF8G7"
});

export const db = firebase.firestore();
export const auth = firebase.auth();
export const rsf = new ReduxSagaFirebase(app);
