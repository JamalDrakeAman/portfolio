import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

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
    if (ngForm.valid && ngForm.submitted && this.checkbox && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }




  // onSubmit(ngForm: NgForm) {
  //   this.checkCheckbox();
  //   if (ngForm.valid && ngForm.submitted && this.checkbox) {
  //     console.log(this.contactData);
  //   }
  // }


  checkCheckbox() {
    if (this.checkbox == false) {
      this.imageUrl = 'icon/check_box_blank_red.svg'
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
