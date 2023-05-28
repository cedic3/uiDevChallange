import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Beer} from "../../models/beer";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  searchValue: string = "";

  selectedBeer: number = 1;

  beers = [] as Beer[];

  beersInSearchField = [] as Beer[];

  inputSection = new FormGroup({
    country: new FormControl(''),
    selectedBeer: new FormControl(''),
  });

  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.beerService.getBeers().subscribe(data => {
      this.beers = data;
      this.beersInSearchField = this.beers;
    })

  }

  changeList() {
    this.beersInSearchField = [];
    this.beers.forEach(element => {
      if (element.name.includes(this.searchValue)) {
        this.beersInSearchField.push(element);
      }
    })
    if (this.beersInSearchField.length == 0 && this.searchValue.length == 0) {
      this.beersInSearchField = this.beers;
    }
    this.selectedBeer = this.beersInSearchField[0].id;
  }

  openPicture() {
    var searchedBeer = this.beersInSearchField.find(element => {
      return element.id == this.selectedBeer
    });
    if (searchedBeer != undefined) {
      window.open(searchedBeer.image_url);
    }
  }
}
