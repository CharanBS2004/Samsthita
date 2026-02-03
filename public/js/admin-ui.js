function showSection(name) {
  document.getElementById("courses-section").classList.add("d-none");
  document.getElementById("events-section").classList.add("d-none");
  document.getElementById("testimonials-section").classList.add("d-none");
  document.getElementById("contacts-section").classList.add("d-none");

  document.getElementById(name + "-section").classList.remove("d-none");

  document.querySelectorAll(".list-group-item").forEach(btn =>
    btn.classList.remove("active")
  );

  event.target.classList.add("active");
}
