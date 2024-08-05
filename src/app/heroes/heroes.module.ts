import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from './list/list.component';





@NgModule({
  declarations: [
    // ListComponent
    HeroComponent,
    ListComponent



  ],
  exports: [
    HeroComponent,
    ListComponent


  ],
  imports: [
    // Modules
    CommonModule

  ],
  providers: [
    // Services
  ]
})
export class HeroesModule {

}
