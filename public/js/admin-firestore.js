// public/js/admin-firestore.js
import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* COURSES */
export async function addCourse(data) {
  await addDoc(collection(db, "courses"), {
    ...data,
    createdAt: serverTimestamp()
  });
}

/* EVENTS */
export async function addEvent(data) {
  await addDoc(collection(db, "events"), {
    ...data,
    createdAt: serverTimestamp()
  });
}

/* TESTIMONIALS */
export async function addTestimonial(data) {
  await addDoc(collection(db, "testimonials"), {
    ...data,
    createdAt: serverTimestamp()
  });
}
