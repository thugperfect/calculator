const input = document.getElementById('input')
const inputField = document.getElementById('inp')
const btnsTop = ['=','<','C']

const btnsMiddle = ['1','2','3','4','5','6','7','8','9','0']

const btnsBottom = ['+','-','*','/','^']

function createBtns (){

   for(i = 0;i<btnsTop.length;i++){
      const btnTop = document.createElement('div')
      btnTop.className = 'btns'
      btnTop.id = i+16
      btnTop.innerText = btnsTop[i]
      if(btnTop.id === '18'){
         btnTop.style.color = 'red'
      }
      input.appendChild(btnTop)
   }

   for(i = 0;i<btnsMiddle.length;i++){
      const btnMiddle = document.createElement('div')
      btnMiddle.className = 'btns'
      btnMiddle.id = i+1
      btnMiddle.innerText = btnsMiddle[i]
      input.appendChild(btnMiddle)
   }
   for (i = 0;i<btnsBottom.length;i++){
      const btnBottom = document.createElement('div')
      btnBottom.className = 'btns'
      btnBottom.id = i+11
      btnBottom.innerText = btnsBottom[i]
      input.appendChild(btnBottom)
   }
}
function btnClick(){
   const btns = document.querySelectorAll('.btns')
   for(i =0;i<btns.length;i++){
      btns[i].addEventListener('click',clicked)
   }
}
function clicked(e){
const clickedBtn = Number(e.target.id)
const clickedSymbol = e.target.innerText
let val = inputField.value
if(clickedBtn === 18){
   val = ''
}
else if(clickedBtn === 16){
   val = eval(val)
}
else{
   val =val+ clickedSymbol
}

inputField.value = val

}

createBtns()
btnClick()