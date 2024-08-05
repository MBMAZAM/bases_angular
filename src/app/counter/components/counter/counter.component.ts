import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter: {{ counter }}</h3>

    <button (click)="eventoButton(-1)" class="btn btn-primary">-1</button>

    <button (click)="eventoButton()" class="btn btn-primary mx-3">Resetear</button>

    <button (click)="eventoButton(+1)" class="btn btn-primary">+1</button>
  `,
})
export class CounterComponent {

  public counter: number = 10;

  public eventoButton(value?: number): void {

    if (value === undefined) {
      this.counter = 10;
    } else if (this.counter === 0) {
      return;
    } else {
      this.counter += value;
    }

  }


}
