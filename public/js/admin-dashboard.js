// public/js/admin-dashboard.js
import { addCourse, addEvent, addTestimonial } from "./admin-firestore.js";

/* COURSE */
document.getElementById("course-form").addEventListener("submit", async e => {
  e.preventDefault();
  await addCourse({
    title: c-title.value,
    category: c-category.value,
    creator: c-creator.value,
    platform: c-platform.value,
    rating: Number(c-rating.value),
    price: c-price.value,
    image: c-image.value
  });
  alert("Course added");
  e.target.reset();
});

/* EVENT */
document.getElementById("event-form").addEventListener("submit", async e => {
  e.preventDefault();
  await addEvent({
    title: eTitle.value,
    category: eCategory.value,
    date: eDate.value,
    technologies: eTech.value,
    audience: eAudience.value,
    description: eDesc.value,
    link: eLink.value
  });
  alert("Event added");
  e.target.reset();
});

/* TESTIMONIAL */
document.getElementById("testimonial-form").addEventListener("submit", async e => {
  e.preventDefault();
  await addTestimonial({
    name: t-name.value,
    rating: Number(t-rating.value),
    message: t-msg.value,
    date: new Date().toISOString().split("T")[0]
  });
  alert("Testimonial added");
  e.target.reset();
});
