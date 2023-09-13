function multiply(num1:number, num2: number) : number{
    return num1 * num2;
}

const resultMult = multiply(2, 3);
console.log("multiplicação: ", resultMult);

function sum(num1:number, num2: number) : number{
    return num1 + num2;
}

const resultSum = sum(2, 5);
console.log("somatoria: ", resultSum);

function isEven(num: number): boolean{
    return num % 2 === 0;
}

const resultIsEven = isEven(2);
console.log("par/impar: ", resultIsEven);

function showResult(result: number) : void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's not even!`);
        
    }
}

const resultShowResult = showResult(3);