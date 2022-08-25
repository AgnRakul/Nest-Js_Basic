import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {

    private products: Product[] = [];


    insertProduct(title: string, desc: string, price: number) {

        const prodId = Math.floor(Math.random() * 24645643424).toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts() {

        return [...this.products];
    }

}