import * as fs from 'fs';

export const InsertDataToCsv = (prodId: string,user_id:number ,title: string, desc: string, price: number) => {

    console.log(prodId, title, desc, price);


    const fileExists = fs.existsSync(`${user_id}_log.csv`);

    if (!fileExists) {
        fs.open(`${user_id}_log.csv`, 'w', (err) => {
                if (err) throw err;
                console.log('File is Created Successfully');
            });
    }

    fs.readFile(`${user_id}_log.csv`, 'utf-8', (err, data) => {

            var headerIncludes = data.includes('PRODUCT_ID,TITLE,DESCRIPTION,PRICE');

            if (!headerIncludes) {
                const CSV_DATA = `PRODUCT_ID,TITLE,DESCRIPTION,PRICE`;
                return fs.writeFile(`${user_id}_log.csv`, CSV_DATA, { encoding: "utf8", flag: "w" }, (err) => {

                    err ? console.log(err) : console.log("Headers Added");
                });
            } else {
                const CSV_DATA = `\n${prodId},${title},${desc},${price}`;
                return fs.writeFile(`${user_id}_log.csv`, CSV_DATA, { encoding: "utf8", flag: "a+" }, (err) => {

                    if (err) console.log(err);

                    console.log("Row Inserted Successfully");

                });
            }

        })

}