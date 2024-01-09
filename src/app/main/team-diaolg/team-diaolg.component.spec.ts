import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDiaolgComponent } from './team-diaolg.component';

describe('TeamDiaolgComponent', () => {
  let component: TeamDiaolgComponent;
  let fixture: ComponentFixture<TeamDiaolgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamDiaolgComponent]
    });
    fixture = TestBed.createComponent(TeamDiaolgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
