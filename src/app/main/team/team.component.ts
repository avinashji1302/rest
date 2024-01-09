import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { TeamDiaolgComponent } from '../team-diaolg/team-diaolg.component';
import { AddMemberComponent } from '../add-member/add-member.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'img',
    'bio',
    'instagram',
    'action',
  ];
  dataSource: any = '';

  constructor(private service: ServiceService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.getTeam();
  }

  // Getting Team data
  getTeam() {
    this.service.getAllteamMember().subscribe(
      (data: any) => {
        this.dataSource = data;

        console.log(this.dataSource);
      },
      (error) => console.log(error)
    );
  }

  openDialog(data: any) {
    const open = this.dialog.open(TeamDiaolgComponent, {
      data: data,
      width: '600px',
      height: '300px',
    });

    open.afterClosed().subscribe(()=>{
      this.getTeam()
    })
  }

  deleteOneItem(id: any) {
    this.service.teamDeleteById(id).subscribe((data) => {
      // alert('One item deleted');
      this.getTeam();
    });
  }

  //Opening Adding item data

  openAddMember() {
    const AddItem = this.dialog.open(AddMemberComponent, {
      width: '600px',
      height: '350px',
    });

    AddItem.afterClosed().subscribe(()=>{
      this.getTeam()
    })
  }
}
