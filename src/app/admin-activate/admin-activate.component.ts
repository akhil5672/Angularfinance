import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-admin-activate',
  templateUrl: './admin-activate.component.html',
  styleUrls: ['./admin-activate.component.css']
})
export class AdminActivateComponent implements OnInit {
  status:boolean;

  constructor(private service:RegisterService,private router: ActivatedRoute) { }
  c:Customer=new Customer();

  ngOnInit(): void {
    this.service.GetByCustomerId(this.router.snapshot.params['customer_id']).subscribe((data)=>{
      this.c=data;
      console.log(this.c);
    })  
  }

  onSubmit() {
    debugger;
    this.c.isapproved = this.status;
    if (this.c.isapproved) {
      this.service.UpdateCustomer(this.router.snapshot.params['customer_id'], this.c).subscribe((data) => {
        console.log(data, "Customer Verified Successfully");
        debugger;
        if (data == 1) {
          this.service.PostEMIcard(this.c).subscribe((data) => {
            if (data == 1)

              alert("EMIcard generated sucessfully");
            else
              alert("EMIcard already exists for this user");
          })
        }
      })
    }

  }
}
