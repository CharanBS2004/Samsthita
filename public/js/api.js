// public/js/api.js
import {
  collection,
  getDocs,
  query,
  limit as fbLimit,
  where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from "./firebase.js";

/**
 * Generic fetch function
 * @param {string} collectionName - courses | events | testimonials
 * @param {object} options - { limit, category }
 */
export async function getData(collectionName, options = {}) {
  let q = collection(db, collectionName);

  const conditions = [];

  if (options.category) {
    conditions.push(where("category", "==", options.category));
  }

  if (options.limit && options.limit !== "all") {
    conditions.push(fbLimit(options.limit));
  }

  if (conditions.length > 0) {
    q = query(q, ...conditions);
  }

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
