// in Ex9 to Ex15, change the name of the following function properly
function prime() {
   var num = parseInt(prompt("Please enter a number: ", ""));
   var prime = true ;
   var d = 2;

   while ( prime == true && d <= num/2 ) {
      console.log(d);
      if (num % d == 0) {
         prime = false;
      }
         d = d + 1;
   }

   if (prime == true) {
      alert(num + "is prime");
      //outputObj.innerHTML=num+"is prime "
   }
   else {
      //outputObj.innerHTML=num+"is not prime ";
      alert (num + "is not prime")
   }

  
}

function Cracklepop() {{
   var i = Math.floor(Math.random() * 100);
   if(i % 3 === 0 && i % 5 === 0){
      alert("CracklePop")
  }
  //detect values divisible by 3
  else if(i % 3 === 0){
      alert("Crackle")
  }
  //detect values divisible by 5
  else if(i % 5 === 0){
      alert("pop")
  }
  else { 
   alert(i)}
}
   
   

  
}

   function sum4() {
      var sum1 = 0;
      var sum2 = 0;

      for (i = 1; i <= 4; i = i+1) {
         var num = parseInt(prompt("Please enter a number: ", ""));
         sum1 = sum1 + num;
      }

      for (i = 1; i <= 4; i = i+1) {

         var num = parseInt(prompt("Please enter a number: ", ""));
            sum2 = sum2 + num;
      }
      if(sum1==sum2)
      {
         alert ("yes")
      }
      else{
         alert ("no")
      }
   }

function ex3 () {
   var p = 0 ;
   var n = 0;
   while (num != 0 && p <= 2*n ) {
      var num = parseInt(prompt("Please enter a number: ", ""));
      if(num > 0 ){
            p=p+1
      }
      else if (num <0)
      {
         n=n+1
      }
   }
}

function ex4 () {
   var cnt1 = 0;
   var cnt2 = 0;
   for (i=1; i <= 4; i=i+1){
      var num = parseInt(prompt("Please enter a number: ", ""));
      if (num<0){
         cnt1 = cnt1 + 1;
      }
   }
   for (i=1; i <= 4; i=i+1){
      var num = parseInt(prompt("Please enter a number: ", ""));
      if (num>0){
         cnt2 = cnt2 + 1;
      }
   }
   if (cnt1==cnt2){
      alert("yes")
   }
   else {
      alert ("no")
   }

}

function prime1(num) {
   var prime = true ;
   var d = 2;
   while (prime == true && d <= num/2 ) {
      console.log(d);
      if (num % d == 0) {
         prime = false;
      }
      d = d + 1;
   }
   return prime;
}
function has7(i){

   while(i>0){
      if (i%10 ==7){
         return true;
      }
      else{
         i = Math.floor(i/10);
      }
   }
   return false;
}


function ex5(){
   var num = parseInt(prompt("Please enter a number: ", ""));
   for (i=2; i<=num; i=i+1){
     if (prime1(i)==true){
         alert(i);
     }
   }
}

function ex6(){
   var outputObj = document.getElementById('output');
   var num = parseInt(prompt("Please enter a number: ", ""));
   var i;
   for (i=num-1; i>0; i=i-1){
   if (prime1(i)==true){
      if (has7(i)==true){
          outputObj.innerHTML += i+ ",";
      }
   }
   }
}

function arrayin(){
var a = [];
var a1 =[];
   for (i=0;i<=4;i++){
      var inp = prompt("enter array inputs")
      a[i] = inp;
      a1[i] = inp;
   }

   var x = a.length - 1;
  
      for (i=0;i<a.length;i++){
         if (i==x){
            a[i] = a1[0]
         }
         else{
            a[i] = a[i+1]     
      }
   }
   alert (a)

}

function shift (){

   var a1 = a ;

   
}
