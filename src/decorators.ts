/*
function Logger(constructor: Function) {
  console.log('Logger ran -> Logging...');
  console.log(constructor);
}
*/

/* @ Decorator Factory */
function Logger(logString: string) {
  console.log('LOGGER FACTORY');

  return function (constructor: Function) {
    console.log('Rendering logger');
    console.log(logString);
    console.log(constructor);
  };
}

// Advanced decorator func
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T,
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();

        console.log('Rendering template...');
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

@Logger('nigga logged decorator @LOGGER')
@WithTemplate('<h1>My person object</h1>', 'root')
class Person {
  name = 'ROLLS ROYCE';

  constructor() {
    console.log('calling constructor...');
    console.log('Creating person object....');
  }
}

const person = new Person();
console.log('lmaooo', person);

/* @ Decorator Uses */

/* @ Decorators on Properties */
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

/* @ Decorators on Accessors  */
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

/* @ Decorators on Methods */
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor,
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);

  // Returning new descriptor object in the end
  return {};
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  @Log3
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
}

const product1 = new Product('Hoodie', 399);
const product2 = new Product('Book', 39);
