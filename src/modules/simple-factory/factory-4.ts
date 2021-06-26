interface IVehicle {
  takeVehicle(): void;
  backVehicle(): void;
}

/**
 * Class presenting a vehicle for rent
 */
class Vehicle implements IVehicle {
  type: string;
  model: string;
  isVehicleInRent: boolean;
  /**
   * Create a vehicle for rent
   * @param {String} model - specifies a model of vehicle
   */
  constructor(model) {
    this.model = model;
    this.isVehicleInRent = false;
  }

  /**
   * Take a vehicle for rent
   */
  takeVehicle() {
    this.isVehicleInRent = true;
    console.log(`${this.type} ${this.model} in rent from now.`);
  }

  /**
   * Back the vehicle in rental office
   */
  backVehicle() {
    this.isVehicleInRent = false;
    console.log(`${this.type} ${this.model} is in rental list.`);
  }
}

/**
 * Class presenting a car
 * @extends Vehicle
 */
class Car extends Vehicle {
  /**
   * Create a car for rent
   * @param {String} model - model of a car for rent
   */
  constructor(model) {
    super(model);
    this.type = 'Car';
    console.log(`Create a ${this.type} of model: ${this.model}`);
  }
}

/**
 * Class presenting a bicycle
 * @extends Vehicle
 */
class Bicycle extends Vehicle {
  /**
   * Create a bicycle for rent
   * @param {String} model - model of a bicycle for rent
   */
  constructor(model) {
    super(model);
    this.type = 'Bicycle';
  }
}

/**
 * Class presenting a rental agency which specifies on concrete vehicle type
 */
class SpecializedRentalAgency {
  /**
   * Add specific vehicle type (factory method)
   * @abstract
   */
  addVehicle(model?: string): IVehicle {
    throw new Error('Should be implemented');
  }

  /**
   * Lend vehicle for concrete person
   */
  lendVehicle(model) {
    const vehicle = this.addVehicle(model);
    vehicle.takeVehicle();
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(vehicle), 1000),
    ).then(vehicle.backVehicle.bind(vehicle));
  }
}

/**
 * Class presenting a car rental agency
 */
export class CarRentalAgency extends SpecializedRentalAgency {
  /**
   * Factory method creates a simple cars
   * @param {String} model - model of a car to rent
   */
  addVehicle(model) {
    console.log('Call implemented factory method for type Car');
    return new Car(model);
  }
}

/**
 * Class presenting a bicycle rental agency
 */
export class BicycleRentalAgency extends SpecializedRentalAgency {
  /**
   * Factory method creates a simple bicycles
   * @param {String} model - model of a bicycle to rent
   */
  addVehicle(model) {
    console.log('Call implemented factory method for type Bicycle');
    return new Bicycle(model);
  }
}
