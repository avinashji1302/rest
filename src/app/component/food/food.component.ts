import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  id: any;
  food: any;

  constructor(
    private service: ServiceService,
    private router: Router,
    private activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activated.params.subscribe((data) => {
      this.id = data['id'];
    });

    this.service.GetById(this.id).subscribe((data) => {
      console.log(data);
      this.food = data;
      this.service.getData(data);
    });
  }
}
