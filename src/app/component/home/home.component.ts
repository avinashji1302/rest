import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  datas: any = [];
  OurTeam: any = [];

  constructor(
    private route: Router,
    private service: ServiceService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getAllfoodItem();

    // Team data

    this.service.getAllteamMember().subscribe(
      (data) => {
        this.OurTeam = data;
      },
      (error) => {
        console.log(error);
        alert('Data not found');
      }
    );
  }

  getAllfoodItem() {
    this.service.AllData().subscribe(
      (data: any) => {
        this.datas = data;
        console.log(this.datas);
      },
      (error) => {
        console.log(error);
        alert('Data not found');
      }
    );
  }

  getByName(name:any){
    this.service.getByName(name).subscribe((data)=>{
      console.log(data);

      this.datas = data;

    } , ((error)=>console.log(error)
    ))
  }

  Order = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    order: ['', Validators.required],
    comment: ['', Validators.required],
  });

  onOrder() {
    if (this.Order.valid) {
      this.service.postOrder(this.Order.value).subscribe(
        (data: any) => {
          alert('Order Sent , PLease wait');
        },
        (error) => console.log(error)
      );
    } else {
      alert('Please fill valid data');
    }
  }
}
