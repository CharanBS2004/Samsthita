import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* =======================
   COURSES
======================= */
const courseForm = document.getElementById("course-form");

if (courseForm) {
  courseForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "courses"), {
        title: document.getElementById("c-title").value,
        category: document.getElementById("c-category").value,
        creator: document.getElementById("c-creator").value,
        platform: document.getElementById("c-platform").value,
        rating: Number(document.getElementById("c-rating").value) || 0,
        price: document.getElementById("c-price").value,
        image: document.getElementById("c-image").value,
        createdAt: serverTimestamp()
      });

      alert("✅ Course added");
      courseForm.reset();
    } catch (err) {
      alert("❌ Failed to add course");
      console.error(err);
    }
  });
}

/* =======================
   EVENTS
======================= */
const eventForm = document.getElementById("event-form");

if (eventForm) {
  eventForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "events"), {
        title: document.getElementById("e-title").value,
        category: document.getElementById("e-category").value,
        date: document.getElementById("e-date").value,
        audience: document.getElementById("e-audience").value,
        description: document.getElementById("e-desc").value,
        createdAt: serverTimestamp()
      });

      alert("✅ Event added");
      eventForm.reset();
    } catch (err) {
      alert("❌ Failed to add event");
      console.error(err);
    }
  });
}

/* =======================
   TESTIMONIALS
======================= */
const testimonialForm = document.getElementById("testimonial-form");

if (testimonialForm) {
  testimonialForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "testimonials"), {
        name: document.getElementById("t-name").value,
        rating: Number(document.getElementById("t-rating").value) || 0,
        message: document.getElementById("t-message").value,
        date: new Date().toLocaleDateString(),
        createdAt: serverTimestamp()
      });

      alert("✅ Testimonial added");
      testimonialForm.reset();
    } catch (err) {
      alert("❌ Failed to add testimonial");
      console.error(err);
    }
  });
}

/* =======================
   CONTACTS (READ ONLY)
======================= */
async function loadContacts() {
  const table = document.getElementById("contacts-table");
  if (!table) return;

  table.innerHTML = "";

  try {
    const snapshot = await getDocs(collection(db, "contacts"));

    snapshot.forEach(doc => {
      const c = doc.data();

      table.innerHTML += `
        <tr>
          <td>${c.name || "-"}</td>
          <td>${c.email || "-"}</td>
          <td>${c.message || "-"}</td>
          <td>${c.date || "-"}</td>
        </tr>
      `;
    });
  } catch (err) {
    console.error("Failed to load contacts", err);
  }
}

loadContacts();
