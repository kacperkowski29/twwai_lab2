function cacheSum(cache, arg1, arg2) {
    var key = "".concat(arg1, "_").concat(arg2);
    if (cache[key] !== undefined) {
        return cache[key];
    }
    else {
        var result = arg1 + arg2;
        cache[key] = result;
        return result;
    }
}
var myCache = {};
console.log(cacheSum(myCache, 2, 3)); //Suma 5
console.log(cacheSum(myCache, 2, 3)); //Pobiera wynik z pamięci podręcznej i zwraca 5
console.log(cacheSum(myCache, 4, 7)); // uma 11
console.log(cacheSum(myCache, 4, 7)); //Pobiera wynik z pamięci podręcznej i zwraca 11
