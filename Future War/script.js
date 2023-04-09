function toggleDarkMode() {
	var body = document.querySelector("body");
	var topnav = document.querySelector(".topnav");
	var aboutSections = document.querySelectorAll(".about");
	var projectsSection = document.querySelector(".projects");
	var buttons = document.querySelectorAll("button");

	body.classList.toggle("dark-mode");
	topnav.classList.toggle("dark-mode");
	projectsSection.classList.toggle("dark-mode");

	buttons.forEach(function (button) {
	  button.classList.toggle("dark-mode");
	});

	aboutSections.forEach(function (section) {
	  section.classList.toggle("dark-mode");
	});
  }