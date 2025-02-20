// Function to square a number
function square(num) {
    return num * num;
}

// Loop from 1 to 10 and pass each number to the square function
for (let i = 1; i <= 10; i++) {
    console.log(`Square of ${i}: ${square(i)}`);
}

// Connecting sum function with HTML (Optional)
document.addEventListener("DOMContentLoaded", function () {
    const sumButton = document.getElementById("sumButton");
    sumButton.addEventListener("click", function () {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const result = calculateSum(num1, num2);
        document.getElementById("sumResult").textContent = `Sum: ${result}`;
    });
});