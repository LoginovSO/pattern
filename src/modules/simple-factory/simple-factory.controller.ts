import { Controller, Get } from '@nestjs/common';
import { clientCode, ConcreteCreatorA, ConcreteCreatorB } from './factory-1';
import { CarFactory, PlaneFactory } from './factory-2';
import { ProductFactory } from './factory-3';

@Controller('simple-factory')
export class SimpleFactoryController {
  @Get('factory-1')
  factory1(): any {
    clientCode(new ConcreteCreatorA());
    clientCode(new ConcreteCreatorB());
  }

  @Get('factory-2')
  factory2(): any {
    const planes = new PlaneFactory();
    const cars = new CarFactory();

    planes.moveVehicle();
    cars.moveVehicle();
  }

  @Get('factory-3')
  factory3(): any {
    const ProductA = ProductFactory.createProduct('A');
    const ProductB = ProductFactory.createProduct('B');

    ProductA.method();
    ProductB.method();
  }
}
