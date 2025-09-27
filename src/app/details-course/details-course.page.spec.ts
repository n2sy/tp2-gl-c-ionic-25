import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsCoursePage } from './details-course.page';

describe('DetailsCoursePage', () => {
  let component: DetailsCoursePage;
  let fixture: ComponentFixture<DetailsCoursePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
