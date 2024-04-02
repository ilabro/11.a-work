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
    var count = 0
    if (result != ""){
        if (char == "+"){
            if (result == rand_num1 + rand_num2){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                count += 1
                document.getElementById("count").innetHTML = count;
            }else if (result != rand_num1 + rand_num2){
                document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
                count += 1
                document.getElementById("count").innetHTML = count;
            }
        }else if (char == "-"){
            if (result == rand_num1 - rand_num2){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                count += 1
                document.getElementById("count").innetHTML = count;
            }else if (result != rand_num1 - rand_num2){
                let incorrect_count = 0
                document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
                count += 1
                document.getElementById("count").innetHTML = count;
            }
        }
}else {
            document.getElementById("board").innerHTML = "Atbiles lauks ir tukšs.";
        }

//----------------------------------------------------------------------------------------------->

function rndMD() {
    if (Math.random()> 0.5){
        document.getElementById("char").innerHTML = "x";
    }else{
        document.getElementById("char").innerHTML = "÷";
    }
    document.getElementById("first").innerHTML = rand_num1;
    document.getElementById("second").innerHTML = rand_num2;
    }


function checkresultMD(){
    var result = document.getElementById("result").value;
    var char = document.getElementById("char").innerHTML;
    var count = 0
    console.log(char)
    if (result != ""){
        if (char == "x"){
            if (result == rand_num1 * rand_num2){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                count += 1
                document.getElementById("count").innetHTML = count;
            }else if (result != rand_num1 * rand_num2){
                document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
                count += 1
                document.getElementById("count").innetHTML = count;
            }
        }else if (char == "÷"){
            if (result == rand_num1 / rand_num2){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                count += 1
                document.getElementById("count").innetHTML = count;
            }else if (result != rand_num1 / rand_num2){
                document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs";
                count += 1
                document.getElementById("count").innetHTML = count;
            }
        }
}else {
        document.getElementById("board").innerHTML = "Atbiles lauks ir tukšs.";
}

   
