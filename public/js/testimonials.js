import { getData } from "./api.js";

function getStars(rating = 0) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars += `<i class="bi bi-star-fill"></i>`;
    else if (rating >= i - 0.5) stars += `<i class="bi bi-star-half"></i>`;
    else stars += `<i class="bi bi-star"></i>`;
  }
  return stars;
}

async function loadAllTestimonials() {
  const container = document.getElementById("all-testimonials");
  if (!container) return;

  const testimonials = await getData("testimonials", { limit: "all" });

  container.innerHTML = "";

  testimonials.forEach(t => {
    container.innerHTML += `
      <div class="col">
        <div class="d-flex flex-column py-4 px-2 border">

          <div class="d-flex align-items-center">
            <div class="rounded-circle border-primary border 
                        d-flex align-items-center justify-content-center"
                 style="width:48px;height:48px;">
              <i class="bi bi-person text-primary fs-3"></i>
            </div>
            <span class="ms-3 fw-bold">${t.name}</span>
          </div>

          <div class="d-flex justify-content-between my-3">
            <span>${t.date}</span>
            <div class="text-warning">
              ${getStars(t.rating)}
            </div>
          </div>

          <p class="text-center mt-3">
            ${t.message}
          </p>

        </div>
      </div>
    `;
  });
}

loadAllTestimonials();
