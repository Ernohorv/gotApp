import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CharactersService} from '../../services/characters.service';
import {Characters} from './characters';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  characters: Observable<Characters[]>;
  character: Characters[];
  char: Characters;
  ss: string[];

  constructor(private http: HttpClient,
              private characterService: CharactersService) {
    console.log('constructor run');
  }

  ngOnInit() {
    console.log('ngOnInit run');

    this.getCharacters();
    this.getAllCharacters();
    this.getCh();
  }

  getCharacters() {
    this.characters = this.characterService.getPostt();
  }

  getAllCharacters() {
    /*for(let i = 100; i < 120; ++i) {
      this.characterService.getAllCharactersName(i).subscribe(
        data => this.ss.push(JSON.stringify(data.name))
      );
      //this.character.push(this.char);
    }*/
    this.characterService.getAllCharactersName(200).subscribe(
      data => this.char = data
    );
  }
  getCh() {
    this.character.push(this.char);
  }
}
