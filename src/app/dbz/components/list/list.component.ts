import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterList: Character[] = [
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegeta',
      power: 9000
    },
  ];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter<number>();


  public onDeleteCharacter(index: number): void {
    console.log('deleteCharacter', index);
    this.onDelete.emit(index);
  }




}
