let resultDiv = document.getElementById('result');
let equationDiv = document.getElementById('equation');

let input = "";
let result = "";

let getInput = (data) => {
    input += data.value;
    resultDiv.innerHTML = input;
}

let removeLastNumber = () => {
    input = input.slice(0, -1);
    resultDiv.innerHTML = input;
    equationDiv.innerHTML = "";
}

let reset = () => {
    input = "";
    resultDiv.innerHTML = input;
    equationDiv.innerHTML = ""
}

let evalute = () => {
    if (input.length <= 0) {
        equationDiv.innerHTML = "";
    } else {
        input = input.replaceAll("×", "*");
        input = input.replaceAll("÷", "/");
        equationDiv.innerHTML = input + "=";
        resultDiv.innerHTML = eval(input);
    }
}

let themeToggler = (el) => {

    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        let ionIcon = el.firstElementChild;
        ionIcon.setAttribute("name", "sunny-outline");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        let ionIcon = el.firstElementChild;
        ionIcon.setAttribute("name", "moon-outline");
    }
}