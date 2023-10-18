import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user={email:"", password:""}
 

  constructor( private router:Router) {}

  login() {
    if (this.user.email === 'admin@gmail.com' && this.user.password === 'Abcd@1234') {
      localStorage.setItem('brain', 'true');
      this.router.navigate(['/'])
    } else {
    alert("Invalid UserName or Password")
    }
     
    
  }
}
