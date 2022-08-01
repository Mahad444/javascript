// OBJECTS

// var car ={
//     carManufucturer : "Audi",
//     carModel : "Q7",
//     price : 50000 ,

//     allwheeldrive:function(){
//         return("This car comes with four wheel drive");
//     }
// }
// document.write("<h1>"+car.allwheeldrive() +"</h1>");

//Fuctions
function mahad(){
    return 9/3;
}
alert(mahad());


function muhib(){
 return "welcome"+"Home";
}
alert (muhib());

//OBJECTS

const person = {
    firstname:"Mahad",
    secondName:"Said",
    age : 22,
    Occupation :"Embedded Software Engineer"
}
alert (person.firstname);
alert(person["Occupation"]);

//exaple 2 Methods:
const persone = {
    firstName: "Moha",
    lastName : "Ibrahim",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName+" "+ "and my id is" +" " +this.id;
    }
  };
  alert (persone.fullName());
