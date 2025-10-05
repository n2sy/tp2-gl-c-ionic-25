import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCourse } from '../services/gestion-course';
import type { Course } from '../models/course.model';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
  standalone: false,
})
export class DetailsCoursePage {
  selectedCourse: Course;
  private activatedRoute = inject(ActivatedRoute);
  private courseSer = inject(GestionCourse);
  private alertCtrl = inject(AlertController);
  private toastController = inject(ToastController);
  private router = inject(Router);

  ngOnInit() {
    this.selectedCourse = this.courseSer.getCourseById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes-vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        'Non',
        {
          text: 'Oui',
          handler: () => {
            this.courseSer.deleteCourse(this.selectedCourse);
            this.presentToast();
            this.router.navigateByUrl('/home');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cours supprimé avec succès',
      duration: 1500,
      position: 'bottom',
      color: 'danger',
    });

    await toast.present();
  }
}
