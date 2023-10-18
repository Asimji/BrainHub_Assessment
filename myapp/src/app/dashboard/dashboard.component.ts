
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
product:any[]=[];
count:number=0

  constructor(private http:HttpClient,private router:Router){}
   
  ngOnInit() {
    this.http.get<any[]>('http://localhost:8000/products').subscribe(
      (res) => {
       this.product=res
      },
      (error) => {
        console.log(error);
      }
    );
   
  }
 render(){

   this.http.get<any[]>('http://localhost:8000/favourite').subscribe(
     (res) => {
    this.count=res.length
    },
    (error) => {
      console.log(error);
    }
  );
    }

cartClick(){
  this.router.navigate(['/cart'])
}

  logout() {
    localStorage.removeItem('brain');
    this.router.navigate(['/login']);
  }

  handleCart(id:number){
   
    this.http.get<any[]>(`http://localhost:8000/favourite`).subscribe(
      (favorites) => {
        const existingItem = favorites.find((item) => item.id === id);
        if (existingItem) {
          alert('Item already exists in the cart');
        } else {
  
          let selectedProduct = this.product.find((item) => item.id === id);
          this.http.post('http://localhost:8000/favourite', selectedProduct).subscribe(
            (response) => {
              console.log('Item added to favorites:', response);
  
              this.http.get<any[]>(`http://localhost:8000/favourite`).subscribe(
                (favorites) => {
                  this.count = favorites.length;
                },
                (error) => {
                  console.error('Error fetching favorite items:', error);
                }
              );
            },
            (error) => {
              console.error('Error adding item to favorites:', error);
            }
          );
        }
      },
      (error) => {
        console.error(error);
      }
    );
  
   }
}
