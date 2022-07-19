import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCKOOGhwjizpUfuPz_mszSSg3Mg8orfCF4',
  authDomain: 'maglo-financial-app.firebaseapp.com',
  projectId: 'maglo-financial-app',
  storageBucket: 'maglo-financial-app.appspot.com',
  messagingSenderId: '850996989984',
  appId: '1:850996989984:web:a277639e685086763c6c45',
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth();
