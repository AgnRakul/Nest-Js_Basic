import { Injectable } from "@nestjs/common";
import { GenerateCsv } from "src/Helper/csv_generate";
import { Product } from "./product.model";



@Injectable()
export class ProductsService {

    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {

        const prodId = Math.floor(Math.random() * 24645643424).toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        
        GenerateCsv(prodId, title, desc, price)
        
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

}