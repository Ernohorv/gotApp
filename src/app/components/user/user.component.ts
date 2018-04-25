import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DataService} from '../../services/data.service';
import {Characters} from './characters';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  address: {
    street: string,
    city: string,
    zip: string
  };
  hobbies: string[];
  characters: Observable<Characters[]>;
  character: Characters[];

  constructor(private http: HttpClient, private dataService: DataService) {
    console.log('constructor run');
  }

  ngOnInit() {
    console.log('ngOnInit run');
    this.name = 'John Doe';
    this.address = {
      street: '50 Main Street',
      city: 'Boston',
      zip: 'MA'
    };
    this.hobbies = ['1', '2', '3'];

    this.getCharacters();
    this.getCharacter();
  }

  getCharacters() {
    this.characters = this.dataService.getPost();
  }

  getCharacter() {
    this.dataService.getPostt().subscribe(
      data => this.character = data
    );
  }

  onClick() {
    this.name = 'Other name';
  }
  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.push(hobby);
    return false;
  }

}
