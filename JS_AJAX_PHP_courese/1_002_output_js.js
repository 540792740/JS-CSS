//JS doc
// document.write('hello');
var myOutput = document.getElementById('output');
//Working with Variables
var myString = ' Hello 2 ';
var myNumber = 100 ;
myNumber = '100';
myNumber = myNumber + '1';
console.log(myNumber);

myString = ' New Value ';
var myObjects = {name:'Mike', sex : 'male'};
myObjects.name = 'Peter';
console.log( myObjects);

var myfrient = myObjects;
myObjects['name'] = "Li";
myfrient['name'] = 'Wang';

console.log(myfrient);
console.log(myObjects);
myOutput.innerHTML = myObjects.name;

function myFrients(a, b) {
    this.name = a;
    this.sex = b;
}

var person1 = new myFrients('Cris', 'male');
var person2 = new myFrients('Wu', 'female');

console.log(person1);
console.log(person2);

var number1 = 100;
var number2 = '100';

if(number1 == number2) {
    output = 'Same';
}else{
    output = 'Dif'
}
console.log(output);

//if-else:
if(number1 === number2) {
    output = 'Same';
}else{
    output = 'Dif'
}
console.log(output);

//Switch
myNumber = 105;
switch (myNumber) {
    case 105:
        output = ' 105';
        // break;
    case 108 :
        output += ' 108';
        // break;
    default:
        output += ' NotFound';
}
myOutput.innerHTML = output;