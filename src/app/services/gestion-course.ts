import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class GestionCourse {
  private allCourses: Course[] = [
    {
      id: 1,
      title: 'Angular',
      author: 'Nidhal Jelassi',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Angular_gradient.png/1200px-Angular_gradient.png',
      keywords: ['component', 'binding', 'directive'],
    },
    {
      id: 2,
      title: 'Ionic',
      author: 'Wael Haddad',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/LogoIonic.png',
      keywords: ['hybrid', 'mobile', 'UI'],
    },
    {
      id: 3,
      title: 'Android',
      author: 'Jilani Gharbi',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvmIAnvnN_rA11aC0bbHS_yNog_QKAA2LCQ&s',
      keywords: ['mobile', 'activity', 'layout'],
    },
  ];

  getCourseById(courseId) {
    return this.allCourses.find((element) => element.id == courseId);
  }

  deleteCourse(selectedCourse) {
    // let i = this.allCourses.findIndex((element) => element.id == courseId);
    let i = this.allCourses.indexOf(selectedCourse);
    console.log(i);

    this.allCourses.splice(i, 1);
  }

  getAllCourses() {
    return this.allCourses;
  }
}
