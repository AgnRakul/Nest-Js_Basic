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

        const CSV_DATA = `PRODUCT_ID,TITLE,DESCRIPTION,PRICE
        ${prodId},${title},${desc},${price}`
        
        fs.writeFile(__dirname+'/product.csv',CSV_DATA,{encoding: "utf8", flag: "a" }, (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Data Saved");
                
            }
        });
        return prodId;
    }

    getProducts() {
        return [...this.products];
    }

    async getProductCsv() {


    }

}