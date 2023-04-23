const subsection = document.querySelectorAll(".subsection");
const section = document.querySelectorAll(".section");
const colapsable = document.querySelectorAll(".colapsable");


 
    let i = 0;
    for (let i=0; i <= colapsable.length; i++){ 
        colapsable[i].addEventListener("click", function {
            const content  = this.nextElementSibling;
            if (content.style.display == "block"){
                            content.style.display = "none";
                        } else {
                            content.style.display = "block";
                        }})}