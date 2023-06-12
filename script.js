//Selectors
const subsections = document.querySelectorAll(".subsection");
const buttons = document.querySelectorAll(".chevron-down-sharp");
const weeks = document.querySelectorAll(".week");
const months = document.querySelectorAll(".month");



//Event Listener
for (subsection of subsections) {
    subsection.style.display = "none";
}

//loops

for (i of buttons) {
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
for (x of months) {
    x.addEventListener('click', function () {
        for (week of weeks) {
            let target2 = this.nextElementSibling;
            if (target2.style.display === "none") {
                target2.style.display = "";
                target2.classList.add("d-flex");
                return;
            }
            else {
                target2.style.display = "none";
                target2.classList.remove("d-flex");
                target2.classList.remove("d-block");
                return;
            }
        }
    });
}



//local storage
