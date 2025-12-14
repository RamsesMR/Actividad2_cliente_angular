import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProductService,Product } from './services/product';
import { ProductsList } from "./components/products-list/products-list";

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, Footer, ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestion-producto');

 
}
