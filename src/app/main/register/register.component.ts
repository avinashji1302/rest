import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MserviceService } from '../mservice.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private mservice: MserviceService , private route:Router) {}

  regsiterData = this.fb.group({

    name: [''],
    mobile: [''],
    email: [''],
    password: [''],
  });

  ngOnInit(): void {}

  onSubmit() {
    if (this.regsiterData.valid) {

      this.mservice.handleRegister(this.regsiterData.value).subscribe(
        (res) => {
          alert('Registerated Successfully');
          this.route.navigate(['/admin/'])

        },
        (error) => console.log(error)
      );
    } else {
      console.log('not valid');
    }
  }
}
