import * as React from 'react'; 
import { View, Text, StyleSheet, Alert, Platform, Button } from 'react-native';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

//https://www.npmjs.com/package/firebase/v/8.10.1 
//https://www.npmjs.com/package/dotenv/v/10.0.0

const FireWeb = () =>{

  // require('dotenv').config();

  const firebaseConfig = {
  apiKey: "AIzaSyCT9VJWnoqqMxOJF5f-EnRIYtXZVa50s8g",
  authDomain: "appfires.firebaseapp.com",
  databaseURL: "https://appfires-default-rtdb.firebaseio.com",
  projectId: "appfires",
  storageBucket: "appfires.appspot.com",
  messagingSenderId: "339047102978",
  appId: "1:339047102978:web:adc0338f578b1e24d0c51b",
  measurementId: "G-2YX7HNCHE9"
};
  
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

  return(
    <View>
    <Text>OPS</Text>
        
    </View>
    );
}

export default FireWeb;
