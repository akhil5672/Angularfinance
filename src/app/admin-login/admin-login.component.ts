import { Component, OnInit } from '@angular/core';
import {Logincredentials} from '../logincredentials';
import {RegisterService} from '../register.service';
import {Router} from '@angular/router';
import {Adminloginresponse} from '../adminloginresponse';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  User:Logincredentials=new Logincredentials();
  constructor(private registerService:RegisterService,private router: Router) { }

  ngOnInit(): void {
  }

  Loginsubmit(){
    console.log(this.User);
    this.registerService.AdminLogin(this.User).subscribe((data)=>{ 
      if(data.StatusCode==1)
      {
        
        alert("Login successful"); 
        this.registerService.isUserLoggedIn=true;
        this.registerService.customerId=data.Admin_Username;
        localStorage.setItem("Admin_Username",data.Admin_Username);
        this.router.navigateByUrl('AdminView');
      }
      else
      {
        alert("Invalid login");
       // this.router.navigateByUrl('UserLogin');
      }
     })
    }

}
