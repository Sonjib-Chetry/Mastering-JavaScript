
// long addition method

let num = 1            //let is used because we are changing the variable below
console.log(num);

num = num + 2
console.log(num);

num = num + 2
console.log(num);


// short addition method

//note this operators can't be applied directly on number like ++5

let num1 = 1            //let is used because we are changing the variable below
console.log(num1);

num1 += 2                //+= Addition Assignment Operator
console.log(num1);

num1 += 2
console.log(num1);       //+= Addition Assignment Operator


// short subtraction method

let num2 = 10           //let is used because we are changing the variable below
console.log(num2);

num2 -= 2                //-= Subtraction Assignment Operator.
console.log(num2);

num2 -= 2                //-= Subtraction Assignment Operator.
console.log(num2);


// short remainder  method

let num3 = 10           //let is used because we are changing the variable below
console.log(num3);

num3 %= 2                //%= Remainder Assignment Operator
console.log(num3);

num3 %= 2                //%= Remainder Assignment Operator
console.log(num3);

// short multiplication  method

let num4 = 10           //let is used because we are changing the variable below
console.log(num4);

num4 *= 2                //*= Multiplication Assignment Operator
console.log(num4);

num4 *= 2                //*= Multiplication Assignment Operator
console.log(num4);


// short division  method

let num5 = 10           //let is used because we are changing the variable below
console.log(num5);

num5 /= 2                //   /= Division Assignment Operator.
console.log(num5);

num5 /= 2                //   /= Division Assignment Operator.
console.log(num5);

// short exponentiation   method

let num6 = 10           //let is used because we are changing the variable below
console.log(num6);

num6 **= 2                //**= Exponentiation Assignment Operator
console.log(num6);

num6 **= 2                //**= Exponentiation Assignment Operator
console.log(num6);




// short Increment method

let num7 = 10           //let is used because we are changing the variable below
console.log(num7);

++num7               //++Increment Operator
console.log(num7);

++num7               //++Increment Operator
console.log(num7);

//note this operator can't be applied directly on number like ++5

//using Increment++ backside of the variable

let num9 = 10           //let is used because we are changing the variable below
let newNum1 = num9++    //Increment++ Operator

console.log(newNum1);    //putting Increment++ Operator backside of the variable will assign previous value of num9 to 
console.log(num9);      //newNum1 variable but current value of num9 will change

newNum1 = num9++        

console.log(newNum1);  
console.log(num9);     




// short Decrement method

let num8 = 10           //let is used because we are changing the variable below
console.log(num8);

--num8               //--Decrement Operator
console.log(num8);

--num8               //--Decrement Operator
console.log(num8);


//using Decrement-- backside of the variable

let num10 = 10           //let is used because we are changing the variable below
let newNum2 = num10--    //Decrement-- Operator

console.log(newNum2);    //putting Decrement-- Operator backside of the variable will assign previous value of num10 to
console.log(num10);     //newNum2 variable but current value of num10 will change

newNum2 = num10--        //Decrement-- Operator

console.log(newNum2);
console.log(num10);     
