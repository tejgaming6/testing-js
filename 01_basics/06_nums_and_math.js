const score = 200;

// console.log(score);

const balance = new Number(50);
// console.log(balance);

// console.log(score.toString().length);
// console.log(score.toFixed(2));

const exampleNumber = 89.6323

// console.log(exampleNumber.toPrecision(2));

// const thoudsands = 100000000
// console.log(thoudsands.toLocaleString('en-IN'));

// ____________________Maths_____________________________ maths lib by default with js 

// console.log(Math);
// console.log(Math.abs(-6)); // make it positive 6 doesn't make it negtive

// console.log(Math.round(3.4)); //it rounds up stuff 0.5 basics
// console.log(Math.floor(2.5)); // floor make it lower number
// console.log(Math.ceil(2.1));// it makes the upper number come if it cross any number it will show upper number example 2.1 it will print 3
//  console.log(Math.min(4,7,8,9,));
//  console.log(Math.max(4,7,8,9,));

//  console.log(Math.random());
//  console.log(Math.floor(Math.random(1)* 10) +1 );

 const min = 10
 const max = 30

 Math.floor(Math.random(max - min * 10) + min);

//  console.log(Math.random());

 // math floor to lower the number example if your output is 21.8 it will make it 21, math random gives output from 0.00 to 1.00 you can multlipy((max - min) - min) to get desired range 