

// Selectors
const sections = document.querySelectorAll("h2");
const subsections = document.querySelectorAll(".subsection");
const buttons = document.querySelectorAll(".fa-chevron-down");

//Event Listener
for (subsection of subsections) {
  subsection.style.display = "none";
}

for (const i of buttons) {
  i.addEventListener('click', function () {
      for (subsection of subsections) {
          let target = this.parentElement.nextElementSibling;
          if (target.style.display === "none") {
              target.style.display = "";
              target.classList.add("d-flex");
              return;
          }
          else {
              target.style.display = "none";
              target.classList.remove("d-flex");
              return;
          }
      }
  });
}
