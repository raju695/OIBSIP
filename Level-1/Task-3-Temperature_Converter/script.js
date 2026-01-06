function convertTemp() {
    const tempInput = document.getElementById("temperature").value;
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const resultBox = document.getElementById("result");

    if (tempInput === "") {
        resultBox.innerHTML = "Please enter a temperature!";
        resultBox.style.color = "red";
        return;
    }

    let temp = parseFloat(tempInput);
    let converted;

    // Convert input to Celsius first
    if (from === "celsius") {
        converted = temp;
    } else if (from === "fahrenheit") {
        converted = (temp - 32) * 5 / 9;
    } else {
        converted = temp - 273.15;
    }

    // Convert from Celsius to target unit
    if (to === "fahrenheit") {
        converted = (converted * 9 / 5) + 32;
        unit = "°F";
    } else if (to === "kelvin") {
        converted = converted + 273.15;
        unit = "K";
    } else {
        unit = "°C";
    }

    resultBox.style.color = "#1d2671";
    resultBox.innerHTML = `Converted Temperature: <br>${converted.toFixed(2)} ${unit}`;
}
