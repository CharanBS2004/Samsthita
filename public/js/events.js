// public/js/events.js
import { getData } from "./api.js";

async function loadCategoryEvents(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const events = await getData("events", { category });

  container.innerHTML = "";

  events.forEach(event => {
    container.innerHTML += `
      <div class="col">
        <div class="d-flex flex-column bg-white py-4 px-2 border position-relative">

          <a href="${event.link || '#'}" class="stretched-link"></a>

          <span class="badge text-bg-success py-2 px-2 me-auto ms-4">
            ${event.category.toUpperCase()}
          </span>

          <img src="${event.image || './public/placeholders/event.png'}"
               class="img-fluid my-4 mx-auto d-block"
               alt="${event.title}">

          <h4 class="text-center">${event.title}</h4>

          <span class="d-flex ms-3 align-items-center gap-2">
            <i class="bi bi-code-slash text-primary fs-3"></i>
            <span class="fs-6">${event.technologies}</span>
          </span>

          <span class="d-flex ms-3 align-items-center gap-2">
            <i class="bi bi-person text-primary fs-3"></i>
            <span class="fs-6">${event.audience}</span>
          </span>

          <p class="text-center mt-3">
            ${event.description}
          </p>

          <span class="fs-6 text-end fw-bold me-3">
            ${event.date}
          </span>

        </div>
      </div>
    `;
  });
}

/* 🔥 CALLS (THIS IS REQUIRED) */
loadCategoryEvents("workshop", "workshop-events");
loadCategoryEvents("seminar", "seminar-events");
loadCategoryEvents("competition", "competition-events");

console.log("events.js loaded");
