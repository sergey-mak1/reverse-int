module.exports = function reverse (n) {
        let str;
        let str2 = '';
        str = String(Math.abs(n));
        for (i = str.length - 1; i >= 0; i--) {
            str2 += str[i];
        }
        return Number(str2);
    }

