var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Le moteur de la voiture a démarré");
    };
    return Car;
}());
// Création d'une instance de Car
var myCar = new Car("Toyota", "Camry", 2022);
// Appel de la méthode start sur l'instance de Car
myCar.start();
// Call the start method on the instance of Car
myCar.start();
