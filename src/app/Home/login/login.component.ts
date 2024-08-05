import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { JwtDto } from 'src/app/Models/Jwt';
import { Role } from 'src/app/Models/enum';
import { Person } from 'src/app/Models/person';
import { AdmineServiceService } from 'src/app/Service/admine-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private service: AdmineServiceService,
    private router: Router
  ) {

    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.valide();
  }

  valide() {
    this.formLogin.reset();
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const person: Person = this.formLogin.value;
      this.service.login(person).subscribe({
        next: (res: JwtDto) => {
          localStorage.setItem('jwtData', JSON.stringify(res));

          
          const decodedToken: any = jwtDecode(res.token);

         
          if (decodedToken.roles.includes(Role.ROLE_ADMIN)) {
            this.router.navigate(['/dashboard']);
          }else if (decodedToken.roles.includes(Role.ROLE_TECHNICIAN)) {
            this.router.navigate(['/dashboard']);
          } 
           else {
            this.router.navigate(['/main']);
          }
        },
        error: (err) => {
          alert(this.errorMessage = 'Login failed , try again.');
          console.error('Login error:', err);
        }
      });
    } else {
      this.errorMessage = 'all required fields.';
      console.log('Form is invalid.');
    }
    this.valide();
  }
}
