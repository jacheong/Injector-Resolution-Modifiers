import { Directive, Optional, Host } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  // @Host Resolution modifiers restricts the scope of the node injection heirarchy to host components view. The most parent element in the view.
  constructor(
    @Host() private logger: LoggerService
  ) {
    if (this.logger) {
      this.logger.log("contructor init");
    }
  }

}
