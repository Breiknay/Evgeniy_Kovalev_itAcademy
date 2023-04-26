let primer= "2+1)";
function calculate(expression) {
    let result = 0;
    let operator = '+';
    let numBuffer = '';
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (/\d|\./.test(char)) {
            numBuffer += char;
        } else {

            const num = parseFloat(numBuffer);
            console.log(num)
            if (!isNaN(num)) {
                switch (operator) {
                    case '+':
                        result += num;
                        break;
                    case '-':
                        result -= num;
                        break;
                    case '*':
                        result *= num;
                        break;
                    case '/':
                        result /= num;
                        break;
                }

                numBuffer = '';
            }

            if (char === '(') {
                stack.push(result);
                stack.push(operator);
                result = 0;
                operator = '+';
            } else if (char === ')') {
                const prevOperator = stack.pop();
                const prevResult = stack.pop();

                switch (prevOperator) {
                    case '+':
                        result = prevResult + result;
                        break;
                    case '-':
                        result = prevResult - result;
                        break;
                    case '*':
                        result = prevResult * result;
                        break;
                    case '/':
                        result = prevResult / result;
                        break;
                }
            } else if (char === '+' || char === '-' || char === '*' || char === '/') {
                operator = char;
            }
        }
    }

    const num = parseFloat(numBuffer);

    if (!isNaN(num)) {
        switch (operator) {
            case '+':
                result += num;
                break;
            case '-':
                result -= num;
                break;
            case '*':
                result *= num;
                break;
            case '/':
                result /= num;
                break;
        }
    }

    return result;
}
console.log(calculate(primer))