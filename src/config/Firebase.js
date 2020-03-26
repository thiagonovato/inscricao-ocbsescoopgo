import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoVYH5eeunKIPywWVOQFdtonNjnrEeM-Q",
  authDomain: "covid19-ocbsescoopgo.firebaseapp.com",
  databaseURL: "https://covid19-ocbsescoopgo.firebaseio.com",
  projectId: "covid19-ocbsescoopgo",
  storageBucket: "covid19-ocbsescoopgo.appspot.com",
  messagingSenderId: "833280003575",
  appId: "1:833280003575:web:4841b5d9e70e6bd87232f2",
  measurementId: "G-MEV89FF8G7"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
