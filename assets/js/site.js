function syncToggleUI() {
  const toggleBtn = document.getElementById("darkModeToggle");
  if (!toggleBtn) return;

  const icon = toggleBtn.querySelector("i");
  const label = toggleBtn.querySelector("span");
  const isDark = document.body.classList.contains("dark-mode");

  if (isDark) {
    icon.classList.replace("fa-sun", "fa-moon");
    label.textContent = "LIGHT";
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
    label.textContent = "DARK";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme") || "dark";
  document.body.classList.toggle("dark-mode", savedMode === "dark");
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest("#darkModeToggle");
  if (!btn) return;

  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  syncToggleUI();
});

// when partials load, update the button UI once
window.addEventListener("partials:loaded", syncToggleUI);
