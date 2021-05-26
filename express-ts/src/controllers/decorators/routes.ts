import 'reflect-metadata';

function routeBinder(method: string): (path: string) => Function {
  return function (path: string): Function {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder('get');
export const post = routeBinder('post');
export const put = routeBinder('put');
export const del = routeBinder('delete');
export const patch = routeBinder('patch');
