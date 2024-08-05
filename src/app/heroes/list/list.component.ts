import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Superman', 'Batman', 'Goku', 'Vegeta'];
  public deleteHero?: string;

  public removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }


}
