
function calculate() {
    // let Weight = document.getElementById('num-one').value*1000;

    // let Height = document.getElementById('num-two').value/100;
    // let BMI = Weight/(Height*Height); 
    let Weight = parseFloat(document.getElementById("num-one").value);  // To get weight from the input with id as weight
    let Height = parseFloat(document.getElementById("num-two").value) / 100; // Convert height to meters
    let BMI = Weight / (Height * Height);  // According to the formula

    console.log(BMI);
    if (BMI < 18.6) {
        document.querySelector('p').innerHTML = "oh no, you are underweight!".fontcolor('red').fontsize(5);
    }
    if (BMI >= 18.6 && BMI <= 24.9) {

        document.querySelector('p').innerHTML = "Congrats, You’re Healthy".fontcolor('green').fontsize(5);


    } //else {
    //     document.querySelector('p').innerHTML = "Oh no, You’re overweight!".fontcolor('red').fontsize(5);

    // }
}