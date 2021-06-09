import { Injectable } from '@angular/core';

// Delete the injector to get the null provider exception
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  prefix = 'root';

  constructor() { }

  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
