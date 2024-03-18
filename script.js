function rndPM() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    rand_num1 = Math.floor(Math.random() * (max - min + 1) + min);
    rand_num2 = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("first").innerHTML = rand_num1;
    document.getElementById("second").innerHTML = rand_num2;
}
function checkresultPM(){
    let result = document.getElementById("result").value
    if (result == rand_num1 + rand_num2){
        document.getElementById("end").innerHTML = "Malacis!"
    }else if (result != rand_num1 + rand_num2) {
        document.getElementById("end").innerHTML = "Nepareizi vai atbiles lauks ir tukšs."
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

