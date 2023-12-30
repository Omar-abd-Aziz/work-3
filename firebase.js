export const firebaseConfig = {
    apiKey: "AIzaSyDzfq5qaBuzhueJRLc8V8TF_ziBTOQ7ZJc",
    authDomain: "work-6cb7e.firebaseapp.com",
    projectId: "work-6cb7e",
    storageBucket: "work-6cb7e.appspot.com",
    messagingSenderId: "147200602519",
    appId: "1:147200602519:web:19f090a4ac28199cac54d2"
};
  
  
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getFirestore,getCountFromServer, collection, query, where, getDocs,getDoc, setDoc, addDoc, doc,deleteDoc,onSnapshot,orderBy, limit,startAt, startAfter,endAt } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
  
  
let docName = "work-doc-id";
  
export {docName,initializeApp,getFirestore,getCountFromServer, collection, query, where, getDocs,getDoc, setDoc, addDoc, doc,deleteDoc,onSnapshot,orderBy, limit,startAt, startAfter,endAt};
  
  