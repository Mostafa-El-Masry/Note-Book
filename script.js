//Selectors
const subsections = document.querySelectorAll(".subsection");
const buttons = document.querySelectorAll(".fa-chevron-down");
const weeks = document.querySelectorAll(".week");
const months = document.querySelectorAll(".month");
const submit = document.querySelector("#button-addon2");
const input = document.querySelector(".form-control");
const plist = document.querySelector(".p-list");
const monthlySaving = document.querySelector('.Saving');
const monthlyExpenses = document.querySelector('.Expenses');
//Event Listener
for (subsection of subsections) {
    subsection.style.display = "none";
}


document.addEventListener("DOMContentLoaded", getpasswords);


submit.addEventListener('click', function (event) {
    event.preventDefault();

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
   
    //Save to local - do this last
    //Save to local
    saveLocalpasswords(input.value);
    // creating a button and apending it to div 
    const deleteBut = document.createElement("button");
    deleteBut.classList.add("delete-But");
    deleteBut.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
    pdiv.appendChild(deleteBut);
    
    deleteBut.addEventListener('click', function deleteBut (e){
      e.stopPropagation();
      const item = e.target;
      const password = item.parentElement 
      password.classList.add("fall");
      removeLocalpasswords(password);
      password.addEventListener('transitionend', function(){  
        password.remove();
      })
    });

    input.value = "";
}
});



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

function savingNexpenses () {
  monthlySaving.innerText =   (350 * 0.6);
  monthlyExpenses.innerText = (350 * 0.4);
 };
 savingNexpenses();
// //local storage
// // ADDING A PASSWORD TO LOCAL STORAGE
  function saveLocalpasswords(password) {
    let passwords;
      if (localStorage.getItem("passwords") === null) {
        passwords= [];
      } else {
        passwords = JSON.parse(localStorage.getItem("passwords"));
      }
      passwords.push(password);
      localStorage.setItem("passwords", JSON.stringify(passwords));
    }

// // REMOVING A PASSWORD FROM LOCAL STORAGE

  function removeLocalpasswords(password) {
    let passwords;
    if (localStorage.getItem("passwords") === null) {
      passwords = [];
    } else {
      passwords = JSON.parse(localStorage.getItem("passwords"));
    }
    const passwordIndex = password.children[0].innerText;
    passwords.splice(passwords.indexOf(passwordIndex), 1);
    localStorage.setItem("passwords", JSON.stringify(passwords));
  }

  // geting back LOCAL STORAGE passwords
  function getpasswords() {

    let passwords;

    if (localStorage.getItem("passwords") === null) {
      passwords = [];
    } else {
      passwords = JSON.parse(localStorage.getItem("passwords"));
    }
       
    passwords.forEach(function(password) {
        //creating div and appending it to ul
        const pdiv = document.createElement("div");
        plist.appendChild(pdiv);
        //adding class to it
        pdiv.classList.add("Password");

        // creating li and appending it to div
        const pli = document.createElement("li");
        pli.classList.add("p-li");
        pdiv.appendChild(pli);
        pli.innerText = password;
      
        // creating a button and apending it to div 
        const deleteBut = document.createElement("button");
        deleteBut.classList.add("delete-But");
        deleteBut.innerHTML = '<i class="fa-solid fa-square-minus"></i>';
        pdiv.appendChild(deleteBut);

        deleteBut.addEventListener('click', function deleteBut (e){
          e.stopPropagation();
          const item = e.target;
          const password = item.parentElement;
          password.classList.add("fall");
          removeLocalpasswords(password);
          password.addEventListener('transitionend', function () {
            password.remove();              
          })
      });
    });
  };

 


