import { Injectable } from "@nestjs/common";
import { InsertDataToCsv } from "src/Helper/csv_generate";
import { Product } from "./product.model";
import {v4 as uuidv4} from 'uuid';



@Injectable()
export class ProductsService {

    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {

        const prodId = uuidv4();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        
        InsertDataToCsv(prodId, title, desc, price)
        
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    

}