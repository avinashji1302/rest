import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-team-diaolg',
  templateUrl: './team-diaolg.component.html',
  styleUrls: ['./team-diaolg.component.scss'],
})
export class TeamDiaolgComponent {
  boxData: any = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ServiceService,
    private dialogRef: MatDialogRef<TeamDiaolgComponent>
  ) {}

  ngOnInit(): void {
    this.boxData = this.data;
    console.log(this.boxData);
  }

  update(id: any) {
    this.service.teamUpdateById(id, this.boxData).subscribe((data) => {
      console.log(data);

      this.dialogRef.close();
    });
  }

  closebox() {
    this.dialogRef.close();
    
  }
}
