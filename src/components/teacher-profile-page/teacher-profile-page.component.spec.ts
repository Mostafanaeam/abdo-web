import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfilePageComponent } from './teacher-profile-page.component';

describe('TeacherProfilePageComponent', () => {
  let component: TeacherProfilePageComponent;
  let fixture: ComponentFixture<TeacherProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProfilePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
