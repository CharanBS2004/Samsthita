// public/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAyhoOC_YZ7fM6kNC510tJ59f8uDkp-3o",
  authDomain: "samsthita.firebaseapp.com",
  projectId: "samsthita",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
