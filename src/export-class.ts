export class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

export class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

export class Greeter {
    private readonly greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
