// function price(){

//     var priceFare = parseInt(document.getElementById("distance").value);
//     var People =parseInt(document.getElementById("people").value);
//     var ansswer=document.getElementById("answer").value=priceFare*People;


// const shortDistance=(shortDistance >=1 && shortDistance <=10);
// const medium=(medium >=11 && medium <=50);
// const mediumShort=(mediumShort >=51 && mediumShort <=100);
// const mediumLong=(mediumLong >=101 && mediumLong <=200);
// const longDistance=(longDistance>=201&& longDistance <=300);
// const extraLong=(extraLong >=301 && extraLong <=400);



// }
// price();

function price(){
    var num1=parseInt(document.getElementById("distance").value);
    var num1=parseInt(document.getElementById("people").value);
    var num3="Bus Doesnt Go Beyond This Point"
    if (num1>=1 && num1<10){
        document.getElementById("answer").value=num1*num2;
    }
    else if (num1>=11 && num1<50){
        document.getElementById("answer").value=num1*num2;
    }
    else if (num1>=51 && num1<100){
        document.getElementById("answer").value=num1*num2;
    }
    else if (num1>=101 && num1<200){
        document.getElementById("answer").value=num1*num2;
    }
    else if (num1>=201 && num1<300){
        document.getElementById("answer").value=num1*num2;
    }
    else if (num1>=301 && num1<400){
        document.getElementById("answer").value=num1*num2;
    }
    else{
        document.getElementById("answer").value=num3;
    }
}
price();