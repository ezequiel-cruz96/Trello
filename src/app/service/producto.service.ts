import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = "http://localhost:3000/api/productos/"

  constructor(private http: HttpClient) {
   }

   getProductos():Observable<any>{
    return this.http.get(this.url)
   }

   deleteProducto(id:string):Observable<any>{
      return this.http.delete(this.url + id);
    }

    postProducto(producto:any):Observable <any>{
      return this.http.post (this.url, producto);
      }
}
