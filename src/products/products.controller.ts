import { Controller, Post, Body, Get, Response, StreamableFile } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { createReadStream } from "fs";
import { join } from "path";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }
    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string, 
        @Body('price') prodPrice: number
        ) {
        const generatedId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {
            id:generatedId

        }
    }

    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }


    @Get('/export-csv')
    getFileCustomizedResponse(@Response({ passthrough: true }) res): StreamableFile {
        const file = createReadStream(join(process.cwd(), 'product.csv'));
        res.set({
          'Content-Type': 'application/json',
          'Content-Disposition': 'attachment; filename="product.csv'
        })
        return new StreamableFile(file);
    }
}