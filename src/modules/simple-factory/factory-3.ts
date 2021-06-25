interface Product {
  method(): void;
}

class ConcreteProductA implements Product {
  method() {
    console.log('Method of ConcreteProductA');
  }
}

class ConcreteProductB implements Product {
  method() {
    console.log('Method of ConcreteProductB');
  }
}

export class ProductFactory {
  public static createProduct(type: 'A' | 'B'): Product {
    if (type === 'A') {
      return new ConcreteProductA();
    } else if (type === 'B') {
      return new ConcreteProductB();
    }

    return null;
  }
}
