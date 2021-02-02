import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {Product} from '../product';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  products:Product[] = [];

  constructor(private service:RegisterService,private router:ActivatedRoute, private route:Router) {
    
   }
  

  ngOnInit(): void {
    
    this.service.getAll().subscribe((data: Product[])=>{
      this.products = data;
      console.log(data);
      })
     console.log(this.products);
  }


}
