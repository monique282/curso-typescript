type Qualquer<T> = T;

function identityN(value: Qualquer<number>): Number {
    return value;
}

function identityS(value: Qualquer<string>): string {
    return value;
}

function identity(value: Qualquer<number[]>): Number[] {
    return value;
}


console.log(identityN(42)); // 42
console.log(identityS("Hello")); // Hello
console.log(identity([1, 2, 3])); // [1, 2, 3]