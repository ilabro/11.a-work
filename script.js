const max = 100;
const min = 1;

function cleanPM (){
    setTimeout(()=> { document.getElementById("board").innerHTML = "" } ,3000);
    setTimeout(()=> { document.getElementById("result").value = "" } ,3000);
    setTimeout(()=> { rndPM() } ,3000);
}

function rndPM() {
    window.rand_num1 = Math.floor(Math.random() * (max - min + 1) + min);
    window.rand_num2 = Math.floor(Math.random() * (max - min + 1) + min);
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
    
    if (result != ""){
        if (char == "+"){
            if (result == rand_num1 + rand_num2){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                cleanPM()
            }else if (result != rand_num1 + rand_num2){
                document.getElementById("board").innerHTML = "Nepareizi!";
                cleanPM()
            }
        }else if (char == "-"){
            if (result == rand_num1 - rand_num2){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                cleanPM()
            }else if (result != rand_num1 - rand_num2){
                document.getElementById("board").innerHTML = "Nepareizi vai atbiles lauks ir tukšs.";
                cleanPM()
            }
        }
    }else {
                document.getElementById("board").innerHTML = "Atbiles lauks ir tukšs.";
        }
}

//----------------------------------------------------------------------------------------------->
const max_one = 20;
const min_one = 1;



function rndMD() {
    window.rand_num1 = Math.floor(Math.random() * (max_one - min_one + 1) + min_one);
    window.rand_num2 = Math.floor(Math.random() * (max_one - min_one + 1) + min_one);
    if (Math.random()> 0.5){
        document.getElementById("char").innerHTML = "×";
    }else{
        document.getElementById("char").innerHTML = "÷";
    }
    document.getElementById("first").innerHTML = rand_num1;
    document.getElementById("second").innerHTML = rand_num2;
}

function cleanMD (){
    setTimeout(()=> { document.getElementById("board").innerHTML = "" } ,3000);
    setTimeout(()=> { document.getElementById("result").value = "" } ,3000);
    setTimeout(()=> { rndMD() } ,3000);
}

function checkresultMD(){
    var result = document.getElementById("result").value;
    var char = document.getElementById("char").innerHTML;
    
    if (result != ""){
        if (char == "×"){
            if (result == rand_num1 * rand_num2){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                cleanMD()
            }else if (result != rand_num1 * rand_num2){
                document.getElementById("board").innerHTML = "Nepareizi!";
                cleanMD()
            }
        }else if (char == "÷"){
            if (result == Math.round(rand_num1 / rand_num2)){
                document.getElementById("board").innerHTML = "Malacis, pareizi!";
                cleanMD()
            }else if (result != Math.round(rand_num1 / rand_num2)){
                document.getElementById("board").innerHTML = "Nepareizi.";
                cleanMD()
            }
        }
    }else {
                document.getElementById("board").innerHTML = "Atbiles lauks ir tukšs.";
        }
}


   
