const util = require('util'); // We do not use ./ before the filename
const sayHi = util.format("Hi, %s", 'Josh');
util.log(sayHi); //22 Feb 11:04:59 - Hi, Josh
const util = require('util'); // We do not use ./ before the filename
const sayHi = util.format("Hi, %s", 'Josh');
util.log(sayHi); //22 Feb 11:04:59 - Hi, Josh
//homework 1
Array.prototype.even= function(){
    return this.filter(m => m %2 ==0
    )
    }
    Array.prototype.odd= function(){
    return this.filter(m=> m % 2!==0
    )
    }
    console.log('start');
    let inputArr = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenOutPut = inputArr.even(); // select the even values only
    console.log(evenOutPut);
    let oddOutPut = inputArr.odd(); // select the odd values only
    console.log(oddOutPut);
    console.log('end');