import { TestBed } from '@angular/core/testing';

import { GestionCourse } from './gestion-course';

describe('GestionCourse', () => {
  let service: GestionCourse;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCourse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
