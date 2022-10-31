import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {tap} from "rxjs";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('', [Validators.required]),
  });

  formObservedContent: string = "";
  formSubmittedContent: string = "";

  constructor() { }

  ngOnInit(): void {
    this.profileForm.valueChanges.pipe(
      tap(formValue => {
        this.formObservedContent = JSON.stringify(formValue);
      })
    ).subscribe();
  }

  submit() {
    this.formSubmittedContent = JSON.stringify(this.profileForm.value);
  }
}
