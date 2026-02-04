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

async function loadAllCourses() {
  const courses = await getData("courses", { limit: "all" });

  const programming = document.getElementById("programming-courses");
  const web = document.getElementById("web-courses");
  const database = document.getElementById("database-courses");

  programming.innerHTML = "";
  web.innerHTML = "";
  database.innerHTML = "";

  courses.forEach(course => {
    const card = `
      <div class="col-6 col-sm-5 col-md-3 col-xl-2">
        <div class="d-flex flex-column py-4 border position-relative">

          <a href="${course.link || '#'}" class="stretched-link"></a>

          <span class="badge text-bg-primary py-2 px-4 ms-auto me-4">
            ${course.price || "FREE"}
          </span>

          <div class="course-img-wrapper mt-3">
  <img
    src="./public/logos/${course.image}.png"
    alt="${course.title}"
    class="course-img"
  >
</div>


          <h4 class="text-center">${course.title}</h4>

          <span class="d-flex align-items-center justify-content-center gap-2">
            <img src="./public/logos/${course.platform}.png"
                 style="height:32px"
                 alt="${course.platform}">
            <span class="fs-6">@${course.creator}</span>
          </span>

          <div class="text-warning text-center">
            ${getStars(course.rating)}
          </div>

        </div>
      </div>
    `;

    if (course.category === "programming") {
      programming.innerHTML += card;
    }

    if (course.category === "web") {
      web.innerHTML += card;
    }

    if (course.category === "database") {
      database.innerHTML += card;
    }
  });
}

loadAllCourses();
