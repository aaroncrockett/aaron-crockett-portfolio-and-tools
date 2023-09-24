// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { connectFirestoreEmulator } from 'firebase/firestore';
// import { connectAuthEmulator } from 'firebase/auth';

import {
	PUBLIC_FB_API_KEY,
	PUBLIC_FB_AUTH_DOMAIN,
	PUBLIC_FB_PROJECT_ID,
	PUBLIC_FB_STORAGE_BUCKET,
	PUBLIC_FB_MESSAGING_SENDER_ID,
	PUBLIC_APP_ID,
	PUBLIC_MEASUREMENT_ID
} from '$env/static/public';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: PUBLIC_FB_API_KEY,
	authDomain: PUBLIC_FB_AUTH_DOMAIN,
	projectId: PUBLIC_FB_PROJECT_ID,
	storageBucket: PUBLIC_FB_STORAGE_BUCKET,
	messagingSenderId: PUBLIC_FB_MESSAGING_SENDER_ID,
	appId: PUBLIC_APP_ID,
	measurementId: PUBLIC_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const auth = getAuth(app);

// Connect to Firestore emulator
// connectFirestoreEmulator(firestore, 'localhost', 8080);

// Connect to Auth emulator
// connectAuthEmulator(auth, 'http://localhost:9099');

// Configure Firebase Storage emulator
// firebaseApp.options.storageBucket = 'localhost:9199';
