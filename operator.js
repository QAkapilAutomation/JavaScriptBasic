//Artmitics operator
// let x=10;
// let y=30;
// let z=3;
// console.log(x+y);
// console.log(z++)
// console.log(z)

//Ternary

let point =99;
let type =point>100 ? 'gold': 'silver'
console.log(type)
//And and OR
let highIncome=true;
let goodCreditScore=false;
let eligibleforloan=highIncome && goodCreditScore
console.log(eligibleforloan)
let eligibleforloan1=highIncome || goodCreditScore
console.log(eligibleforloan1)


// Not

//let isActive = true;
console.log(! isActive);
let hour=10;
if(hour>=6 && hour<12){
    console.log('Good morning')
}
else if(hour>=12 && hour<=18){
    console.log('good afternoon');
}else{
    console.log('good evening'); 
}