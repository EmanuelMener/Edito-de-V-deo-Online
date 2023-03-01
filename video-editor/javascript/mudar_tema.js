const page = document.getElementById("page");
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
  if (page.classList.contains("dark-theme")) {
    // Se a classe "dark-theme" estiver presente, remova-a e adicione a classe "light-theme"
    page.classList.remove("dark-theme");
    page.classList.add("light-theme");
  } else {
    // Caso contrário, remova a classe "light-theme" e adicione a classe "dark-theme"
    page.classList.remove("light-theme");
    page.classList.add("dark-theme");
  }
});

