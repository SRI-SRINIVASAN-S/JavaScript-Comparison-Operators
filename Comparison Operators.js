//Comparison operators compare two values and give back a boolean value datatype result(output) either true or false.
//Comparison operators are used in decision making and loops.

//Types of comparison operators [there are 8 comparison operators] 
 /*
== (equal to operator) --> Equal to opeartor return TRUE if the operands are equal or else return false (operands can be of any data type).

!= (not equal to operator) --> Return TRUE if the operands are not equal or return FALSE if the operands are equal (operands can be of any daa type).

=== (strict equal to)  --> Return TRUE if the operands are EQUAL AND OF 'SAME DATA TYPE' or else return false if operands not equal also " not same data type" .

!== (strict not equal to)  --> Return FALSE if the operands are 'NOT EQUAL AND SAME DATA TYPE' or return TRUE if the operands are not equal also return TRUE if the data type is not same.

> (Greater then) --> Return true if the left operand is greater then right operand if not return false.

>= (Greater then or equal to)  --> Evaluates to true if the left operand is greater than or equal to the right operand or else return false.

< (Less then) --> Return TRUE if the left operand is left operand is less then the right operand or else return false.

<= (Less then or equal to) --> Evaluates to true if the left operand is less than or equal to the right operand or else return false.
*/

// == (equal to operator)

const same =100;
const differ =100;
console.log(same == differ);

const john =500;
const cena ='500';  // operands can be of any data type
console.log(john == cena);

//!= (not equal to operator)

const not =500;
const none ='600';   // operands can be of any data type
console.log(not != none);

let red ='101';
let blue =101;
console.log(red != blue);

//=== (strict equal to) 

let apple;
apple ='1001';        //Both operands are same data type
let orange ='1001'  
console.log(apple === orange);

let banana =5000;  // In === the operends must be in same data type or else return false 
let lemon ='5000'
console.log(banana === lemon);


//!== (strictly  not equal to)

const num =8000;              
const num1 =8001;
console.log(num !== num1);

const diff =400 ;   
const diff1 =400 ;    
console.log(diff !== diff1);


var ss ='105';   // Here the data type of ss is string ('105') so it return TRUE  
var ss1 =106;
console.log(ss !== ss1);

// > (Greater then)

let pink =1008;   // left operand is greater then right operand
let pink1 =1001;
console.log(pink > pink1);

let dog =100;
let cat =200;
console.log(dog > cat);

// >= (Greater then or equal to)

const black =1000;  //left operand is greater than or equal to the right operand
const black1 =1000;
console.log(black >= black1);

// < (Less then)

const yellow =499;       //left operand is less then the right operand
const yellow1 =501;
console.log(yellow < yellow1);


// <= (Less then or equal to)  

let all = 1002;      
let all1 =1005;
console.log(all <= all1);

const right =1000;   // true if the left operand is less than or equal to the right operand 
const wrong =1000;
console.log(right <= wrong);

//THANK YOU FOR LEARNING :)