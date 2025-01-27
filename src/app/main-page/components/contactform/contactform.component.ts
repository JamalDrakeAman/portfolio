import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  checkbox: boolean = false;
  imageUrl: string = 'icon/check_box_blank.svg';

  isNameValid = false;
  isEmailValid = false
  isMessageValid = false;


  contactData = {
    name: '',
    email: '',
    message: ''
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }




  changeImage() {
    if (this.checkbox) {
      this.imageUrl = 'icon/check_box_blank.svg';
    } else if (!this.checkbox) {
      this.imageUrl = 'icon/check_box.svg';
    }
    this.checkbox = !this.checkbox;
  }


}
