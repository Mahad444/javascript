// var intervalValid;
// // get CurrentTime();

// function startTime(){
//    intervalValid=setInterval(getCurrentDateTime,1000);
// }
// function stopTime(){
//     clearInterval(intervalValid);
// }
// function getCurrentDateTime(){
//     document.getElementById("timer").innerHTML = new Date();
// }
// getCurrentDateTime();
var intervalValid;

            function startTime(){
                intervalValid=setInterval(getCurrentDateTime, 1000);
            } 

            function stopTime(){
                clearInterval(intervalValid);
            }

            function getCurrentDateTime(){
                document.getElementById("timer").innerHTML= new Date();
            }
            getCurrentDateTime();