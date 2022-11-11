let myscore =0
let compscore =0
let displayScore =document.getElementById('displayScore')
let myScore =document.getElementById('myScore')
let compScore =document.querySelector('#compScore')
let rondomChoice =document.getElementById('rondomChoice')
let myFirstChoice =document.getElementById('myFirstChoice')
let message =document.getElementById('message')
let mychoice =document.getElementById('myChoice')
let oneFinger =document.getElementById('one')
let twoFinger =document.getElementById('two')
let threeFinger =document.getElementById('three')
let fourFinger =document.getElementById('four')
let fiveFinger =document.getElementById('five')
let user=document.getElementById('user').value
let comp =document.getElementById('comp')
let btn =document.getElementById('btn')
let reserbtn =document.getElementById('resetbtn')


function getCompNumber (){
    const choices= ['one', 'two', 'three', 'four', 'five']
    const compNumber = (Math.floor(Math.random()*5))
    return choices[compNumber]
}


function game(para){
let computerChoice = getCompNumber();
if (computerChoice==para){
    myscore++
    myScore.innerText =myscore
    message.innerHTML=  "You Won the game!! 🔥"
   choices.style.display.color = 'green' 
} else {
    compscore++
    compScore.innerText =compscore
    message.innerHTML=  "computer Won the game!!"
}
}

function main(){

oneFinger.addEventListener('click', ()=>{
    game ('one')
})
fiveFinger.addEventListener('click', ()=>{
    game('five')
})
twoFinger.addEventListener('click', ()=>{
    game('two')
})
fourFinger.addEventListener('click', ()=>{
   game('four')
})
threeFinger.addEventListener('click', ()=>{
    game('three')
 })
}
main()
