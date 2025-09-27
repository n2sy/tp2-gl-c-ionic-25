import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
  standalone : false
})
export class AddCoursePage implements OnInit {
    addForm = new FormGroup(
        {
            'title' : new FormControl('', Validators.required),
            'author' : new FormControl(null, [Validators.required]),
            'logo' : new FormControl(null, [Validators.required]),
            'keywords' : new FormControl([]),
        }
    );
    inputKeywords : string = '';
  constructor() {}
  
  submitHandler() {
    console.log(this.addForm.value);
    
  }

  ngOnInit() {}
}
