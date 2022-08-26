import * as fs from 'fs';

export const InsertDataToCsv = (prodId: string, title: string, desc: string, price: number) => {

    console.log(prodId, title, desc, price);
    

    const fileExists = fs.existsSync('product.csv');

    if (!fileExists) {
        const CSV_DATA = `PRODUCT_ID,TITLE,DESCRIPTION,PRICE\n${prodId},${title},${desc},${price}`

        return fs.writeFile('product.csv', CSV_DATA, { encoding: "utf8", flag: "a+" }, (err) => {
            
            err ? console.log(err) : console.log("File Create Successfully Data Written"); 
        });

    } else {

        fs.readFile('product.csv', 'utf-8', function (err, data) {

            var headerIncludes = data.includes('PRODUCT_ID,TITLE,DESCRIPTION,PRICE');

            if (headerIncludes) {
                const CSV_DATA = `\n${prodId},${title},${desc},${price}`

                return fs.writeFile('product.csv', CSV_DATA, { encoding: "utf8", flag: "a+" }, (err) => {

                    if(err) console.log(err)

                    console.log("Row Inserted Successfully"); 
                    
                });
            }

        })

    }


}