import { Directive, Optional, Host, Self } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appParent]',
  providers: [
    // comment this out to trigger break the @Host resolution modifier in child directive
    LoggerService
  ]
})
export class ParentDirective {

  constructor(
    @Optional() @Self()private logger: LoggerService
  ) {
    if (this.logger) {
      this.logger.prefix = 'Parent Directive';
      this.logger.log("contructor init");
    }
  }

}
