
let theme = 1;
let themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
  let themeBtnChild = themeBtn.firstElementChild;
  
  if (theme == 1) {
    themeBtnChild.style.left = "23px";
    theme2();
    theme = 2;
  }
  else if (theme == 2) {
    themeBtnChild.style.left = "42px";
    theme3();
    theme = 3;
  }
  else if (theme == 3) {
    themeBtnChild.style.left = "4px";
    theme1();
    theme = 1;
  }

})

function theme1() {

  let root = document.documentElement.style;

  root.setProperty("--main-bg", "hsl(222, 26%, 31%)");
  root.setProperty("--keypad-bg", "hsl(223, 31%, 20%)");
  root.setProperty("--screen-bg", "hsl(224, 36%, 15%)"); //unedited from theme2

  root.setProperty("--most-btn-color", "hsl(30, 25%, 89%)");
  root.setProperty("--most-btn-shadow", "hsl(28, 16%, 65%)");
  root.setProperty("--most-btn-active", "#fff");

  root.setProperty("--delres-btn-color", "hsl(225, 21%, 49%)");
  root.setProperty("--delres-btn-shadow", "hsl(224, 28%, 35%)");
  root.setProperty("--delres-btn-active", "hsl(225, 21%, 59%)");
  
  root.setProperty("--equal-btn-color", "hsl(6, 63%, 50%)");
  root.setProperty("--equal-btn-shadow", "hsl(6, 70%, 34%)");
  root.setProperty("--equal-btn-active", "hsl(6, 63%, 60%)");

  root.setProperty("--text-color", "hhsl(221, 14%, 31%)");
  
  root.setProperty("--font-color", "white");
  
  document.querySelector(".equal").style.color = "white";
}

function theme2() {

  let root = document.documentElement.style;

  root.setProperty("--main-bg", "hsl(0, 0%, 90%)");
  root.setProperty("--keypad-bg", "hsl(0, 5%, 81%)");
  root.setProperty("--screen-bg", "hsl(0, 0%, 93%)");

  root.setProperty("--most-btn-color", "hsl(45, 7%, 89%)");
  root.setProperty("--most-btn-shadow", "hsl(35, 11%, 61%)");
  root.setProperty("--most-btn-active", "hsl(45, 7%, 99%)");

  root.setProperty("--delres-btn-color", "hsl(185, 42%, 37%)");
  root.setProperty("--delres-btn-shadow", "hsl(185, 58%, 25%)");
  root.setProperty("--delres-btn-active", "hsl(185, 42%, 47%)");
  
  root.setProperty("--equal-btn-color", "hsl(25, 98%, 40%)");
  root.setProperty("--equal-btn-shadow", "hsl(25, 99%, 27%)");
  root.setProperty("--equal-btn-active", "hsl(25, 98%, 50%)");

  root.setProperty("--text-color", "hsl(60, 10%, 19%)");
  
  root.setProperty("--font-color", "black");
  

}

function theme3() {

  let root = document.documentElement.style;

  root.setProperty("--main-bg", "hsl(268, 75%, 9%)");
  root.setProperty("--keypad-bg", "hsl(268, 71%, 12%)");
  root.setProperty("--screen-bg", "hsl(268, 71%, 12%)"); //unedited from theme2

  root.setProperty("--most-btn-color", "hsl(268, 47%, 21%)");
  root.setProperty("--most-btn-shadow", "hsl(290, 70%, 36%)");
  root.setProperty("--most-btn-active", "hsl(268, 47%, 31%)");

  root.setProperty("--delres-btn-color", "hsl(281, 89%, 26%)");
  root.setProperty("--delres-btn-shadow", "hsl(285, 91%, 52%)");
  root.setProperty("--delres-btn-active", "hsl(281, 89%, 36%)");
  
  root.setProperty("--equal-btn-color", "hsl(176, 100%, 44%)");
  root.setProperty("--equal-btn-shadow", "hsl(177, 92%, 70%)");
  root.setProperty("--equal-btn-active", "hsl(176, 100%, 54%)");

  root.setProperty("--text-color", "hsl(52, 100%, 62%)");
  
  root.setProperty("--font-color", "hsl(52, 100%, 62%)");
  
  document.querySelector(".equal").style.color = "black";
}


let textBox = document.querySelector("#text-box")
let btnContainer = document.querySelector(".btn-container");
let left = document.getElementById("left");
let leftOperand = "";
let rightOperand = "";
let operation = "";

btnContainer.addEventListener("click", (event) => {
  let target = event.target.textContent;

  if (event.target.tagName == "DIV") {
    return;
  }

  if (target == "+" || target == "-" || target == "x" || target == "/") {
    if (leftOperand != "" || operation != "") {
      leftOperand = calculate(leftOperand, textBox.value, operation);
      operation = target;
      left.textContent = leftOperand + target;
      textBox.value = "";
    }
    else {
      leftOperand = textBox.value;
      operation = target;
      left.textContent = leftOperand + target;
      textBox.value = "";
    }
  }
  else if (target == "DEL" || target == "RESET" || target == "="){
    if (target == "DEL") {
      let array = textBox.value.split("");
      array.splice(-1, 1);
      textBox.value = array.join("");
    }
    else if (target == "RESET") {
      leftOperand = "";
      rightOperand = "";
      operation = "";
      textBox.value = "";
      left.textContent = "";
    }
    else {
      rightOperand = textBox.value;
      textBox.value = calculate(leftOperand, rightOperand, operation);
      left.textContent = "";
      leftOperand = "";
      rightOperand = "";
      operation = "";
    }
  }
  else {
    textBox.value += target;
  }
})

function calculate(left, right, ope) {
  switch (ope) {
    case "+":
      return parseFloat(left) + parseFloat(right);
      break;
    case "-":
      return parseFloat(left) - parseFloat(right);
      break;
    case "x":
      return parseFloat(left) * parseFloat(right);
      break;
    case "/":
      return parseFloat(left) / parseFloat(right);
      break;
  }
}