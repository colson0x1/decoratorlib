"use strict";
/*
function Logger(constructor: Function) {
  console.log('Logger ran -> Logging...');
  console.log(constructor);
}
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* @ Decorator Factory */
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log('Rendering logger');
        console.log(logString);
        console.log(constructor);
    };
}
// Advanced decorator func
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('Rendering template...');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'ROLLS ROYCE';
        console.log('calling constructor...');
        console.log('Creating person object....');
    }
};
Person = __decorate([
    Logger('nigga logged decorator @LOGGER'),
    WithTemplate('<h1>My person object</h1>', 'root')
], Person);
const person = new Person();
console.log('lmaooo', person);
/* @ Decorator Uses */
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
}
const product1 = new Product('Hoodie', 399);
const product2 = new Product('Book', 39);
