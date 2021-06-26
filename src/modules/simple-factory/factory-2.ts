interface Transport {
  status: string;
  move(): void;
}

class Car implements Transport {
  status: '';
  public move(): void {
    console.log('Moving the car!');
  }
}

class Bicycle implements Transport {
  status: '';
  public move(): void {
    console.log('Moving the bicycle!');
  }
}

class Plane implements Transport {
  status: '';
  public move(): void {
    console.log('Flying the plane!');
  }
}

abstract class TransportAbstractFactory {
  public abstract createVehicle(): Transport;

  public moveVehicle(): void {
    const myVehicle = this.createVehicle();
    myVehicle.move();
  }
}

export class PlaneFactory extends TransportAbstractFactory {
  public createVehicle(): Transport {
    return new Plane();
  }
}

export class CarFactory extends TransportAbstractFactory {
  public createVehicle(): Transport {
    return new Car();
  }
}

export class BicycleFactory extends TransportAbstractFactory {
  public createVehicle(): Transport {
    return new Bicycle();
  }
}
