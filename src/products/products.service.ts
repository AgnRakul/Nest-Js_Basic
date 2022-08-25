import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";
import * as fs from 'fs';

@Injectable()
export class ProductsService {

    private products: Product[] = [];
    private productToCsv;


    insertProduct(title: string, desc: string, price: number) {

        const prodId = Math.floor(Math.random() * 24645643424).toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);

        JSON.stringify(newProduct,  function(err, output) {
            fs.writeFileSync(__dirname+'/product.csv',output)
        })

        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    async getProductCsv() {


    }

}