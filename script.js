
let textBox = document.querySelector("#text-box")
let btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", (event) => {

  if (event.target.textContent != "RESET" &&
      event.target.textContent != "DEL" &&
      event.target.textContent != "=" &&
      event.target.tagName != "DIV") {
        textBox.value += event.target.textContent;
  }

  if (event.target.textContent == "RESET") {
    textBox.value = "";
  }
  
  if (event.target.textContent == "DEL") {
    let temporaryText = textBox.value;
    let array = temporaryText.split("");
    array.splice(-1, 1);
    textBox.value = array.join("");
  }
  
  if (event.target.textContent == "=") {
    textBox.value = calculate(textBox.value);
  }
})


let theme = 1;
let themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  let themeBtnChild = themeBtn.firstElementChild;
  
  if (theme == 1) {
    themeBtnChild.style.left = "23px";
    theme = 2;
  }
  else if (theme == 2) {
    themeBtnChild.style.left = "42px";
    theme = 3;
  }
  else if (theme == 3) {
    themeBtnChild.style.left = "4px";
    theme = 1;
  }
  
})



function calculate(value) {
  let arr = value.split("");
  let left = "" ;
  let right = "";
  let ope = "k";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "+" || arr[i] == "-" || arr[i] == "x" || arr[i] == "/") {
      ope = arr[i];
      i++;
    }

    if (ope == "k") {
      left += arr[i];
    } 
    else {
      right += arr[i];
    }
  }

  switch (ope) {
    case "+":
      return parseFloat(left) + parseFloat(right);
    case "-":
      return parseFloat(left) - parseFloat(right);
    case "x":
      return parseFloat(left) * parseFloat(right);
    case "/":
      return parseFloat(left) / parseFloat(right);
    default: 
      return "Dont know such operation";
  }
}