interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Le moteur de la voiture a démarré");
    }
}

// Création d'une instance de Car
const myCar = new Car("Hyundai", "Tucson", 2022);

// Appel de la méthode start sur l'instance de Car
myCar.start();

// Call the start method on the instance of Car
myCar.start();
