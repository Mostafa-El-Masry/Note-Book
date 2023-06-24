//Selectors
const subsections = document.querySelectorAll(".subsection");
const buttons = document.querySelectorAll(".chevron-down-sharp");
const weeks = document.querySelectorAll(".week");
const months = document.querySelectorAll(".month");
const submit = document.querySelector("#button-addon2");
const input = document.querySelector(".form-control");

// //Event Listener
// for (subsection of subsections) {
//     subsection.style.display = "none";
// }

submit.addEventListener('click', function (event) {
    event.preventDefault();
    // gabing ul 
    const plist = document.querySelector(".p-list");
    
    if (input.value !== ""){
    //creating div and appending it to ul
    const pdiv = document.createElement("div");
    plist.appendChild(pdiv);
    //adding class to it
    pdiv.classList.add("Password");
    // creating li and appending it to div
    const pli = document.createElement("li");
    pli.classList.add("p-li");
    pdiv.appendChild(pli);
    pli.innerText = input.value;
   
    // creating a button and apending it to div 
    const deleteBut = document.createElement("button");
    deleteBut.classList.add("delete-But");
    deleteBut.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
    pdiv.appendChild(deleteBut);

    deleteBut.addEventListener('click', function (){
        plist.removeChild(pdiv);
    });

    // clearing input value
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
