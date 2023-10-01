const input = document.getElementById('input')

const btnsTop = ['√','<','C']

const btnsMiddle = ['9','8','7','6','5','4','3','2','1','0']

const btnsBottom = ['+','-','*','/','^']

function createBtns (){

   for(i = 0;i<btnsTop.length;i++){
      const btnTop = document.createElement('div')
      btnTop.className = 'btns'
      btnTop.id = i+15
      btnTop.innerText = btnsTop[i]
      if(btnTop.id === '17'){
         btnTop.style.color = 'red'
      }
      input.appendChild(btnTop)
   }

   for(i = 0;i<btnsMiddle.length;i++){
      const btnMiddle = document.createElement('div')
      btnMiddle.className = 'btns'
      btnsTop.id = i+1
      btnMiddle.innerText = btnsMiddle[i]
      input.appendChild(btnMiddle)
   }
   for (i = 0;i<btnsBottom.length;i++){
      const btnBottom = document.createElement('div')
      btnBottom.className = 'btns'
      btnBottom.id = i+10
      btnBottom.innerText = btnsBottom[i]
      input.appendChild(btnBottom)
   }
}



createBtns()