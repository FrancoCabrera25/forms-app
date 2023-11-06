import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styleUrls: ['./switches-page.component.scss'],
})
export class SwitchesPageComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotification: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {}


  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    );
  }
  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
