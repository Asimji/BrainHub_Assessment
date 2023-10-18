import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product:any[]=[]

  constructor(private http:HttpClient){}
  

  ngOnInit(){
    this.http.get<any[]>('http://localhost:8000/favourite').subscribe(
      (res) => {
     this.product=res;
     },
     (error) => {
       console.log(error);
     }
   );
  }

  
  
}
