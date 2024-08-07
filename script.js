const VehicleFactory = (function() {
    const VehiclePrototype = {
        init(make, model) {
            this.make = make;
            this.model = model;
            return this;
        },
        getDescription() {
            return `${this.make} ${this.model}`;
        }
    };

    function VehicleFactory(make, model) {
        let vehicle = Object.create(VehiclePrototype);
        return vehicle.init(make, model);
    }

    return {
        createVehicle: VehicleFactory,
        VehiclePrototype: VehiclePrototype
    };
})();

const car = VehicleFactory.createVehicle('Toyota', 'Corolla');
const bike = VehicleFactory.createVehicle('Yamaha', 'MT-07');

console.log(car.getDescription());
console.log(bike.getDescription());

// Проверка прототипного наследования
console.log(Object.getPrototypeOf(car) === VehicleFactory.VehiclePrototype);
console.log(Object.getPrototypeOf(bike) === VehicleFactory.VehiclePrototype);
