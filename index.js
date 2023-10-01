const input = document.getElementById("input");
const inputField = document.getElementById("inp");
const btnsTop = ["=", "<", "C"];
const btnsMiddle = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnsBottom = ["+", "-", "*", "/", "^"];
function createBtns() {
  for (i = 0; i < btnsTop.length; i++) {
    const btnTop = document.createElement("div");
    btnTop.className = "btns";
    btnTop.id = i + 16;
    btnTop.innerText = btnsTop[i];
    if (btnTop.id === "18") {
      btnTop.style.color = "red";
    }
    input.appendChild(btnTop);
  }
  for (i = 0; i < btnsMiddle.length; i++) {
    const btnMiddle = document.createElement("div");
    btnMiddle.className = "btns";
    btnMiddle.id = i + 1;
    btnMiddle.innerText = btnsMiddle[i];
    input.appendChild(btnMiddle);
  }
  for (i = 0; i < btnsBottom.length; i++) {
    const btnBottom = document.createElement("div");
    btnBottom.className = "btns";
    btnBottom.id = i + 11;
    btnBottom.innerText = btnsBottom[i];
    input.appendChild(btnBottom);
  }
}
document.addEventListener("keydown", () => {
  if (event.keyCode === 13) {
    if (inputField.value !== "") {
      inputField.value = eval(inputField.value);
    }
  }
});
function btnClick() {
  const btns = document.querySelectorAll(".btns");
  for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", clicked);
  }
}
function clicked(e) {
  const clickedBtn = Number(e.target.id);
  const clickedSymbol = e.target.innerText;

  if (clickedBtn === 18) {
    inputField.value = "";
  } else if (clickedBtn === 16) {
    inputField.value = eval(inputField.value);
  } else if (clickedBtn === 17) {
    let val = inputField.value;
    inputField.value = val.slice(0, val.length - 1);
  } else {
    inputField.value += clickedSymbol;
  }
}
createBtns();
btnClick();
