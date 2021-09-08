//Jam Live
setInterval(myTime, 1000);

function myTime() {
    const d = new Date();
    document.getElementById("thistime").innerHTML = d.toLocaleTimeString();
}

//variable
let seconds = 0;
let minutes = 0;
let hours = 0;

//menambah 0 pada stopwatch
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//menahan stopwatch jalan duluan
let interval = null;

//berhentikan stopwatch
let status = "stopped";

//untuk peserta
let lapnow = null;


//Stopwatch
function stopWatch(){

            seconds++

            if (seconds / 60 == 1){
                seconds = 0;
                minutes++;

                if(minutes / 60 == 1){
                    minutes = 0;
                    hours++;
                }
            
        }
    

    //menambah digit

    if(seconds < 10){
        displaySeconds = "0" +seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    
    if(minutes < 10){
        displayMinutes = "0" +minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" +hours.toString();
    }
    else{
        displayHours = hours;
    }


    //waktu bergerak
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status == "stopped"){
        //memulai stopwacth
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Pause";
        status = "started"
    }  
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped"
    }

}

//tombol reset
function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00"
    document.getElementById("startStop").innerHTML = "Start"
    display1.innerHTML = "00:00:00"
    display2.innerHTML = "00:00:00"
    display3.innerHTML = "00:00:00"
    display4.innerHTML = "00:00:00"
    display5.innerHTML = "00:00:00"
    display6.innerHTML = "00:00:00"
    display7.innerHTML = "00:00:00"
    display8.innerHTML = "00:00:00"
    document.getElementById("p1").disabled = true;
    document.getElementById("p2").disabled = true;
    document.getElementById("p3").disabled = true;
    document.getElementById("p4").disabled = true;
    document.getElementById("p5").disabled = true;
    document.getElementById("p6").disabled = true;
    document.getElementById("p7").disabled = true;
    document.getElementById("p8").disabled = true;
}

function p1(){
    lapnow = `${hours} : ${minutes} : ${seconds}`;
    display1.innerHTML = lapnow.toString();
    document.getElementById("p1").disabled = true;
}

function p2(){
    lapnow = `${hours} : ${minutes} : ${seconds}`;
    display2.innerHTML = lapnow.toString();
    document.getElementById("p2").disabled = true;
}

function p3(){
    lapnow = `${hours} : ${minutes} : ${seconds}`;
    display3.innerHTML = lapnow.toString();
    document.getElementById("p3").disabled = true;
}

function p4(){
    lapnow = `${hours} : ${minutes} : ${seconds}`;
    display4.innerHTML = lapnow.toString();
    document.getElementById("p4").disabled = true;
}

function p5(){
    lapnow = `${hours} : ${minutes} : ${seconds}`;
    display5.innerHTML = lapnow.toString();
    document.getElementById("p5").disabled = true;
}

function p6(){
    lapnow = `${hours} : ${minutes} : ${seconds}`;
    display6.innerHTML = lapnow.toString();
    document.getElementById("p6").disabled = true;
}

function p7(){
    lapnow = `${hours} : ${minutes} : ${seconds}`;
    display7.innerHTML = lapnow.toString();
    document.getElementById("p7").disabled = true;
}

function p8(){
    lapnow = `${hours} : ${minutes} : ${seconds}`;
    display8.innerHTML = lapnow.toString();
    document.getElementById("p8").disabled = true;
}