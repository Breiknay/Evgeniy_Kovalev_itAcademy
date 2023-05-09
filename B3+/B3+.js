function calculate(expression) {
    let tokens = expression.match(/(\d+(\.\d+)?)|([()+\-*/])/g);

    function peek() {
        if (tokens) {
            return tokens[0];
        }

    }

    function get() {
        if (tokens) {
            return tokens.shift();
        }
    }

    function parsePrimaryExpression() {
        let token = get();

        if (/\d+(\.\d+)?/.test(token)) {
            return parseFloat(token);
        } else if (token === '(') {
            let expr = parseExpression();
            if (get() !== ')') {
                printError("Error", "Пожалуйста, введите правильное значение");
                return
            }
            return expr;
        } else if (token === '-') {
            return -parsePrimaryExpression();
        } else {
            printError("Error", "Пожалуйста, введите правильное значение");
            return
        }
    }

    function parseMultiplicativeExpression() {
        let expr = parsePrimaryExpression();
        while (/[*/]/.test(peek())) {
            let op = get();
            let rhs = parsePrimaryExpression();
            if (op === '*') {
                expr *= rhs;
            } else {
                expr /= rhs;
            }
        }

        return expr;
    }

    function parseExpression() {
        printError("Error", "");
        let expr = parseMultiplicativeExpression();
        while (/[-+]/.test(peek())) {
            let op = get();
            let rhs = parseMultiplicativeExpression();
            if (op === '+') {
                expr += rhs;
            } else {
                expr -= rhs;
            }
        }

        return expr;
    }

    return parseExpression();
}

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
    document.getElementById(elemId).style.cssText = 'color: red;display: inline-block; text-align: right;';
}
