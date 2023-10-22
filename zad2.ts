interface Book {
    title: string;
    author: string;
    publicationYear: number;
}

function sumPublicationYears(books: Book[]): number {
    let sum = 0;
    for (const book of books) {
        sum += book.publicationYear;
    }
    return sum;
}

const books: Book[] = [
    { title: "Książka 1", author: "Autor 1", publicationYear: 2000 },
    { title: "Książka 2", author: "Autor 2", publicationYear: 2010 },
    { title: "Książka 3", author: "Autor 3", publicationYear: 1995 },
];

const totalPublicationYears = sumPublicationYears(books);
console.log("Suma lat publikacji wszystkich książek: " + totalPublicationYears);
