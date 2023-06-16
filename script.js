//Selectors
const subsections = document.querySelectorAll(".subsection");
const buttons = document.querySelectorAll(".chevron-down-sharp");
const weeks = document.querySelectorAll(".week");
const months = document.querySelectorAll(".month");
const submit = document.querySelector("#button-addon2");
const input = document.querySelector(".form-control");
const plist = document.querySelector(".p-list");
// //Event Listener
// for (subsection of subsections) {
//     subsection.style.display = "none";
// }

submit.addEventListener('click', function (event) {
    event.preventDefault();
    if (input.value !== ""){
    const pul = document.createElement("ul");
    const pdiv = document.createElement("div");
    pdiv.classList.add("Password", "d-flex");
    const pli = document.createElement("li");
    pli.classList.add("p-li");
    pli.innerText = input.value;
    const button = document.createElement("button");
    button.innerHTML = '<i class="fa-solid fa-ballot-check"></i>';
    const button2 = document.createElement("button");
    button2.innerHTML = '<i class="fa-solid fa-broom-wide"></i>';
    pdiv.appendChild(pli);
    pdiv.appendChild(button);
    pdiv.appendChild(button2);
    plist.appendChild(pdiv);
    input.value = "";
}
});






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
 // Functions 


//local storage
