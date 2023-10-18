import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
  
    const token = localStorage.getItem('brain');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false; 
    }
  }

  constructor(private router: Router) {}
}