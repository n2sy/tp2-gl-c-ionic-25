import { Component, inject } from '@angular/core';
import { Course } from '../models/course.model';
import { GestionCourse } from '../services/gestion-course';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
    tabCourses : Course[] = [];
    courseService = inject(GestionCourse);
    
    ngOnInit() {
      this.tabCourses =  this.courseService.getAllCourses();
    }
   
}
