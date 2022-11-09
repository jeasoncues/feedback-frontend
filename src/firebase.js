
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Firebase credenciales 
const firebaseConfig = {
  apiKey: "AIzaSyDQ3Cbpq1o2Mqiqe6BqynVAlUVLHIBSRx4",
  authDomain: "feedback-7e7fb.firebaseapp.com",
  projectId: "feedback-7e7fb",
  storageBucket: "feedback-7e7fb.appspot.com",
  messagingSenderId: "733115608586",
  appId: "1:733115608586:web:60f3e744dfe102279779f3",
  measurementId: "G-1HV62P3PE5"
};

// Inicializar conexion
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app); // autenticar usuarios 