 function grading(){
     let marksArray=[];
     for (a=1;a<=3;a++){
        var marks=parseInt(prompt("please enter your marks"));
        if (marks){
           marksArray.push(marks);
        }
     }

const marksArrayClone=[...marksArray].sort((a,b)=>{
     if(a<b) return 1;
        if(a===b) return 0;
         if (b<a) return -1
     });
//document.write(marksArrayClone+"<br>")
const smaller=marksArrayClone[0];
 const larger=marksArrayClone[marksArrayClone.length-1];
 document.write(smaller+"<br>");
 document.write(larger+"<br>");
}
grading();
