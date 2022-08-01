// var student1={
//     name:'Mahad',
//     email:'saidmahad93@gmail.com',

// login(){
//     console.log(this.name, "has logged in")
// },
// logout(){
// console.log(this.name, "has logged out")
// }
// }


// CLASS
// class Student{
//     constructor(name='Said',email='saidmahad93@gmail.com'){
//        this.name=name;
//        this.email=email;
//     }
//     login(){
//         console.log(this.name, "has logged in");
//         // method chainig u must use"reurn" keyword
//         return this;
//     }
//     logout(){
//         console.log(this.name, "has logged out");
//         return this;
//     }
// }
    
    




 
// var student1=new Student('Mahad', 'Saidmahad93@gmail.com');
// student1.login().logout();
// var student2=new Student('Khadija', 'Khadijasaid93@gmail.com');
// var student3=new Student();

// INHERITANCE
// class Teams extends Student{
// }
    
// var tem1=new Teams('samson','samson@gmail.com');


/*USING THE SAME CLASS GIVE THE RESULT OF STUDENTS
70-100 A
60-69 B
50-59 C
40-49 D
Below 39 Fail
*/
class Uchaguzi{
    constructor(politician , Party){
        this.politician=politician;
        this.Party=Party;
    }
    method1(){
        console.log(this.politician, "Raila Odinga")
        return this.method1;
    }
    method2(){
        console.log(thi.Party,"Azimio La Umoja");
        return this.method2;
    }

}
var firstpol=new Uchaguzi('Raila Odinga','Azimio La Umoja');

class President extends Uchaguzi{
    method1(){
        console.log(this.politician,'William Ruto');
        // return this.method1;
    }
    method2(){
        console.log(this.Party, 'Kenya Kwanza')    
        // return this.method2;
    }
}
var prezo=new President('William Ruto','Kenya Kwanza');