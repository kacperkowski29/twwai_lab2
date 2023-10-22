class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return "Brak dźwięku";
    }
}

class Dog extends Animal {
    makeSound(): string {
        return "Hau Hau!";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Miau Miau!";
    }
}

// Przykłady użycia
const myDog = new Dog("Burek");
console.log(`${myDog.name} robi dźwięk: ${myDog.makeSound()}`);

const myCat = new Cat("Filemon");
console.log(`${myCat.name} robi dźwięk: ${myCat.makeSound()}`);
