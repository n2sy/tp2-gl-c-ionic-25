import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCourse } from '../services/gestion-course';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
  standalone: false,
})
export class DetailsCoursePage {
  selectedCourse: Course;
  activatedRoute = inject(ActivatedRoute);
  courseSer = inject(GestionCourse);
  alertCtrl = inject(AlertController);
  toastCtrl = inject(ToastController);
  router = inject(Router);

  ngOnInit() {
    this.selectedCourse = this.courseSer.getCourseById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );

    console.log(this.selectedCourse);
  }

  async afficherAlerte() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        'Non',
        {
          text: 'Oui',
          handler: () => {
            this.courseSer.deleteCourse(this.selectedCourse.id);
            this.presentToast();
            this.router.navigateByUrl("/")
          },
        },
      ],
    });

    await alert.present();
  }
  
    async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Course supprimé avec succès',
      duration: 1500,
      position: 'bottom',
      color : "danger",
      
    });

    await toast.present();
  }
}
