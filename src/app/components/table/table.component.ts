import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products: Product[];

  constructor( private _productService: ProductsService) {
    this.getProducts();
  }

  ngOnInit() {
  }

  getProducts() {
    this._productService.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });
  }

  delete(id) {
    if (confirm('Delete')) {
      this._productService.deleteProduct(id).subscribe((res) => {
        this.getProducts();
      });
    }
  }
}
