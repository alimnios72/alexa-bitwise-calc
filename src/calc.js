const BitwiseCalculator = {
    and(number1, number2) {
        if (!number1 || !number2) {
            return null;
        }
        return number1 & number2;
    },
    or(number1, number2) {
        if (!number1 || !number2) {
            return null;
        }
        return number1 | number2;
    },
    not(number){
        if (!number) {
            return null;
        }
        return ~number;
    },
    xor(number1, number2){
        if (!number1 || !number2) {
            return null;
        }
        return number1 ^ number2;
    },
    leftShift(number, bits = 1) {
        if (!number) {
            return null;
        }
        return number << bits;
    },
    rightShift(number, logical = false, bits = 1) {
        if (!number) {
            return null;
        }
        if (logical) {
            return number >>> bits;
        }
        return number >> bits;
    }
};

exports.bitwiseCalc = BitwiseCalculator;
