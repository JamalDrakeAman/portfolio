import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {

  checkbox: boolean = false;
  imageUrl: string = 'icon/check_box_blank.svg';
  checkboxError: boolean = false;

  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: ''
  }

  mailTest = false;

  post = {
    endPoint: 'https://jamalaman.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    this.checkCheckbox();
    ngForm.control.markAllAsTouched();

    if (ngForm.valid && ngForm.submitted && this.checkbox && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.sendPopup();
            this.resetCheckbox();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          // complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }


  resetCheckbox() {
    this.checkbox = false;
    this.imageUrl = 'icon/check_box_blank.svg';
  }


  checkCheckbox() {
    if (this.checkbox == false) {
      this.imageUrl = 'icon/check_box_blank_red.svg';
      this.checkboxError = true;
    } else {
      this.checkboxError = false;
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


  sendPopup() {
    let popup = document.getElementById('send-popup');
    popup?.classList.remove('hide-popup');
    popup?.classList.add('show-popup');
    setTimeout(() => {
      popup?.classList.remove('show-popup');
      popup?.classList.add('hide-popup');
    }, 2000);
  }


}
