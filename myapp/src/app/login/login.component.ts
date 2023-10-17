import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email="";
  password="";
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
   
    if (this.email === 'admin@gmail.com' && this.password === 'Abcd@1234') {
      // Successful login, navigate to the dashboard
      this.router.navigate(['/dashboard']);
    } else {
    alert("Invalid UserName or Password")
    }
     
    
  }
}
