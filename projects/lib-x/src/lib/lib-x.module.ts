import { NgModule } from '@angular/core';
import { IgxGridModule } from '@infragistics/igniteui-angular';
import { LibXComponent } from './lib-x.component';



@NgModule({
  declarations: [
    LibXComponent
  ],
  imports: [
    IgxGridModule
  ],
  exports: [
    LibXComponent
  ]
})
export class LibXModule { }
