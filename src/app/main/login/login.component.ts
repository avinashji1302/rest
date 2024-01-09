import { Component, OnInit } from '@angular/core';
import { MserviceService } from '../mservice.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private mservice: MserviceService,
    private fb: FormBuilder,
    private route: Router
  ) {}
  ngOnInit(): void {}

  loginData: any = this.fb.group({
    email: '',
    password: '',
  });

  login() {
    this.mservice.getBymail(this.loginData.value.email).subscribe(
      (data: any) => {
        if (
          data[0].admin &&
          data[0].password == this.loginData.value.password
        ) {
          this.mservice.isLoggedIn();
          this.route.navigate(['']);
        } else {
          if (data[0].password == this.loginData.value.password) {
            this.route.navigate(['/']);
          } else {
            alert('Credetial is wrong');
          }

          this.mservice.isAuthenticated = false;
        }
      },
      (error) => {
        console.log('errror ia ', error);
      }
    );
  }
}
