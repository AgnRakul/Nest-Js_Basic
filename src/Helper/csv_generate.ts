import * as fs from 'fs';

export const GenerateCsv = (prodId:string, title:string, desc:string, price:number) => {


    if (fs.existsSync('product.csv') === false) {
        const CSV_DATA = `PRODUCT_ID,TITLE,DESCRIPTION,PRICE\n${prodId},${title},${desc},${price}`

        return fs.writeFile('product.csv', CSV_DATA, { encoding: "utf8", flag: "a+" }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File Create Successfully Data Written");
            }
        });
        
    }   else {

        fs.readFile('product.csv', 'utf-8', function (err, data) {

            var firstColumn = data.includes('PRODUCT_ID,TITLE,DESCRIPTION,PRICE');

            switch (firstColumn) {

                case false: {
                    const CSV_DATA = `PRODUCT_ID,TITLE,DESCRIPTION,PRICE\n${prodId},${title},${desc},${price}`

                    return fs.writeFile('product.csv', CSV_DATA, { encoding: "utf8", flag: "a+" }, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Inserted Data Successfully");
                        }
                    });
                }
                case true: {
                    const CSV_DATA = `\n${prodId},${title},${desc},${price}`

                    return fs.writeFile('product.csv', CSV_DATA, { encoding: "utf8", flag: "a+" }, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Row Inserted Successfully");

                        }
                    });
                }
            }

        })

    }


}