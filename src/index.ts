import * as marky from "marky";

export const measure = (name: string = "") => {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (name.length === 0) {
      name = propertyKey;
    }

    marky.mark(name);

    // @ts-ignore
    descriptor.value.apply(this, arguments);

    marky.stop(name);
  };
};

export default measure;
