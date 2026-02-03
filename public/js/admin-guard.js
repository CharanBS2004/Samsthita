if (sessionStorage.getItem("admin-auth") !== "true") {
  window.location.href = "./admin.html";
}

window.logoutAdmin = function () {
  sessionStorage.removeItem("admin-auth");
  window.location.href = "./admin.html";
};
