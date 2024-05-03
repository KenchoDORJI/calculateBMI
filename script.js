function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height * height);
    var result = document.getElementById("result");
    var category = document.getElementById("category");
    if (isNaN(bmi)) {
        result.textContent = "Please enter valid values for weight and height.";
        category.textContent = "";
    } else {
    result.textContent = "Your BMI is: " + bmi.toFixed(2);  
    if (bmi < 18.5) {
        category.textContent = "Statement: Underweight!";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category.textContent = "Statement: Normal weight!";
    } else if (bmi >= 25 && bmi < 29.9) {
        category.textContent = "Statement: Overweight!";
    } else if (bmi >= 30 && bmi < 34.9){
        category.textContent = "Statement: Obese!";
    }else{
        category.textContent = "Statement: Extremely obese!"
    }
    }
}
