import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsCoursePage } from './details-course.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsCoursePageRoutingModule {}
