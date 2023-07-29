

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


const collapsibles = document.getElementsByClassName("weekcollapsible");
const goalContainer = document.getElementById("goalContainer");
const goalText = document.getElementById("goalText");
const saveGoal = document.getElementById("saveGoal");
const calendar = document.getElementById("calendar");
const saved = document.getElementsByClassName("saved");
let selectedWeek = null;

function createCalendar() {
  const startDate = new Date(2023, 0, 1);
  while (startDate.getDay() !== 0) {
    startDate.setDate(startDate.getDate() - 1);
  }
  let weekCount = 1;
  while (startDate.getFullYear() <= 2023) {
    const weekDiv = document.createElement("div");
    weekDiv.textContent = `Week ${weekCount++}: ${startDate.toDateString()}`;
    weekDiv.style.cursor = "pointer";
    weekDiv.onclick = function () {
      selectedWeek = this.textContent;
      goalText.value = localStorage.getItem(selectedWeek) || "";
      goalContainer.style.display = "block";
     
    };
    calendar.appendChild(weekDiv);
    weekDiv.classList.add("style");

    startDate.setDate(startDate.getDate() + 7);
  }
}

for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

saveGoal.addEventListener("click", function () {
  if (selectedWeek) {
    localStorage.setItem(selectedWeek, goalText.value);
    saved.innerText = "Goal saved!";
    saved.innerHTML = "Goal saved!";
  }
});

createCalendar();
