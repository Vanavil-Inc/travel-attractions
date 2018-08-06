import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttractionService } from '../../services/attraction.service';


@Component({
  selector: 'app-attraction-list-page',
  templateUrl: './attraction-list-page.component.html',
  styleUrls: ['./attraction-list-page.component.css']
})

export class AttractionListPageComponent implements OnInit {

  attraction = {};

  constructor(private _attractionService:AttractionService, private _router:Router){}

  ngOnInit() {
    this._attractionService.getAllAttraction()
    .subscribe((data) =>{
      this.attraction = data;
      console.log("####Attraction List", this.attraction);
    });
  }
}
