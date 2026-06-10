let display = document.getElementById("display");

function addValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function removeOne() {
    display.value = display.value.slice(0, display.value.length - 1);
}

function calculateResult() {

    let expression = display.value;

    try {

        let answer = Function("return " + expression)();

        display.value = answer;

    } catch {

        display.value = "Invalid";

    }

}