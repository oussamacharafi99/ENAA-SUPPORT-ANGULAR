// add-panne.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PanneServiceService } from 'src/app/Service/panne-service.service';

@Component({
  selector: 'app-add-panne',
  templateUrl: './add-panne.component.html',
  styleUrls: ['./add-panne.component.css']
})
export class AddPanneComponent implements OnInit {
  formPanne!: FormGroup;

  constructor(private fb: FormBuilder, private service: PanneServiceService) { }

  ngOnInit(): void {
    this.formPanne = this.fb.group({
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.formPanne.valid) {
      this.service.add_pannes(this.formPanne.value).subscribe();
    }
    this.formPanne = this.fb.group({
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
