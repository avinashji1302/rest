import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.scss'],
})
export class ItemDataComponent implements OnInit {
  selectedFile: any|null=null;
  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private dialogRef: MatDialogRef<ItemDataComponent>
  ) {}


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0].name;
    console.log('on delect',this.selectedFile);

  }

  ngOnInit(): void {}

  addDataItem = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    time: [''],
    img: [''],
  });

  Additme() {
    if (this.addDataItem.valid) {
      this.service
        .postData(this.addDataItem.value)
        .subscribe((data: any) => {
          this.dialogRef.close();

        });
    }
  }




}
