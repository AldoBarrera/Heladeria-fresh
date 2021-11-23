const uuidv1 = require('uuid/v1');
var fs = require('fs');

export class CommonModel {
    name: string;
    model: any;
    namePref: string;
    keyName:string;
    constructor() {
        try {
            if (!fs.existsSync('./server/dist/database/database.txt')) {
                fs.writeFileSync('./server/dist/database/database.txt', '', { mode: 0o755 });
            }
          } catch(err) {
            console.error(err)
          }
        
    }

    read() {
        let data ;
        data = fs.readFileSync('./server/dist/database/database.txt');
        if(!data.toString()){
            return null;
        } else {
            return JSON.parse(data.toString());
        }        
    }

    async GetLastRecord(limit:any) {
        let data ;
        data = this.read();
        return data;
    }

    async find(query, options) {
        let data ;
        data = this.read();
        return [data];
    }

    async findById(dataId, options) {
        let data ;
        data = this.read();
        return data;
    }

    async update(query, data, object) { 
        let dataUpdate;
        data._id = query._id;
        try {
            data._id = query._id;
            fs.writeFileSync('./server/dist/database/database.txt', JSON.stringify(data), { mode: 0o755 });
            dataUpdate = {
                n:1,
                ok:1
            };
          } catch(err) {
            dataUpdate = {
                n:0,
                ok:0
            };
          }
        
        
        return dataUpdate;
    }

    async create(data) {		
        fs.writeFileSync('./server/dist/database/database.txt', JSON.stringify(data), { mode: 0o755 });
        return data;
    }

    async deleteOne(dataId) {    
        
    }

    getPopulateFields() {          
        return {};
    }

    async findAndPopulate(populate:string) {
        let data ;
        data = this.read();
        return [data];
    }
    
    async findByIdAndPopulate(dataId: string, populate:string) {
        let data ;
        data = this.read();
        return [data];
    }

    generateKey() {
        return uuidv1();
    }

    
}
