const ADMIN_PASSWORD = "123";

window.loginAdmin = function () {
  const input = document.getElementById("admin-password").value;
  const error = document.getElementById("error-msg");

  if (input === ADMIN_PASSWORD) {
    sessionStorage.setItem("admin-auth", "true");
    window.location.href = "./admin-dashboard.html";
  } else {
    error.textContent = "Invalid password ❌";
  }
};
