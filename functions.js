document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.getElementById("textBox");
    inputField.addEventListener("input", function() {
        var inputValue = inputField.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase for case-insensitive comparison

        if (inputValue === "javascript") {
            setTimeout(clear, 100); // Clear the input field if the entered value matches "javascript"
        }
    });
});

function clear(){
    var inputField = document.getElementById("textBox");
    inputField.value = ""
}