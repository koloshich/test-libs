import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';
import {Lib1Module} from 'lib1';
import {Lib3Module} from 'lib3';

@NgModule({
  declarations: [Lib2Component],
  imports: [
    Lib1Module,
      Lib3Module
  ],
  exports: [Lib2Component]
})
export class Lib2Module { }
