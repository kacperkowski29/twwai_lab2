function tab<T>(tablica1: T[], tablica2: T[]): T[] {
    return [...tablica1, ...tablica2];
}

const tablica1: number[] = [1, 2, 3];
const tablica2: number[] = [4, 5, 6];

const wynik: number[] = tab(tablica1, tablica2);
console.log(wynik);
