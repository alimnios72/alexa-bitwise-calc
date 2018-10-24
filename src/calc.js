const BitwiseCalculator = {
    and: function(number1, number2) {
        if (!number1 || !number2) {
            return null;
        }
        return number1 & number2;
    },
    or: function(number1, number2) {
        if (!number1 || !number2) {
            return null;
        }
        return number1 | number2;
    },
    not: function(number){
        if (!number) {
            return null;
        }
        return ~number;
    },
    xor: function(number1, number2){
        if (!number1 || !number2) {
            return null;
        }
        return number1 ^ number2;
    },
    leftShift: function(number, bits = 1) {
        if (!number) {
            return null;
        }
        return number << bits;
    },
    rightShift: function(number, logical = false, bits = 1) {
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
