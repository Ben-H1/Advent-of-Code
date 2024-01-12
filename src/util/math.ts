export const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b);

export const product = (...numbers: number[]) => numbers.reduce((a, b) => a * b);

export const greatestCommonDivisor = (a: number, b: number) => {
    let temp = b;

    do {
        b = a % b;
        a = temp;
        temp = b;
    } while (b !== 0);

    return a;
};

export const leastCommonMultiple = (...numbers: number[]) => {
    const lcm = (a: number, b: number) => (a * b) / greatestCommonDivisor(a, b);
    return numbers.reduce((a, b) => lcm(a, b));
};
