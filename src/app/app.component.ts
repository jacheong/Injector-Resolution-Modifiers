import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    LoggerService
  ]
})
export class AppComponent {
  title = 'dependency-injection';

  // @Optional is a resolution modifier that stops the NullInjectorException from being thrown if no provider was found in the Injector heirarchy
  // @Self only looks for an injector ONLY in its own provider
  // @SkipSelf skips its own injector and looks to the parent injector
  // @Host 
  constructor(
    @Self() private logger: LoggerService,
    @SkipSelf() private parentLogger: LoggerService
  ) {
    if (this.logger) {
      this.logger.prefix = 'App Component';
      this.logger.log("contructor init");
    }

    if (this.parentLogger) {
      this.parentLogger.log("contructor init");
    }
  }
}
