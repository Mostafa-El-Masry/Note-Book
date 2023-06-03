//Selectors
const subsection = document.querySelectorAll(".subsection");
const subsection3 = document.querySelector(".subsection3");
const subsection4 = document.querySelector(".subsection4");
const subsection5 = document.querySelector(".subsection5");
const arrow = document.querySelector(".chevron-down-sharp");
const arrow2 = document.querySelector(".chevron-down-sharp2");
const arrow3 = document.querySelector(".chevron-down-sharp3");
const arrow4 = document.querySelector(".chevron-down-sharp4");
const arrow5 = document.querySelector(".chevron-down-sharp5");


//Event Listener
arrow.addEventListener("click", Collapse);
arrow3.addEventListener("click", Collapse3)
arrow4.addEventListener("click", Collapse4)
arrow5.addEventListener("click", Collapse5)


//functions 
function Collapse() {
    for (let i = 0; i <= subsection.length; i++) {
        if (subsection[i].style.display === "none") {
            subsection[i].style.display = "block";
        }
        else {
            subsection[i].style.display = "none";
        }
    }
};
function Collapse3() {
    if (subsection3.style.display === "none") {
        subsection3.style.display = "flex";
    }
    else {
        subsection3.style.display = "none";
    }

};
function Collapse4() {
    if (subsection4.style.display === "none") {
        subsection4.style.display = "block";
    }
    else {
        subsection4.style.display = "none";
    }

};
function Collapse5() {
    if (subsection5.style.display === "none") {
        subsection5.style.display = "flex";
    }
    else {
        subsection5.style.display = "none";
    }

};