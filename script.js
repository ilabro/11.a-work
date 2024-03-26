const max = 100;
const min = 1;
var rand_num1 = Math.floor(Math.random() * (max - min + 1) + min);
var rand_num2 = Math.floor(Math.random() * (max - min + 1) + min);

function rndPM() {
    if (Math.random()> 0.5){
        document.getElementById("char").innerHTML = "+";
    }else{
        document.getElementById("char").innerHTML = "-";
    }
    document.getElementById("first").innerHTML = rand_num1;
    document.getElementById("second").innerHTML = rand_num2;
    }

function checkresultPM(){
    var result = document.getElementById("result").value;
    var char = document.getElementById("char").innerHTML;
    console.log(char)
    if (char == "+"){
        if (result == rand_num1 + rand_num2){
            document.getElementById("board").innerHTML = "Malacis, pareizi!";
        }else if (result != rand_num1 + rand_num2){
            document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
        }
    }else if (char == "-"){
        if (result == rand_num1 - rand_num2){
            document.getElementById("board").innerHTML = "Malacis, pareizi!";
        }else if (result != rand_num1 - rand_num2){
            document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
        }
    }
}

//----------------------------------------------------------------------------------------------->

function rndMD() {
    if (Math.random()> 0.5){
        document.getElementById("char").innerHTML = "*";
    }else{
        document.getElementById("char").innerHTML = "/";
    }
    document.getElementById("first").innerHTML = rand_num1;
    document.getElementById("second").innerHTML = rand_num2;
    }
}

function checkresultMD(){
    var result = document.getElementById("result").value;
    var char = document.getElementById("char").innerHTML;
    console.log(char)
    if (char == "*"){
        if (result == rand_num1 * rand_num2){
            document.getElementById("board").innerHTML = "Malacis, pareizi!";
        }else if (result != rand_num1 * rand_num2){
            document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
        }
    }else if (char == "/"){
        if (result == rand_num1 / rand_num2){
            document.getElementById("board").innerHTML = "Malacis, pareizi!";
        }else if (result != rand_num1 / rand_num2){
            document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
        }
    }
}

   
