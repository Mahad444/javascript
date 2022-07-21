function currency(){
    var currencytype=parseInt(prompt("choose currency type \n1:Ksh \n2:EURO \n3:USD"));
    var forex;
    var trade;
    var amount;
    if(currencytype===1){
        amount=parseInt(prompt("Enter the amount you wish to trade"));
        forex=parseInt(prompt("Choose the currency you wish trade \n1:USD \n2:EURO "));
        if(forex===1){
            trade=amount/118.43
            alert("$"+trade);
        }else{
            trade=amount/118.89;
            alert("£"+trade);
        }
    }
}
currency();