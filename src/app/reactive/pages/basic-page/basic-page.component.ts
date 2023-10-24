import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { retry } from 'rxjs';

const product = {
  name: 'product',
  price: 1200,
  inStorage: 20,
};
@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.scss'],
})
export class BasicPageComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  });

  public myformBuilder: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    // this.myformBuilder.reset(product);
  }

  isValidField(field: string): boolean | null {
    return (
      this.myformBuilder.controls[field].errors &&
      this.myformBuilder.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myformBuilder.controls[field]) return null;

    const errors = this.myformBuilder.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'minlength':
          return `Este campo requiere minimo ${errors['minlength'].requiredLength} caracteres`;
        case 'required':
          return 'Este campo es requerido';
      }
    }

    return null;
  }

  onSave(): void {
    if (this.myformBuilder.invalid) {
      this.myformBuilder.markAllAsTouched();
      return
    }

    console.log('form', this.myformBuilder.value);

    this.myformBuilder.reset({ price: 0, inStorage: 0 });
  }
}
