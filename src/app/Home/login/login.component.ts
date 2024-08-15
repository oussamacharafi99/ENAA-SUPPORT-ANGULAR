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
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

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
      this.isLoading = true;
      const person: Person = this.formLogin.value;
      this.service.login(person).subscribe(
        (res) => {
          localStorage.setItem('jwtData', JSON.stringify(res));

          const decodedToken: any = jwtDecode(res.token);
          console.log('Decoded Token:', decodedToken);

          if (
            decodedToken.roles &&
            decodedToken.roles.includes(Role[Role.ROLE_ADMIN])
          ) {
            this.router.navigateByUrl('dashboard');
          } else if (
            decodedToken.roles &&
            decodedToken.roles.includes(Role[Role.ROLE_USER])
          ) {
            this.router.navigateByUrl('userDash');
          } else if (
            decodedToken.roles &&
            decodedToken.roles.includes(Role[Role.ROLE_TECHNICIAN])
          ) {
            this.router.navigateByUrl('technicianDash');
          } else {
            alert('Unauthorized role, please try again!');
            this.router.navigateByUrl('');
          }
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          alert('Username or password is incorrect. Please try again.');
          this.errorMessage = 'Username or password is incorrect.';
          console.log('Login error:', error);
        }
      );
    } else {
      this.errorMessage = 'All fields are required.';
      console.log('Form is invalid.');
    }
    this.valide();
  }
}
