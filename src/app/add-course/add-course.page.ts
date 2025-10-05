import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
  standalone: false,
})
export class AddCoursePage implements OnInit {
    addForm = new FormGroup(
        {
            title : new FormControl('title par défaut', Validators.required),
            author : new FormControl(null, [Validators.required]),
            logo : new FormControl(''),
            keywords : new FormControl([]),
            images : new FormControl([])
        }
    );
    inputKeyword = '';
    private toastController = inject(ToastController)
    private actionSheet = inject(ActionSheetController)
  constructor() {}
  
  get Logo() {
    return this.addForm.get("logo").value;
  }
  get Keywords() {
    return this.addForm.get("keywords").value;
  }
  
  addKeyword() {
    console.log(this.Keywords.indexOf(this.inputKeyword));
    
    if(this.Keywords.indexOf(this.inputKeyword) != -1) {
        this.presentToast();
    
    }
     else {
         this.Keywords.push(this.inputKeyword);
         console.log(this.Keywords);
         
        }
        this.inputKeyword = '';
    
  }
  
    async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Prendre une photo',
          icon : 'camera',
        
        },
        {
          text: 'Choisir une photo de la galerie',
          icon : 'image'
        },
     
      ],
    });

    await actionSheet.present();
  }
  
  deleteKeyword(keywordToDelete) {
    let i = this.Keywords.indexOf(keywordToDelete);
    this.Keywords.splice(i, 1)
  }
  
   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Mot-clè existant',
      duration: 1500,
      position: 'bottom',
      color: 'primary',
    });

    await toast.present();
  }
  
  submitHandler() {
    console.log(this.addForm.value)
    
  }

  ngOnInit() {}
}
