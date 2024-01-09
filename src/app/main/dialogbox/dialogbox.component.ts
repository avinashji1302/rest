import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss'],
})
export class DialogboxComponent implements OnInit {
  boxData: any = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ServiceService,
    private dialogRef: MatDialogRef<DialogboxComponent>
  ) {}

  ngOnInit(): void {
    this.boxData = this.data;
    console.log(this.boxData);
  }

  update(id: any) {
    this.service.updateById(id, this.boxData).subscribe((data) => {
      console.log(data);
      this.dialogRef.close();
    });
  }

  closebox() {
    this.dialogRef.close();
  }
}
