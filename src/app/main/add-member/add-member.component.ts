import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { ItemDataComponent } from '../item-data/item-data.component';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent {

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private dialogRef: MatDialogRef<AddMemberComponent>
  ) {}

  ngOnInit(): void {}

  addMember = this.fb.group({
    name: ['', Validators.required],
    bio: ['', Validators.required],
    img: [''],
    instagram: [''],
  });

  addMemebrIn() {
    if (this.addMember.valid) {
      this.service
        .postTeamMember(this.addMember.value)
        .subscribe((data: any) => {
          this.dialogRef.close();

        });
    }
  }




}
