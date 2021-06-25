interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  public operation(): string {
    return 'ConcreteProductA';
  }
}

class ConcreteProductB implements Product {
  public operation(): string {
    return 'ConcreteProductB';
  }
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return product.operation();
  }
}

export class ConcreteCreatorA extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

export class ConcreteCreatorB extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

export function clientCode(creator: Creator) {
  console.log('start');
  console.log(creator.someOperation());
  console.log('finish');
}
