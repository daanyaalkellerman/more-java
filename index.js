
// // let driverLCNS = 18;
// // let learnerLCNS = 16;
// // let age = 15;

// // if(age>=driverLCNS){
// //     console.log('qualified for license')
// // }else {
// //     console.log('get older')
// // }
// // if(age>=learnerLCNS){
// //     console.log('qualified for learners')
// // }else{
// //     console.log('youre too young')
// // }

// // if (age>=18){
// //     console.log('you qualify for drivers')
// // } else if(age>=16){
// //     console.log('you qualify for learners')
// // }else{
// //     console.log('you dont qualify at all')
// // }

// document.getElementById('heading').innerText.textContent
// // get the text that the id is on
// document.getElementById('heading').innerHTML = 'change the content within'

// //innerhtml adding tags to the Element
// //innertext or textcontent to change the text
// // = overwrites
// // + adds words

// document.getElementsByClassName('para')
// //get the class text
// document.querySelectorAll('')
// //for everything with the same class or id
// document.querySelector("[]")
// // access everything attribute id class and elements
// // [] to get the data 
// document.querySelector('[data-numbers]').value
// //to get .value to get numbers

// let clickMe = document.querySelector('[data-clickMe]')
// clickMe.addEventListener('click',alertButton)

// function alertButton(){
//     alert('this was pushed')
// }

let btn = document.querySelector('[data-add]')
let display = document.querySelector('[data-answer]')
btn.addEventListener('click', add)
function add(){

    let first = document.querySelector('[data-first]').value
    let second = document.querySelector('[data-second]').value

    // let answer = +first + +second
let answer = eval(`${first} + ${second}`)
    // display.value = answer
    display.innerText = answer
    console.log(answer)
}