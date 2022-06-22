    var age = document.getElementById("Age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

function validateForm() {
    if (age.value == "" || height.value == "" || weight.value == "") {
        alert("ALl fields are required!");
        document.getElementById("submit").removeEventListener("click", countBMI);
    }
    else {
        countBMI();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);

function countBMI() {
    var p = [age.value, height.value, weight.value];
    form.reset();
    var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);
    var results = "";
    if (bmi < 18.5) {
        results = 'Underweight';
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        results = 'Healthy';
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        results = 'Overweight';
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        results = 'Obese';
    }
    else {
        results = 'Extremely Obese';
    }
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var t = document.createTextNode(results);
    var b = document.createTextNode('BMI: ');
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.getElementById("submit").removeEventListener("click", countBMI);
    document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBMI);

