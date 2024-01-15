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

@WithTemplate('<h1>My person object</h1>', 'root')
@Logger('nigga logged decorator @LOGGER')
class Person {
  name = 'ROLLS ROYCE';

  constructor() {
    console.log('calling constructor...');
    console.log('Creating person object....');
  }
}

const person = new Person();
console.log('lmaooo', person);
