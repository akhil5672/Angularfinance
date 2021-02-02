import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RegisterService } from '../register.service';
import {FormGroup,FormControl} from '@angular/forms';
import {Reg} from '../reg';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  bankList:Bank[] = [
    new Bank('AXIS'),
    new Bank('Bank of Baroda'),
    new Bank('Bank of India'),
    new Bank('Citi Bank'),
    new Bank('HDFC'),
    new Bank('ICICI'),
    new Bank('Kotak Mahindra'),
    new Bank('PNB'),
    new Bank('SBI'),
    new Bank('Union Bank'),
  ];

  register:Reg= new Reg();
  // registerForm=new FormGroup({
  //           customer_dob:new FormControl(''),
  //           customer_name: new FormControl(''),
  //           user_name: new FormControl(''),
  //           user_password: new FormControl(''),
  //           phone_number: new FormControl(''),
  //           user_email:new FormControl(''),
  //           user_address: new FormControl(''),
  //           bank_id: new FormControl(''),
  //           pan_number: new FormControl(''),
  //           IFSC_code: new FormControl(''),
  //           account_number: new FormControl(''),
  //           cardtype_id: new FormControl(''),
  //           haspaid: new FormControl(''),
  //           isapproved: new FormControl(''),
  //     })



  constructor(private service:RegisterService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(f){
        console.log(f.value);
        debugger;
           this.service.register(this.register).subscribe((data)=>
           {
             if(data==-1)
             alert("Username already exists");
             else if(data==0)
             alert("Email already exists");
             else if(data==-2)
             alert("Phone number exists");
             else
             {
             alert("Registration is successful");
             this.route.navigateByUrl('UserLogin');
             }
           }
              
            )

    }
}

export class Bank {
  name:string;
 
  constructor(name:string) {
    this.name=name;
  }
}




// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// import { RegisterService } from '../register.service';
//  import {FormGroup,FormControl} from '@angular/forms';



// @Component({
//   selector: 'app-sample',
//   templateUrl: './sample.component.html',
//   styleUrls: ['./sample.component.css']
// })
// export class SampleComponent implements OnInit {

//   registerForm=new FormGroup({
//         //customer_id: new FormControl(''),
//         customer_dob:new FormControl(''),
//         customer_name: new FormControl(''),
//         user_name: new FormControl(''),
//         user_password: new FormControl(''),
//         // confirm_password: new FormControl(''),
//         phone_number: new FormControl(''),
//         user_email:new FormControl(''),
//         user_address: new FormControl(''),
//         bank_id: new FormControl(''),
//         pan_number: new FormControl(''),
//         IFSC_code: new FormControl(''),
//         account_number: new FormControl(''),
//         cardtype_id: new FormControl(''),
//         haspaid: new FormControl(''),
//         isapproved: new FormControl(''),
//       })

  
//       constructor(private service:RegisterService,private router:ActivatedRoute) {}

//   ngOnInit(): void {
//   }

//   submitForm(){
//     console.log(this.registerForm.value)
//     this.registerForm.value.bank_id=1;
//     this.registerForm.value.cardtype_id=1;
//         this.service.register(this.registerForm.value).subscribe((data)=>
//           console.log(data,"Registration Created Successfully")
//         )
    
//   }


// }



// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// import { RegisterService } from '../register.service';
// import {FormGroup,FormControl} from '@angular/forms';

// import {Reg} from 'src/app/reg';
 
// @Component({
//      selector: 'app-sample',
//      templateUrl: './sample.component.html',
//      styleUrls: ['./sample.component.css']
//    })
//    export class SampleComponent implements OnInit {

//   registerForm=new FormGroup({
//     customer_id: new FormControl(''),
//     customer_name: new FormControl(''),
//     user_name: new FormControl(''),
//     user_password: new FormControl(''),
//     confirm_password: new FormControl(''),
//     phone_number: new FormControl(''),
//     user_email:new FormControl(''),
//     user_address: new FormControl(''),
//     bank_id: new FormControl(''),
//     IFSC_code: new FormControl(''),
//     account_number: new FormControl(''),
//     cardtype_id: new FormControl(''),
//     haspaid: new FormControl(''),
//     isapproved: new FormControl(''),
//   })
 
//   constructor(private service:RegisterService,private router:ActivatedRoute) {}
 
//    ngOnInit(): void {
//      console.log("HEllo");
//   }
//   get customer_id() {
//     return this.registerForm.get('customer_id');
//   } 
 
//   get customer_name() {
//     return this.registerForm.get('customer_name');
//   } 
 
//   get user_name() {
//     return this.registerForm.get('user_name');
//   } 
 
//   get user_password() {
//     return this.registerForm.get('user_password');
//   } 
//   get confirm_password() {
//     return this.registerForm.get('confirm_password');
//   } 
 
//   get phone_number() {
//     return this.registerForm.get('phone_number');
//   } 
//   get user_email() {
//     return this.registerForm.get('user_email');
//   } 
//   get user_address() {
//     return this.registerForm.get('user_address');
//   } 
//   get bank_id() {
//     return this.registerForm.get('bank_id');
//   } 
//   get IFSC_code() {
//     return this.registerForm.get('IFSC_code');
//   } 
//   get account_number() {
//     return this.registerForm.get('account_number');
//   } 
//   get cardtype_id() {
//     return this.registerForm.get('cardtype_id');
//   } 
//   get haspaid() {
//     return this.registerForm.get('haspaid');
//   } 
//   get isapproved() {
//     return this.registerForm.get('isapproved');
//   } 
//   get pan_number() {
//     return this.registerForm.get('pan_number');
//   } 
 
//   submitForm(){
//     this.service.register(this.registerForm.value).subscribe((data)=>
//       console.log(data,"Registration Created Successfully")
//     )

//   }
   
//   }
