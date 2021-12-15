import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;
  constructor(private fB: FormBuilder, private fun: AngularFireFunctions) { }

  ngOnInit(): void {
   this.contactForm = this.fB.group({
      name:'',
      email:'',
      message:'',
    })
  }
  onSubmit(){
  //  console.log(this.contactForm.value);
    this.contactForm.reset();
    this.sendEmail();
  }

  sendEmail() {
    const callable = this.fun.httpsCallable('emailMessage');
    
    callable({ 
      message: 'This is my first sendgrid email via Firebase functions',
      name: 'Abdul Muhamed', 
      email:"mozolevski90@gmail.com"})
      .subscribe(
      res=> console.log(res));
  }
}
