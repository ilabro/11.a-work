function rndPM() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    let strings = ['+', '-'];
    if (Math.random()> 0.5){
        document.getElementById("char").innerHTML = "+";
    }else{
        document.getElementById("char").innerHTML = "-";
    }
    // let randomIndex = Math.floor(Math.random() * strings.length);
    // let randomString = strings[randomIndex];
    let rand_num1 = Math.floor(Math.random() * (max - min + 1) + min);
    let rand_num2 = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("first").innerHTML = rand_num1;
    document.getElementById("second").innerHTML = rand_num2;
    document.getElementById("char").innerHTML = randomString;
    
    }
function checkresultPM(){
    let result = document.getElementById("result").value;
    let char = document.getElementById("char").value;
    if (char == "+"){
        if (result == rand_num1 + rand_num2){
            document.getElementById("end").innerHTML = "Malacis, pareizi!";
        }else if (result != rand_num1 + rand_num2) {
            document.getElementById("end").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
        }
    }else if (char == "-"){
        if (result == rand_num1 - rand_num2){
            document.getElementById("end").innerHTML = "Malacis, pareizi!";
        }else if (result != rand_num1 - rand_num2) {
            document.getElementById("end").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
        }
    }
}

//----------------------------------------------------------------------------------------------->

function rndMD() {
    const min = Math.ceil(1);
    const max = Math.floor(20);
    rand_num1 = Math.floor(Math.random() * (max - min + 1) + min);
    rand_num2 = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("first").innerHTML = rand_num1;
    document.getElementById("second").innerHTML = rand_num2;
}
function checkresultMD(){
    let result = document.getElementById("result").value
    if (result == rand_num1 * rand_num2){
        document.getElementById("end").innerHTML = "Malacis!"
    }else if (result != rand_num1 * rand_num2) {
        document.getElementById("end").innerHTML = "Nepareizi vai atbiles lauks ir tukšs."
    }
}

