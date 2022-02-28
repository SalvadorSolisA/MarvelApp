import { Component, OnInit } from '@angular/core';
import { CharacterApiService } from "./character/shared/character-api.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private characterService: CharacterApiService) { }

  allCharacters!: Observable<any>;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterService.getAllCharacters();
  }

}
