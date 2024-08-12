import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { AdmineServiceService } from 'src/app/Service/admine-service.service';
import { PersonServiceService } from 'src/app/Service/person-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formAddUser!: FormGroup;

  constructor(private service: PersonServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      id: [0], 
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      tickets: [[]],
      materials: [[]]
    });
  }

  addUser(): void {
    if (this.formAddUser.valid) {
      const newUser: User = this.formAddUser.value;
      this.service.add_user(newUser).subscribe((data: any) => {
        console.log('User added successfully:', data);
        this.formAddUser.reset();
      });
    }
    this.formAddUser = this.fb.group({
      id: [0], 
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      tickets: [[]],
      materials: [[]]
    });
  }
}
