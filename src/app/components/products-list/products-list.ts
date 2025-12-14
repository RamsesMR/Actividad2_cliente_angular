import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductFormComponent } from '../product-form/product-form';
import { ProductFilterComponent } from '../product-filter/product-filter';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductFormComponent, ProductFilterComponent],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {

  productos: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productos$.subscribe(p => this.productos = p);
    this.productService.cargarProductos();
  }

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }

  eliminar(id: string) {
    this.productService.eliminarProducto(id);
  }
}
