import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemDataComponent } from './item-data/item-data.component';
import { TeamComponent } from './team/team.component';
import { TeamDiaolgComponent } from './team-diaolg/team-diaolg.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DialogboxComponent,
    ItemDataComponent,
    TeamComponent,
    TeamDiaolgComponent,
    AddMemberComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],

})
export class MainModule { }
