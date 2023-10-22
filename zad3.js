var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function tab(tablica1, tablica2) {
    return __spreadArray(__spreadArray([], tablica1, true), tablica2, true);
}
var tablica1 = [1, 2, 3];
var tablica2 = [4, 5, 6];
var wynik = tab(tablica1, tablica2);
console.log(wynik);
