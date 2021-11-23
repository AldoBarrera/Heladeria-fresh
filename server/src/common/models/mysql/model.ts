var mongoose = require('mongoose');
export class CommonModel {
    name: string;
    model: any;
    namePref: string;
    keyName:string;
    constructor() {
    }

    async find(query, options) {
        let data ;
        if(options && options.populate)
            data = await this.findAndPopulate(options.populate);
        else
            data = await this.model.fetchAll();
        return data
    }

    async findById(dataId, options) {
        let data ;
        if(options && options.populate)
            data = await this.findByIdAndPopulate(dataId, options.populate);
        else
            data = await this.model.findOne({ [ this.model.prototype.idAttribute]: dataId });
        return data
    }

    async update(query, data, object) { 
        let dataToUpdate =  await this.model.findOne(query, { require: true });      
        let dataUpdate = await this.model.update(data, {id: dataToUpdate.id});
        return dataUpdate;
    }

    async create(data) {		
        let dataCreated =  this.model.create(data, {method: 'insert'});      
        return dataCreated;
    }

    async deleteOne(dataId) {    
        //let dataToUpdate =  await this.model.findOne(query, { require: true });        
        let dataRemoved =  await this.model.destroy({id: dataId[ this.model.prototype.idAttribute]});      
        return dataRemoved;
    }

    getPopulateFields() {          
        return "";
    }

    async findAndPopulate(populate:string) {
        let data = await this.model.fetchAll();
        return data
    }
    
    async findByIdAndPopulate(dataId: string, populate:string) {
        let data = await this.model.findOne({ [ this.model.prototype.idAttribute]: dataId });
        return data;
    }

    generateKey() {
        return mongoose.Types.ObjectId().toString();
    }

    
}
