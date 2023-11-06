import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
   // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [ new EmailValidatorService() ] ],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [ this.emailValidator ] ],
    userName: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.maxLength(6)]],
    password2: ['', [Validators.required]],
  },{
    validators: [
      this.validatorsService.isFieldOneEqualsFieldTwo('password', 'password2'),
    ]
  });

  constructor(private fb: FormBuilder, private validatorsService: ValidatorsService, private emailValidator: EmailValidatorService) {}

  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
  }
}
