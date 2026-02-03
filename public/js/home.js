import { getData } from "./api.js";

/* ---------- Helpers ---------- */
function getStars(rating = 0) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars += `<i class="bi bi-star-fill"></i>`;
    else if (rating >= i - 0.5) stars += `<i class="bi bi-star-half"></i>`;
    else stars += `<i class="bi bi-star"></i>`;
  }
  return stars;
}

function sortByRatingDesc(items) {
  return items.sort((a, b) => (b.rating || 0) - (a.rating || 0));
}

function getPlatformLogo(platform) {
  return `
    <img src="./public/logos/${platform}"
         style="height:50px"
         alt="${platform}">
  `;
}

/* ---------- COURSES ---------- */
async function loadTopRatedCourses(containerId, limit = 3) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const courses = await getData("courses", { limit: "all" });
  const topCourses = sortByRatingDesc(courses).slice(0, limit);

  container.innerHTML = "";

  topCourses.forEach(course => {
    container.innerHTML += `
      <div class="col">
        <div class="d-flex flex-column py-4 border position-relative">
          <a href="${course.link || '#'}" class="stretched-link"></a>

          <span class="badge text-bg-primary ms-auto me-4">
            ${course.price}
          </span>

          <img src="${course.image}"
               class="img-fluid my-4 mx-auto d-block">

          <h4 class="text-center">${course.title}</h4>

          <span class="d-flex justify-content-center gap-2">
            ${getPlatformLogo(course.platform)}
            <span>@${course.creator}</span>
          </span>

          <div class="text-warning text-center">
            ${getStars(course.rating)}
          </div>
        </div>
      </div>
    `;
  });
}

/* ---------- EVENTS ---------- */
function getUpcomingEvents(events) {
  const today = new Date();
  return events
    .filter(e => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

async function loadUpcomingEvents(limit = 3) {
  const container = document.getElementById("upcoming-events");
  if (!container) return;

  const events = await getData("events", { limit: "all" });
  const upcoming = getUpcomingEvents(events).slice(0, limit);

  container.innerHTML = "";

  upcoming.forEach(event => {
    container.innerHTML += `
      <div class="col">
        <div class="d-flex flex-column bg-white py-4 px-2 border">
          <span class="badge text-bg-success ms-4">
            ${event.category.toUpperCase()}
          </span>

          <img src="${event.image}"
               class="img-fluid my-4 mx-auto d-block">

          <h4 class="text-center">${event.title}</h4>

          <p class="text-center">${event.description}</p>

          <span class="fw-bold text-end me-3">
            ${event.date}
          </span>
        </div>
      </div>
    `;
  });
}

/* ---------- TESTIMONIALS ---------- */
async function loadHomeTestimonials() {
  const container = document.getElementById("home-testimonials");
  if (!container) return;

  const testimonials = await getData("testimonials", { limit: 2 });
  container.innerHTML = "";

  testimonials.forEach(t => {
    container.innerHTML += `
      <div class="col">
        <div class="d-flex flex-column py-4 px-2 border">

          <div class="d-flex align-items-center">
            <div class="rounded-circle border-primary border
                        d-flex align-items-center justify-content-center"
                 style="width:48px;height:48px;">
              <i class="bi bi-person fs-3"></i>
            </div>
            <span class="ms-3 fw-bold">${t.name}</span>
          </div>

          <div class="d-flex justify-content-between my-3">
            <span>${t.date}</span>
            <div class="text-warning">${getStars(t.rating)}</div>
          </div>

          <p class="text-center">${t.message}</p>
        </div>
      </div>
    `;
  });
}

/* ---------- CALLS ---------- */
loadTopRatedCourses("top-rated-courses", 3);
loadUpcomingEvents(5);
loadHomeTestimonials();
