# marky-decorator [![NPM](https://nodei.co/npm/marky-decorator.png?compact=true)](https://npmjs.org/package/marky-decorator) [![Build Status](https://travis-ci.org/anmuel/marky-decorator.svg?branch=master)](https://travis-ci.org/anmuel/marky-decorator)

> A method-decorator for [marky](https://github.com/nolanlawson/marky#readme) to easily measure a method's performance.

## Usage

```
npm install --save marky-decorator
``` 

```typescript
class MyClass {
  // the measurement reference name will equal the method name
  @measure()
  public myMethod() {
    // do some tasks
  }

  @measure('custom_measurement_identifier')
  public anotherMethod() {
    // ...
  }
}

const myInstance = new MyClass();
// this will call marky.mark() before and marky.stop() after the method
myInstance.myMethod();
```

Reference: https://github.com/nolanlawson/marky
