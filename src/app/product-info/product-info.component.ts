import { Component, OnInit } from '@angular/core';
import{Product} from '../product';
import{RegisterService} from '../register.service';
import{ActivatedRoute} from '@angular/router';
import { EMItypes } from '../emitypes';
import{Orderattrbutes} from '../orderattrbutes';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})

export class ProductInfoComponent implements OnInit {
  product:Product=new Product();
  emitypes:EMItypes[]= [];
  emivar:EMItypes;
  emistatus:boolean=false;
  emiprice:string;
  order:Orderattrbutes=new Orderattrbutes();
  

  constructor( private service:RegisterService,public router:ActivatedRoute)
   { 

  }

  ngOnInit(): void {
    debugger;
 this.service.GetByProductId(this.router.snapshot.params['product_id']).subscribe((data)=>{
this.product=data;
console.log(data);
 })
 this.service.GetEMItypes().subscribe((data: EMItypes[])=>{
  this.emitypes = data;
  console.log(data);
  })
 }
  onSubmit()
  {
    this.emistatus=true;
    this.emiprice=(this.product.product_price/this.emivar.EMI_tenure).toFixed(2);
    console.log(this.emivar);
  }

  placeorder()
  {
    this.order.EMItype_id=this.emivar.EMItype_id;
    this.order.customer_id=7;
    this.order.product_id=this.product.product_id;
this.service.Postplaceorder(this.order).subscribe((data)=>{
if(data==1)
{
 alert("Order placed successfully") 

}
else if(data==-1)
{
  alert("Customer Details not found")
}
else if(data==0)
{
  alert("Insufficient balance in card")
}
else
{
  alert("Could not place order")
}
})
  }
}
