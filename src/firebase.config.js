import {getApp, getApps ,initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDb-hTRUSWJWEMOMfdvFnbewKq9wF2KcOo",
    authDomain: "cityapp-1faf6.firebaseapp.com",
    databaseURL: "https://cityapp-1faf6-default-rtdb.firebaseio.com",
    projectId: "cityapp-1faf6",
    storageBucket: "cityapp-1faf6.appspot.com",
    messagingSenderId: "981867958686",
    appId: "1:981867958686:web:a7d9498ff7fc456177468f"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  export { app, firestore, storage };