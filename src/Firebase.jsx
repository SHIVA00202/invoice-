
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKVHBkwaY4G8BwQYj7aQj-Eyj1hHNEoCY",
  authDomain: "invoice-2a8a6.firebaseapp.com",
  projectId: "invoice-2a8a6",
  storageBucket: "invoice-2a8a6.firebasestorage.app",
  messagingSenderId: "519706954785",
  appId: "1:519706954785:web:fa41379b6ecaf638c46760",
  measurementId: "G-PKTR1VW725"
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const storage=getStorage();