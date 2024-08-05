import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {




  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 9000
    },
    {
      id: uuidv4(),
      name: 'Trunks',
      power: 800
    },
    {
      id: uuidv4(),
      name: 'Gohan',
      power: 700
    },
    {
      id: uuidv4(),
      name: 'Piccolo',
      power: 600
    },
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 500
    },
  ];


  public onNewCharacter(character: Character): void {

    const newCharacter: Character = {
      id: uuidv4(),
      ...character
    }

    this.characters.push(newCharacter);
  }

  /// Esto funciona con la eliminación de la posición del array (splice)
  // public onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }



}
