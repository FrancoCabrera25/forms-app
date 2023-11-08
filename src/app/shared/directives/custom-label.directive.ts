import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
  }

  @Input() set errors(value: ValidationErrors | null) {
    this._errors = value;
    this.setErrorsMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
    this.setStyle();
  }
  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorsMessage(): void {
    if (!this.htmlElement) return;

    if (!this.errors) {
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return;
    }

     const errors = Object.keys(this.errors);

      if(errors.includes('required')){
        this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      }
  }
}
