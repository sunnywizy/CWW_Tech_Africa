document.addEventListener("DOMContentLoaded", () => {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertBtn = document.getElementById("convert-btn");
  
    function convertToCelsius(fahrenheit) {
      return (fahrenheit - 32) * (5 / 9);
    }
  
    function convertToFahrenheit(celsius) {
      return (celsius * 9 / 5) + 32;
    }
  
    convertBtn.addEventListener("click", () => {
      const celsius = parseFloat(celsiusInput.value);
      if (!isNaN(celsius)) {
        const fahrenheit = convertToFahrenheit(celsius);
        fahrenheitInput.textContent = fahrenheit.toFixed(2);
      } else {
        alert("Please enter a valid number for Celsius");
      }
    });
  
    celsiusInput.addEventListener("input", function() {
      fahrenheitInput.textContent = ""; // Clear Fahrenheit input when Celsius input changes
    });
  });
  