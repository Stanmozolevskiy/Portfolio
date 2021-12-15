import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;
  emailSent!: boolean;
  constructor(private fB: FormBuilder, private fun: AngularFireFunctions) { }

  ngOnInit(): void {
   this.contactForm = this.fB.group({
      name:["", [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email:["", [Validators.required, Validators.email, Validators.minLength(3)]],
      message:["", [Validators.required, Validators.minLength(3)]]
    })
  }
  onSubmit(){
    const email = {...this.email, ...this.contactForm.value};
    this.contactForm.reset();
    this.contactForm.disable();
    this.emailSent = true;
    this.sendEmail(email);
  }

  sendEmail(email:Email) {
    const callable = this.fun.httpsCallable('emailMessage');
    callable({ 
      message: email.message,
      name: email.name, 
      email: email.emial}).subscribe(res => console.log(res));
  }
  private email!: Email;
}
export class Email{
  constructor(
    public name: string,
    public emial: string,
    public message: string
  ){}
}
