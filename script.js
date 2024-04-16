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

//----------------------------------------------------------------------------------------------->

function uzd_output3 (){
    let third_grade = [
        {teksts:"Viens kilograms svaigu dārzeņu maksā 2 eiro, bet 1 kg saldētu dārzeņu maksā 2 reizes dārgāk. Saimniece nopirka 5 kg katra veida dārzeņu. Cik saimniece samaksāja kopā?",atbilde:"30 eiro"},
        {teksts:"Skolas virtuvei pieveda 100 kg dārzeņu. 44 kg no tiem bija gurķi, bet pārējie bija tomāti. Tomāti bija sasvērti vienādi 7 kastēs. Cik kilogra- mu tomātu bija katrā kastē?",atbilde:"8 katrā kastē"},
        {teksts:"Kafejnīcai atveda 35 kg burkānu, bet kāpostus par 15 kg vairāk. Saimniece katru dienu izvārīja vienādu daudzumu dārzeņu. Pēc 5 dienām visi dārzeņi bija beigušies. Cik kilogramu katra veida dārzeņu izvārīja katru dienu?",atbilde:"7 burkānus un 10 kāpostus"},
        {teksts:"Pirmajā un otrajā klasē katrā ir 23 skolēni. Trešajā un ceturtajā klasē katrā ir 26 skolēni. Cik skolēnu ir kopā?",atbilde:"98 skolēni kopā"}
    ]
    let izvads = document.getElementById("uzd");
    let index = Math.floor(Math.random() * (third_grade.length - 0) + 0);
    console.log(index);
    let uzdevums = third_grade[index];
    console.log(uzdevums);

    izvads.innerHTML = uzdevums.teksts;
    
}


   
