
console.log("Welcome to GameZone Arena!");

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigating to: " + link.textContent);
  });
});
