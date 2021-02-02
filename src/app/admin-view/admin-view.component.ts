import { Component, OnInit } from '@angular/core';
import {Reg} from '../reg';
import {RegisterService} from '../register.service';
import {ActivatedRoute,Router} from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
   user:Customer[]=[];
   

  constructor(private service:RegisterService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    debugger;
    this.service.GetAllCustomers().subscribe((data:any)=>{
      debugger;
      this.user = data;
      console.log(data);
      })
    }
    delete(customer_id)
    {
      this.service.DeleteCustomer(customer_id).subscribe();
      location.reload();
    }
}

