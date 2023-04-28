function calculate(expression) {
    let result = 0;
    let operator = '+';
    let numBuffer = '';
    const stack = [];
    let isUnaryMinus = true;

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (/[\d.]/.test(char)) {
            numBuffer += char;
            isUnaryMinus = false;
        } else if (char === '-') {
            if (i === 0 || /[\+\-\*\/\(]/.test(expression[i - 1])) {
                isUnaryMinus = true;
            } else if (isUnaryMinus) {
                operator = '-';
                isUnaryMinus = false;
            } else {
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
                    numBuffer = '';
                }
                operator = '-';
            }
        } else {
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
                numBuffer = '';
            }
            isUnaryMinus = true;
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
            } else if (/[\+\-\*\/]/.test(char)) {
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
