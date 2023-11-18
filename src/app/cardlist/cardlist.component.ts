import { Component } from '@angular/core';

import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css'],
})
export class CardlistComponent {
  constructor(private _productoService: ProductoService) {}

  availableProducts: any[] | undefined = [];

  selectedProducts: any[] | undefined;

  draggedProduct: any | undefined | null;

  productsInLocalStorage: any;

  productos: any[] = [];

  obtenerProductos() {
    this._productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.obtenerProductos();
    this.productsInLocalStorage = localStorage.getItem('tablero');
    if (this.productsInLocalStorage) {
      this.selectedProducts = [...JSON.parse(this.productsInLocalStorage)];
    } else {
      this.selectedProducts = [];
    }
  }

  dragStart(product: any) {
    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      this.selectedProducts = [
        ...(this.selectedProducts as any[]),
        this.draggedProduct,
      ];
      localStorage.setItem('tablero', JSON.stringify(this.selectedProducts));
      this.draggedProduct = null;
    }
  }

  dragEnd(product: any) {
    this._productoService.deleteProducto(product._id).subscribe({
      next: (data) => {
        this.obtenerProductos();
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.draggedProduct = null;
  }

  findIndex(product: any) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as any[]).length; i++) {
      if (product.id === (this.availableProducts as any[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
