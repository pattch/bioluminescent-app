import { NgModule } from '@angular/core';

import { SafePipe } from './safe-pipe';

// TODO: Consider making a pipes directory + module underneath this directory
@NgModule({
  declarations: [
    SafePipe
  ],
  exports: [
    SafePipe
  ],
  imports: [],
  providers: [],
})
export class SharedModule { }
