function Logger(constructor: Function) {
  console.log('Logger ran -> Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'COLSON';

  constructor() {
    console.log('calling constructor...');
    console.log('Creating person object....');
  }
}
