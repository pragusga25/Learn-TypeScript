import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public deserialize: (json: K) => T, public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse): void => {
      res.data.forEach((value: K): void => {
        this.models.push(this.deserialize(value));
      });

      this.trigger('change');
    });
  }
}