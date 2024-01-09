import { DialogboxComponent } from './../dialogbox/dialogbox.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { ItemDataComponent } from '../item-data/item-data.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'image', 'action'];
  dataSource: any = '';


  constructor(private service: ServiceService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAllData();
  }

  // Deleteing one item

  deleteOneItem(id: any) {
    this.service.deleteById(id).subscribe((data: any) => {
      console.log(data);
      this.getAllData();
    });
  }

  //getting all the data from database

  getAllData() {
    this.service.AllData().subscribe(
      (data: any) => {
        this.dataSource = data;
        console.log(this.dataSource);
      },
      (error) => console.log(error)
    );
  }

  // Openning dialog

  openDialog(data: any) {
    const open = this.dialog.open(DialogboxComponent, {
      data: data,
      width: '600px',
      height: '350px',
    });

    open.afterClosed().subscribe(() => {
      this.getAllData();
    });
  }

  //Opening Adding item data

  openItemData() {
    const AddItem = this.dialog.open(ItemDataComponent, {
      width: '600px',
      height: '350px',
    });

    AddItem.afterClosed().subscribe(() => {
      this.getAllData();
    });
  }

  //

}
