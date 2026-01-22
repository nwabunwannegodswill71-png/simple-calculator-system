let display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Keyboard Support */
document.addEventListener("keydown", function(event) {
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    }
    if (event.key === "Enter") {
        calculateResult();
    }
    if (event.key === "Backspace") {
        deleteLast();
    }
    if (event.key === "Escape") {
        clearDisplay();
    }
});