// /*
// 		Designed by: SELECTO
// 		Original image: https://dribbble.com/shots/5311359-Diprella-Login
// */

// let switchCtn = document.querySelector("#switch-cnt");
// let switchC1 = document.querySelector("#switch-c1");
// let switchC2 = document.querySelector("#switch-c2");
// let switchCircle = document.querySelectorAll(".switch__circle");
// let switchBtn = document.querySelectorAll(".switch-btn");
// let aContainer = document.querySelector("#a-container");
// let bContainer = document.querySelector("#b-container");
// let allButtons = document.querySelectorAll(".submit");

// let getButtons = (e) => e.preventDefault()

// let changeForm = (e) => {

//     switchCtn.classList.add("is-gx");
//     setTimeout(function(){
//         switchCtn.classList.remove("is-gx");
//     }, 1500)

//     switchCtn.classList.toggle("is-txr");
//     switchCircle[0].classList.toggle("is-txr");
//     switchCircle[1].classList.toggle("is-txr");

//     switchC1.classList.toggle("is-hidden");
//     switchC2.classList.toggle("is-hidden");
//     aContainer.classList.toggle("is-txl");
//     bContainer.classList.toggle("is-txl");
//     bContainer.classList.toggle("is-z200");
// }

// let mainF = (e) => {
//     for (var i = 0; i < allButtons.length; i++)
//         allButtons[i].addEventListener("click", getButtons );
//     for (var i = 0; i < switchBtn.length; i++)
//         switchBtn[i].addEventListener("click", changeForm)
// }

// window.addEventListener("load", mainF);



'strict'

//Query Selectors

const formSignUp=document.querySelector('#a-form');
const formSingIn=document.querySelector('#b-form');
const storageObject={}

const storageEnable = function () {
    localStorage.setItem("todolist", JSON.stringify(storageObject));
  };

//helper functions
const getInputs=function(form){
    const inputs=Array.from(form.querySelectorAll('.form__input'));
    const formInputobject={};
    inputs.map(i=>
        formInputobject[i.placeholder]=i.value)
        return formInputobject
}



//event listners

//Singup Form
formSignUp.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formInputs=getInputs(formSignUp)
    storageObject[formInputs.Email]=formInputs.Password;
}
)

//Toggle Form

