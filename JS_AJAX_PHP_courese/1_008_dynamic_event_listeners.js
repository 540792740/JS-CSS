//js doc
/*
// document.body.innerHTML = 'Hello world.'
// document.title = 'hello'
console.log(myOutput)
myOutput[1].onclick = function(){myFunction()};

var myOutput = document.getElementById('output');
var myButton = document.getElementById('myButton');
console.log(this.myButton);


myButton.innerHTML = 'Something Diff'

myButton.onclick = function(){myFunction()};
///Working with Variables


var myString = '1010';

var myBoolean = false;
var myArray = ['hello 2', 100];
var myObject = {name:'peter', sex: 'male'};

var output = 'Nothing';
var output = 'Nothing <BR> next line';
 */
var myNumber = 0;
function myFunction(){
    myNumber++;
    document.getElementById('output').innerHTML = 'clicked me'+ myNumber;
}

var myClass = document.getElementsByClassName('col-md-3');

for (i = 0; i < myClass.length; i++){
    myClass[i].addEventListener("click", myFunction);
}