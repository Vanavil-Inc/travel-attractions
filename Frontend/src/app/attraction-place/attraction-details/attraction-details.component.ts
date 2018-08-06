import { Component, OnInit, ViewChild } from '@angular/core';
import { AttractionService } from '../../services/attraction.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-attraction-details',
  templateUrl: './attraction-details.component.html',
  styleUrls: ['./attraction-details.component.css']
})

export class AttractionDetailsComponent implements OnInit {

  attraction: any;

  displayedColumns = ['#','title', 'placeName','placeAddress','description','websiteLink','contact','email','active'];
  dataSource = new MatTableDataSource(this.attraction);

 
  @ViewChild(MatPaginator) paginator : MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private _attractionService: AttractionService, 
              private _router: Router, 
              private _http: Http, 
              private httpClient : HttpClient
            ) { }

  ngOnInit() {
    this._attractionService.getAllAttraction()
    .subscribe((data) =>{
      this.attraction = data;
      console.log("####Attraction List", this.attraction);
      this.dataSource = new MatTableDataSource(this.attraction);
    });
  }

  deleteAttraction(id){
    this._attractionService.delete(id)
    .subscribe((data) =>{
      this._router.navigate(['/login']);
    },(err) =>{
      console.log(err);
    });
  }
}