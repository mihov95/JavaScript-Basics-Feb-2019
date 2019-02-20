function convert() {
    let x = document.getElementById("cash-input").value;
    let e = document.getElementById("currency-options");
    let selected = e.options[e.selectedIndex].text;
    let result;

    if (selected === "EUR") {
        result = x + " " + "лв. = " + (x * 1.95583).toFixed(2) + " " + selected;
        document.getElementById("result").value = result;
    }
    else if (selected === "USD") {
        result = x + " " + "лв. = " + (x * 1.63760).toFixed(2) + " " + selected;
        document.getElementById("result").value = result;
    }
    else if (selected === "GBP") {
        result = x + " " + "лв. = " + (x * 2.22920).toFixed(2) + " " + selected;
        document.getElementById("result").value = result;
    }
}