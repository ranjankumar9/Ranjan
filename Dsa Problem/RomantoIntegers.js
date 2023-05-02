function romen(s) {
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let rom = ["M", "CN", "D", "CD", "C", "XC","L","XL", "X", "IX", "V", "IV", "I"]
    let res = "";

    while (s != 0) {
        for (let i = 0; i < val.length; i++) {
            if (s >= val[i]) {
                res += rom[i]
                s -= val[i];
                break;
            }
        }
    }
    return res;
}
console.log(romen(7))