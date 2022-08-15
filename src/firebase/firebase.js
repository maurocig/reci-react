import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD1VLJPcpLSmAPv_q1dn2xIHKysVRbm9ss",
	authDomain: "tonal-asset-268817.firebaseapp.com",
	projectId: "tonal-asset-268817",
	storageBucket: "tonal-asset-268817.appspot.com",
	messagingSenderId: "182550924958",
	appId: "1:182550924958:web:ac8af5ce71ff06934bf58f",
	measurementId: "G-67EQ9RB8QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);