const calc = require('./internal-module/calc');

calculate("a)", () => calc.addition(1, 1));
calculate("b)", () => calc.addition(-123, 123123));
calculate("c)", () => calc.multiplication(8, 0));
calculate("d)", () => calc.multiplication(1239123, 12313));
calculate("e)", () => calc.division(123, -12));
calculate("f)", () => calc.division(313123, 0));
calculate("g)", () => calc.subtraction(10, 12));
calculate("h)", () => calc.subtraction(10.05, 0.25));
calculate("i)", () => calc.multiplication('xpto', 0));

function calculate(label, f) {
    try {
        let result = f();
        console.log(`${label} = ${result}`);
    } catch (e) {
        console.error(`${label} Error on ${f} = ${e}`);
    }
}