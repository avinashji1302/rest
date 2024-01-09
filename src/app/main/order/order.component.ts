import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'phone',
    'order',
    'comment',
    'action',
  ];
  dataSource: any = '';

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getAllOrder();

   
  }

  deleteOneItem(id: any) {
    this.service.getOrderDelete(id).subscribe((data) => {
      console.log(data);
      this.getAllOrder();
    });
  }

  getAllOrder() {
    this.service.getOrder().subscribe((data: any) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }


}
