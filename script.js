//Selectors
const subsections = document.querySelectorAll(".subsection");
const buttons = document.querySelectorAll(".chevron-down-sharp");



//Event Listener


//loops
for (i of buttons) {
    i.addEventListener('click', function(){
        for (subsection of subsections) {
            let target = this.parentElement.nextElementSibling;
            if (target.style.display === "none") {
                target.style.display = "";
                target.classList.add("display");
                console.log("condition one");
                return;
            }
            else {
                target.style.display = "none";
                console.log("condition two");
                return;
            }
        }
    });
}