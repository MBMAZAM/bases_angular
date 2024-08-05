import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    // Components
    CounterComponent
  ],
  exports: [
    // Components
    CounterComponent
  ],
  imports: [
    // Modules
  ],
  providers: [
    // Services
  ]
})
export class CounterModule {
}
