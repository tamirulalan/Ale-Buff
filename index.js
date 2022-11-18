// initializing Variables====
let myscore =0
let compscore =0
let attempt =1

   //getting DOM from HTML=====
let displayScore =document.getElementById('displayScore')
let myScore =document.getElementById('myScore')
let compScore =document.querySelector('#compScore')
let rondomChoice =document.getElementById('rondomChoice')
let myFirstChoice =document.getElementById('myFirstChoice')
let message =document.getElementById('message')
let mychoice =document.querySelectorAll('.myChoice')
let user=document.getElementById('user').value
let comp =document.getElementById('comp')
let btn =document.getElementById('btn')
let reserbtn =document.getElementById('resetbtn')
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


// ==== get the first ramdom number===
const compFirstNumber = (Math.floor(Math.random()*5))

//======modal====
let input =userInput.value
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
footerbtn.addEventListener('click', ()=>{
 modal.style.display = 'none';
 modalBtn.style.display = 'none';
 intro.style.display = 'none';
 gud.style.display='none'
 container.style.display = 'block'
 myFirstChoice.textContent =userInput.value
 rondomChoice.textContent=compFirstNumber
})


//===== Open modal function===
function openModal() {
  modal.style.display = 'block';
}

// =====Close button function====
function closeModal() {
  modal.style.display = 'none';
}

//=====winning function====
function win(){
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
}

//=====loosing function=====
function loose(){
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

}

// ===draw function====
function draw(){
  message.innerHTML ="draw"
  function changeScr() {
      document.getElementById("tk").src='images/Draw.gif';
    }
    changeScr()
   
}
//===game function====

function game(para){
    const compNumber = (Math.floor(Math.random()*5))
    let input =userInput.value
    attempts.innerHTML=attempt
    
  if(attempt<20){
      attempt ++
      if (compNumber + para ==input){
        win()
      } else if (compNumber + para ==compFirstNumber){
          loose()
      }else{
            draw()  
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
    
  //=====starting the game====
    function main(){
    mychoice.forEach(function(myChoice) {
      myChoice.addEventListener('click', (e)=>{
        const stlylist =e.currentTarget.classList
        if(stlylist.contains('one')){
          game(1)
        }else if (stlylist.contains('two')){
          game(2)
        }else if (stlylist.contains('three')){
          game(3)
        }else if (stlylist.contains('four')){
          game(4)
        }else {
          game(5)
        }
      })
    });
  }
    main()
    