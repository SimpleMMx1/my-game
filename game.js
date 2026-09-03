const input = require('readline-sync');
// taking first input from user
let Name1 = input.question("Enter your name: ");
let number1 = Number(input.question("Enter a number: "));

//taking second input from user
let Name2 = input.question("Enter your name: ");
let number2 = Number(input.question("Enter a number: "));
while(true){
//gussing logic
//player one guessing 
let guess = Number(input.question("Guess a number: "));
if(guess === number2){
    console.log(`Congratulations ${Name1}, player one wins !`);
    break;}
else if (guess < number2){
    console.log(`Sorry ${Name1}, that's too low.`);}
else{
    console.log(`Sorry ${Name1}, that's too high.`);}
//player two guessing 
let guess2 = Number(input.question("Guess a number: "));
if(guess2 === number2){
    console.log(`Congratulations ${Name2}, player two wins !`);}
else if (guess2 < number2){
    console.log(`Sorry ${Name2}, that's too low.`);}
else{
    console.log(`Sorry ${Name2}, that's too high.`);}
}