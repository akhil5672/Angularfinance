import { Component } from '@angular/core';
import {RegisterService} from './register.service';
import {Router,NavigationEnd,Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProjectTrial1';

  constructor(private router: Router,
    public registerService:RegisterService
    ){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setUserDataLocal();
      }
    });
  }
  setUserDataLocal(){
    if(!!localStorage.getItem('customerId')) {
      this.registerService.isUserLoggedIn = true;
      this.registerService.customerId = JSON.parse(localStorage.getItem('customerId'));
    }
  }
  clkLogOut(){
    this.registerService.isUserLoggedIn=false;
    this.registerService.customerId="";
    localStorage.clear();
    this.router.navigateByUrl("/UserLogin");
  }

}
