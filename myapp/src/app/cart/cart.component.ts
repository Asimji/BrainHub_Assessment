import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product:any[]=[]

  constructor(private http:HttpClient,private router:Router){}
  

  ngOnInit(){
    this.http.get<any[]>('https://brainhub.onrender.com/favourite').subscribe(
      (res) => {
     this.product=res;
     },
     (error) => {
       console.log(error);
     }
   );
  }
back(){
  this.router.navigate(['/'])
}
  
  
}
