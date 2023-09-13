function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number | null, num2: number | null): number | string {
    if (num1 && num2) {
        return num1 + num2;
    } else {
        return "Invalid values entered!"
    }
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if (isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

((): void => {
    const num1: string | null | number = 2 ;
    const num2: string | null | number = 2 ;

    const num1Format = num1 ? Number(num1) : null;
    const num2Format = num2 ? Number(num2) : null;

    let result: number | string = sum(num1Format, num2Format);
    if (typeof result === 'number' && typeof num1Format === 'number' && typeof num2Format === 'number') {
        result += multiply(num1Format, num2Format);
        showResult(result);
    } else {
        console.log("Invalid values provided, please enter valid values!");
    }
})()