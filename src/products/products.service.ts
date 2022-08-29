import { Injectable } from "@nestjs/common";
import { InsertDataToCsv } from "src/Helper/csv_generate";
import { Product } from "./product.model";
import {v4 as uuidv4} from 'uuid';



@Injectable()
export class ProductsService {

    private products: Product[] = [];

    insertProduct(user_id,title: string, desc: string, price: number) {

        const prodId = uuidv4();
        const newProduct = new Product(user_id,prodId, title, desc, price);
        this.products.push(newProduct);
        
        InsertDataToCsv(prodId, user_id,title, desc, price)
        
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    

}