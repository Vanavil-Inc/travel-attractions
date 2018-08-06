import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private formSubmitAttempt: boolean;

  loginForm : FormGroup = new FormGroup({
     email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  constructor(private router: Router,private _user:UserService, private _formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  moveToRegister(){
    this.router.navigate(['/register']);
  }
  
  loginUser(){
    if(!this.loginForm.valid){
      console.log('Invaliad');
      return;
    }
    this._user.login(JSON.stringify(this.loginForm.value))
      .subscribe(
        data=> {console.log(data);
        
        this.router.navigate(['/userhome']);},
        error=> console.error(error)
      ) 
      // this.formSubmitAttempt = true; 
    // console.log(JSON.stringify(this.loginForm.value));
  } 
}
