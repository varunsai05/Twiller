// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDBhyWfeNtHJwffrG2DmkgzJMC9KKw_rMM",
  authDomain: "twiller-varun.firebaseapp.com",
  projectId: "twiller-varun",
  storageBucket: "twiller-varun.firebasestorage.app",
  messagingSenderId: "150773800117",
  appId: "1:150773800117:web:1f06c7ee8114895384f2fc",
  measurementId: "G-QVJT0QXYMN"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app