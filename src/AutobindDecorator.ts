/* @ Advanced usecase of Decorator */
/* @ Real life application */
/* @ AutobindDecorator */

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = 'Yo! THIS WORKS!!!';

  @Autobind
  showMessage() {
    console.log(`Nigga: ${this.message}`);
  }
}

const p = new Printer();
// p.showMessage();

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage);
