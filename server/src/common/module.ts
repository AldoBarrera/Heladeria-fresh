
import express from 'express';
import {ApigApiGeneralsComponent} from '../core/security/sec-security.module'
export class CommonModule {
    public nameModule:string;
    public urlRelative:string;
    public async addRoutes(appExpress:express.Application, io?: any) {
        var result = await ApigApiGeneralsComponent.FindOne({apig_code: this.urlRelative, apig_description: this.urlRelative});
        if (!result) {
            ApigApiGeneralsComponent.InsertData({apig_code: this.urlRelative, apig_description: this.urlRelative})
        }        
    }
}
