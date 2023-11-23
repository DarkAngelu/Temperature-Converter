const input = document.querySelectorAll(".block input");
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

for (let i = 0 ; i < input.length ; i++) {
    input[i].addEventListener("input", function(e) {
        const unit = e.target.id;
        const value = parseInt(e.target.value);

        switch (unit) {
            case "celsius":
                fahrenheit.value = parseFloat((value * 1.8) + 32).toFixed(4) * 1;
                kelvin.value = parseFloat(value + 273.15).toFixed(4) * 1;
                break;
            case "fahrenheit":
                celsius.value = parseFloat((value - 32) * 5 / 9).toFixed(4) * 1;
                kelvin.value = parseFloat(((value - 32) * 5 / 9) + 273.15).toFixed(4) * 1;
                break;
            case "kelvin":
                celsius.value = parseFloat(value - 273.15).toFixed(4) * 1;
                fahrenheit.value = parseFloat(((value - 273.15) * 1.8) + 32).toFixed(4) * 1;
        }

        if (!e.target.value) {
            celsius.value = null;
            fahrenheit.value = null;
            kelvin.value = null;
        }
    });
}
