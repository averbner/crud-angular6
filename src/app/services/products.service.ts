import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];
  constructor(private _httpClient: HttpClient) {
    }

  getProducts() {
    return this._httpClient.get('http://localhost/test/api/api_crud.php/products');
  }

  saveProduct(product) {
    return this._httpClient.post('http://localhost/test/api/api_crud.php/products', product);
  }

  getProduct(id) {
    return this._httpClient.get('http://localhost/test/api/api_crud.php/products/' + id);
  }

  updateProduct(product) {
    return this._httpClient.put('http://localhost/test/api/api_crud.php/products/' + product.id, product);
  }

  deleteProduct(id) {
    return this._httpClient.delete('http://localhost/test/api/api_crud.php/products/' + id);
  }

}
