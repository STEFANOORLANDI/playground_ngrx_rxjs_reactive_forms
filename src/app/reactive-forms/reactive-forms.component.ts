import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {tap} from "rxjs";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: this.fb.control(''),
    lastName: this.fb.control('', [Validators.required]),
    hobbies: this.fb.array([
        this.fb.control('')
      ]
    )
  });

  formObservedContent: string = '';
  formSubmittedContent: string = '';

  constructor(private fb: FormBuilder) {
  }

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

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }
}
