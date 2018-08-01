import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0
  };

  productToEdit: Product;

  id: any;
  editing = false;
  constructor(private _productService: ProductsService, _activatedRoute: ActivatedRoute, private _router: Router) {
    this.id = _activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true;
      _productService.getProduct(this.id).subscribe((res: Product) => {
        this.product = res[0];
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveProduct() {
    if (this.editing) {
      if (this.product.name !== '' && this.product.description !== '') {
        this._productService.updateProduct(this.product).subscribe(() => {
          this._router.navigate(['/table']);
        });
      }
    } else {
      if (this.product.name !== '' && this.product.description !== '') {
        this._productService.saveProduct(this.product).subscribe(() => {
          this._router.navigate(['/table']);
        });
      }
    }
  }
}
