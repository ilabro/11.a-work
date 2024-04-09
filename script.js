const max = 100;
const min = 1;


function rndPM() {
    window.value rand_num1 = Math.floor(Math.random() * (max - min + 1) + min);
    window.value rand_num2 = Math.floor(Math.random() * (max - min + 1) + min);
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
                document.getElementById("count").innerHTML = count;
            }else if (result != rand_num1 + rand_num2){
                document.getElementById("board").innerHTML = "Nepareizi!";
                count += 1
                document.getElementById("count").innerHTML = count;
            }
        }else if (char == "-"){
            if (result == rand_num1 - rand_num2){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                count += 1
                document.getElementById("count").innerHTML = count;
            }else if (result != rand_num1 - rand_num2){
                let incorrect_count = 0
                document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
                count += 1
                document.getElementById("count").innerHTML = count;
            }
        }
    }else {
                document.getElementById("board").innerHTML = "Atbiles lauks ir tukšs.";
            }
}

//----------------------------------------------------------------------------------------------->
const max_one = 50;
const min_one = 0;

function isfloat (n){
    return n % 1 === 0;
}
function rndMD() {
    window.value rand_num_one = Math.floor(Math.random() * (max_one - min_one + 1) + min_one);
    window.value rand_num_two = Math.floor(Math.random() * (max_one - min_one + 1) + min_one);

    while (rand_num_one * rand_num_two){
    if (Math.random()> 0.5){
        document.getElementById("char").innerHTML = "x";
    }else{
        document.getElementById("char").innerHTML = "÷";
    }
    document.getElementById("first").innerHTML = rand_num_one;
    document.getElementById("second").innerHTML = rand_num_two;
    }
}


function checkresultMD(){
    var result = document.getElementById("result").value;
    var char = document.getElementById("char").innerHTML;
    var count = 0
    console.log(char)
    if (result != ""){
        if (char == "x"){
            if (result == rand_num_one * rand_num_two){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                count += 1
                document.getElementById("count").innerHTML = count;
            }else if (result != rand_num_one * rand_num_two){
                document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
                count += 1
                document.getElementById("count").innerHTML = count;
            }
        }else if (char == "÷"){
            if (result == rand_num_one / rand_num_two){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                count += 1
                document.getElementById("count").innerHTML = count;
            }else if (result != rand_num_one / rand_num_two){
                document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs";
                count += 1
                document.getElementById("count").innerHTML = count;
            }
        }
    }else {
            document.getElementById("board").innerHTML = "Atbiles lauks ir tukšs.";
    }
}

   
