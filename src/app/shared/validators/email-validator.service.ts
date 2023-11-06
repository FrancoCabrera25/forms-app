import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
  constructor() {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    console.log('email', email);

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (suscriber) => {
        if (email === 'cabrera.franco@outlook.com') {
          suscriber.next({ emailTaken: true });
          suscriber.complete();
        }

        suscriber.next(null);
        suscriber.complete();
      }
    ).pipe(delay(3000));

    return httpCallObservable;
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log('email', email);
  //   return of({
  //     emailTaken: true,
  //   }).pipe(
  //     delay(2000)
  //   );
  // }
}
