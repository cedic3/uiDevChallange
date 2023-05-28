import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent {

  searchValue: string = "";

  inputSection = new FormGroup({
    country: new FormControl(''),
  });

  print() {
    console.log(this.searchValue);
  }
}
