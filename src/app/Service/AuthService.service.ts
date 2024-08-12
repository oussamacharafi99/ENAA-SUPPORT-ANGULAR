import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isLoggedIn(): boolean {
    const storedJwtData = localStorage.getItem('jwtData');
    if (storedJwtData) {
      const jwtData = JSON.parse(storedJwtData);
      const token = jwtData.token;
      
      return !!token;
    }
    return false;
  }
}
