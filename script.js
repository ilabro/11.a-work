function rndPM() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    var strings = ['+', '-'];
    if (Math.random()> 0.5){
        document.getElementById("char").innerHTML = "+";
    }else{
        document.getElementById("char").innerHTML = "-";
    }
    // let randomIndex = Math.floor(Math.random() * strings.length);
    // let randomString = strings[randomIndex];
    var rand_num1 = Math.floor(Math.random() * (max - min + 1) + min);
    var rand_num2 = Math.floor(Math.random() * (max - min + 1) + min);
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

