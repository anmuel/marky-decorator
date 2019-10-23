import * as marky from "marky";

export const measure = (name: string = "") => {
  // The function statement is needed for the arguments reference in the body
  // tslint:disable-next-line:only-arrow-functions
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (name.length === 0) {
      name = propertyKey;
    }

    marky.mark(name);

    descriptor.value.apply(target, arguments);

    marky.stop(name);
  };
};

export default measure;
