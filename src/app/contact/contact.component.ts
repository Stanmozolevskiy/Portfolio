import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup;
  constructor(private fB: FormBuilder,) { }

  ngOnInit(): void {
   this.contactForm = this.fB.group({
      name:'',
      email:'',
      text:'',
    })
  }
  onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
