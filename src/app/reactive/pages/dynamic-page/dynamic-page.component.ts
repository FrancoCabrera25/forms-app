import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss'],
})
export class DynamicPageComponent {
  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Deatch Stranding', Validators.required],
    ]),
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {}

  get favoriteGames() {
    return this.form.get('favoriteGames') as FormArray;
  }

  getFieldError(field: string): string | null {
    if (!this.form.controls[field]) return null;

    const errors = this.form.controls[field].errors || {};

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
  isValidField(field: string): boolean | null {
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  isValidFieldInArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }


  onAddToFavorites(): void{

    if(this.newFavorite.invalid ) return;

    const newGame = this.newFavorite.value;

    this.favoriteGames.push(this.fb.control(newGame, [Validators.required]));

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);

    (this.form.controls['favoriteGames'] as FormArray) = this.fb.array([]);

    this.form.reset();
  }
}
