
const userName1 = 'Sonex';
const userAge1 = 32;
const userAge2 = 23;

console.log(`Name: ${userName1}`);
console.log(`Age: ${userAge1}`);

if(true) console.log('My name is Sonex Karki');  //true condition will print
if(false) console.log('My name is Sonex Karki'); //false condition will not print

if(userAge1 >= 24 && userAge1 <=60) console.log('true condition will print');  //true condition will print
if(userAge2 >= 24 && userAge2 <=60) console.log('false condition will not print');  //false condition will not print

if(userAge2 >= 24 && userAge2 <= 60)
    console.log('User is a working professional'); //false condition will not print
    console.log('If 2nd line code run');   //if condition only validate immediate 1st line if not put under block {}

if(userAge1 >= 24 && userAge1 <=60) {
    console.log('User is a working professional');  //if condition validate all line if put under block {}
    console.log('If 2nd line code run');
}

//-------------------------------------------------

const userName = prompt('Please enter your name') || 'Sonex Karki';
const userAge = +prompt('Please enter your age') || 32;
// + and parseInt is used to convert string to number  
// if entered age 0 or -0 than it will be converted to 32


// --Alternative: Below code also can be used to store default values

// let userName = prompt('Please enter your name');
// let userAge = +prompt('Please enter your age');


// if (!userName) {
//     userName = 'Sonex Karki'
// }
// if (!userAge) {
//     userAge = 32
// }

if(userAge >=1 && userAge <=4) {
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is a child`);
}

else if(userAge >=5 && userAge <=17) {
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is a school student`);
}

else if(userAge >=18 && userAge <=23) {
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);    
    console.log(`${userName} is a college student`);
}

else if(userAge >=24 && userAge <=60) {
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is a working professional`);
}

else if(userAge >=61 && userAge <=120) {
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is a retired`);
}

else if(userAge >=121) {
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`${userName} is already dead`);
}

else {
    console.log(`Please enter a valid age`);   //check this condition using negative age value like -23
}
 

console.log('Program Ended.......!');