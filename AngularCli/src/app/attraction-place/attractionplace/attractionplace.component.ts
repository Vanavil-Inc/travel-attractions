import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-attractionplace',
  templateUrl: './attractionplace.component.html',
  styleUrls: ['./attractionplace.component.css']
})
export class AttractionplaceComponent implements OnInit {

  attraction: any;

  attractionPlaceForm : FormGroup = new FormGroup({
    attractionid: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    img: new FormControl(null, Validators.required),
    placeName: new FormControl(null, Validators.required),
    placeAddress: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required), 
    latitude: new FormControl(null, Validators.required),
    longitude: new FormControl(null, Validators.required),
    websiteLink: new FormControl(null, Validators.required),
    contact: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
  });

  constructor(private router:Router,
    private _userService: UserService,private _http: HttpClient) {
   }
  ngOnInit() {
  }

  handleFileInput(){

    
  }
   attractionPlace(){
      if(!this.attractionPlaceForm.valid){
        console.log('Invalid form');
        return;
      }
      this._userService.attractionDetails(this.attractionPlaceForm.value)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/attraction-details']);
        },
        (error)=>{
          console.log(error);
        }
      );
      // console.log(JSON.stringify(this.registerForm.value));
   }

}
