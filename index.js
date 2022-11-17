let myscore =0
let compscore =0

let displayScore =document.getElementById('displayScore')
let myScore =document.getElementById('myScore')
let compScore =document.querySelector('#compScore')
let rondomChoice =document.getElementById('rondomChoice')
let myFirstChoice =document.getElementById('myFirstChoice')
let message =document.getElementById('message')
let mychoice =document.querySelectorAll('.myChoice')
let oneFinger =document.getElementById('one')
let twoFinger =document.getElementById('two')
let threeFinger =document.getElementById('three')
let fourFinger =document.getElementById('four')
let fiveFinger =document.getElementById('five')
let user=document.getElementById('user').value
let comp =document.getElementById('comp')
let btn =document.getElementById('btn')
let reserbtn =document.getElementById('resetbtn')
//let userInput =document.getElementById('userInput')
let attempts =document.getElementById("attempts")
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
const footerbtn =document.getElementById('footerbtn')
let intro =document.getElementById('intro')
const userInput =document.getElementById('userInput')
let name=document.getElementById('Name')
let animation =document.getElementById('animation')
let tk =document.getElementById('tk')
let gud =document.querySelector('.gud')
let attempt =1

function getCompNumber (){
    //const choices= ['one', 'two', 'three', 'four', 'five']
    const compNumber = (Math.floor(Math.random()*5))
    //return choices[compNumber]
}
const compFirstNumber = (Math.floor(Math.random()*5))

//======modal====
       
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
footerbtn.addEventListener('click', ()=>{
 modal.style.display = 'none';
 modalBtn.style.display = 'none';
 intro.style.display = 'none';
 gud.style.display='none'
 container.style.display = 'block'
 //let usernumber =userInput.value
 myFirstChoice.textContent =userInput.value
 const compFirstNumber=(Math.floor(Math.random()*5))
 rondomChoice.textContent=compFirstNumber
})

console.log(compFirstNumber)
// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}



//===game function====

function game(para){
    const compNumber = (Math.floor(Math.random()*5))
    //const compFirstNumber=(Math.floor(Math.random()*5))
    let input =userInput.value
    
    attempts.innerHTML=attempt
    
 
    console.log(compNumber)
    
    console.log(input)
 if(attempt<20){
    attempt ++
    if (compNumber + para ==input){
            myscore++
            myScore.innerText =myscore
            message.innerHTML=  "You Won the game!! 🔥"
            message.style.background.color = 'green' 
        function changeScr() {
            document.getElementById("tk").src='images/winner.webp';
          }
          changeScr()
          container.style.backgroundColor= 'green'
          function changeColor(){
            container.style.backgroundColor= 'rgb(25, 25, 68)';
          }
          
          setInterval(changeColor,100);
        
        } else if (compNumber + para ==compFirstNumber){
            compscore++
            compScore.innerText =compscore
            message.innerHTML=  "computer Won the game!!"
            function changeScr() {
                document.getElementById("tk").src='images/lose.gif';
              }
              changeScr()

              container.style.backgroundColor= 'red'
              function changeColor(){
                container.style.backgroundColor= 'rgb(25, 25, 68)';
              }
              
              setInterval(changeColor,100);
        }else{
            message.innerHTML ="draw"
            function changeScr() {
                document.getElementById("tk").src='images/Draw.gif';
              }
              changeScr()
           
        }

 }else {
    message.innerHTML ="Gave Over"
    message.style.color='red'
    if(myscore>compscore){
      window.alert(`You won computer by  ${myscore} : ${compscore}`);
    }else if(myscore < compscore){
      window.alert(`computer won You by  ${compscore}:${myscore}`);
    } else if (myscore = compscore){
      window.alert(`You scored the same ${myscore} : ${compscore}`);
    } else{
      window.alert(`you can play agaion`)
    }
    
    let btnReset = document.createElement("button");
    btnReset.setAttribute("class",'btnReset')
    btnReset.innerHTML = "Reset";
    animation.appendChild(btnReset);
    tk.innerHTML=btnReset
    tk.style.display ='none'
    btnReset.addEventListener('click', ()=>{
        window.location.reload();
    })
 }
}
   
    
    function main(){
    mychoice.forEach(function(myChoice) {
      myChoice.addEventListener('click', (e)=>{
        game(e.target.value)
      })
    });
     }
    main()
