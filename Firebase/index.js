import fb from "firebase/app";
//import "firebase/auth";
import firebase from "firebase";
import 'firebase/firestore';
import { firebaseConfig } from './config';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Firebaseのインスタンスが存在しない場合にのみ、インスタンスを作成
export const firebaseobj = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

//firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ experimentalForceLongPolling: true });

export const firestore = firebaseobj.firestore();

export default firebase
//export const db = firebase.firestore();
//export const collection = firebase.firestore();
//export const database = getFirestore(firebase);