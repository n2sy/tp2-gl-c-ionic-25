import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsCoursePageRoutingModule } from './details-course-routing.module';

import { DetailsCoursePage } from './details-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsCoursePageRoutingModule
  ],
  declarations: [DetailsCoursePage]
})
export class DetailsCoursePageModule {}
