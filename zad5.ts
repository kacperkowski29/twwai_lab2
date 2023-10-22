type MyCache = {
    [key: string]: number;
};

function cacheSum(cache: MyCache, arg1: number, arg2: number): number {
    const key = `${arg1}_${arg2}`;

    if (cache[key] !== undefined)
    {
        return cache[key];
    }
    else
    {
        const result = arg1 + arg2;
        cache[key] = result;
        return result;
    }
}

const myCache: MyCache = {};

console.log(cacheSum(myCache, 2, 3)); //Suma 5
console.log(cacheSum(myCache, 2, 3)); //Pobiera wynik z pamięci podręcznej i zwraca 5

console.log(cacheSum(myCache, 4, 7)); // uma 11
console.log(cacheSum(myCache, 4, 7)); //Pobiera wynik z pamięci podręcznej i zwraca 11
