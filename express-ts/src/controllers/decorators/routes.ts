import 'reflect-metadata';

export function get(
  path: string
): (target: any, key: string, desc: PropertyDescriptor) => void {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    Reflect.defineMetadata('path', path, target, key);
  };
}
