import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Login Page';
  body:  string = 'This is the login page';
  message: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  login(): Observable<Hero> {
  console.log('------ user name -----------');
  var obj = {};
  obj.usernm = this.username;
  obj.pass = this.password;
  console.log(obj);
  if(obj.usernm && obj.pass){
    this._stateService.setMessage(obj)
    .subscribe(
        data => {this.countries = data, console.log(data); alert(data.message);}
        error => {this.error = "Authentication failed."; alert(this.error);}
     );
  } else {
    alert('Please provide the valid params and try again..!');
  }
    
  }
}
