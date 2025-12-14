import { Component, Output, EventEmitter, output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductFormComponent {

  @Output() productoCreado = new EventEmitter<any>();

  formulario = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    active: new FormControl(true)
  });

  enviar() {
    this.productoCreado.emit(this.formulario.value);
    this.formulario.reset(
      {
        name: '',
        description: '',
        image: '',
        price: '',
        category: '',
        active: true
      }
    )
  }

}
