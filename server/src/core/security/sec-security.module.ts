import express from 'express';
import * as App from "../../common/module" 
import ApigApiGeneralsComponent from "./apigenerals/apig-apigenerals.component" 
import ApisApiSpecificsComponent from "./apispecifics/apis-apispecifics.component" 
import WmetWebMethodsComponent from "./webmethods/wmet-webmethods.component" 
import GagpGrupApigPrivileguesComponent from "./grupapigprivilegues/gagp-grupapigprivilegues.component" 
import GaspGrupApisPrivileguesComponent from "./grupapisprivilegues/gasp-grupapisprivilegues.component" 
import GrfiGrupFieldsPrivileguesComponent from "./grupfieldsprivilegues/grfi-grupfieldsprivilegues.component" 
import GrupGroupsComponent from "./groups/grup-groups.component" 
import UserUsersComponent from "./users/user-users.component" 
import FielFieldsComponent from "./fields/fiel-fields.component" 
import UsgrUserGrupRelationsComponent from "./usergruprelations/usgr-usergruprelations.component" 


import * as ApigApiGeneralsRoute from "./apigenerals/routes/apig-apigenerals.route" 
import * as ApisApiSpecificsRoute from "./apispecifics/routes/apis-apispecifics.route" 
import * as WmetWebMethodsRoute from "./webmethods/routes/wmet-webmethods.route" 
import * as GagpGrupApigPrivileguesRoute from "./grupapigprivilegues/routes/gagp-grupapigprivilegues.route" 
import * as GaspGrupApisPrivileguesRoute from "./grupapisprivilegues/routes/gasp-grupapisprivilegues.route" 
import * as GrfiGrupFieldsPrivileguesRoute from "./grupfieldsprivilegues/routes/grfi-grupfieldsprivilegues.route" 
import * as GrupGroupsRoute from "./groups/routes/grup-groups.route" 
import * as UserUsersRoute from "./users/routes/user-users.route" 
import * as FielFieldsRoute from "./fields/routes/fiel-fields.route" 
import * as UsgrUserGrupRelationsRoute from "./usergruprelations/routes/usgr-usergruprelations.route" 

import * as config from "./config/config.json";
const {ObjectId} = require('mongodb');

class SecSecurityModule extends App.CommonModule {


    public async addRoutes(appExpress:express.Application, io?: any) {  
        var apigApiGeneralsRoute = new ApigApiGeneralsRoute.ApigApiGeneralsRoute('apiGenerals', io); 
        appExpress.use('/api/v1/security', apigApiGeneralsRoute.router); 
        var apisApiSpecificsRoute = new ApisApiSpecificsRoute.ApisApiSpecificsRoute('apiSpecifics', io); 
        appExpress.use('/api/v1/security', apisApiSpecificsRoute.router); 
        var wmetWebMethodsRoute = new WmetWebMethodsRoute.WmetWebMethodsRoute('webMethods', io); 
        appExpress.use('/api/v1/security', wmetWebMethodsRoute.router); 
        var gagpGrupApigPrivileguesRoute = new GagpGrupApigPrivileguesRoute.GagpGrupApigPrivileguesRoute('grupApigPrivilegues', io); 
        appExpress.use('/api/v1/security', gagpGrupApigPrivileguesRoute.router); 
        var gaspGrupApisPrivileguesRoute = new GaspGrupApisPrivileguesRoute.GaspGrupApisPrivileguesRoute('grupApisPrivilegues', io); 
        appExpress.use('/api/v1/security', gaspGrupApisPrivileguesRoute.router); 
        var grfiGrupFieldsPrivileguesRoute = new GrfiGrupFieldsPrivileguesRoute.GrfiGrupFieldsPrivileguesRoute('grupFieldsPrivilegues', io); 
        appExpress.use('/api/v1/security', grfiGrupFieldsPrivileguesRoute.router); 
        var grupGroupsRoute = new GrupGroupsRoute.GrupGroupsRoute('groups', io); 
        appExpress.use('/api/v1/security', grupGroupsRoute.router); 
        var userUsersRoute = new UserUsersRoute.UserUsersRoute('users', io); 
        appExpress.use('/api/v1/security', userUsersRoute.router); 
        var fielFieldsRoute = new FielFieldsRoute.FielFieldsRoute('fields', io); 
        appExpress.use('/api/v1/security', fielFieldsRoute.router); 
        var usgrUserGrupRelationsRoute = new UsgrUserGrupRelationsRoute.UsgrUserGrupRelationsRoute('userGrupRelations', io); 
        appExpress.use('/api/v1/security', usgrUserGrupRelationsRoute.router);
        await this.setWebMethods();
    }

    public async setWebMethods() {
        var result = await WmetWebMethodsComponent.FindOne({wmet_name: 'get'});
        if (!result) {
            WmetWebMethodsComponent.InsertData({wmet_name: 'get'});
        }
        var result = await WmetWebMethodsComponent.FindOne({wmet_name: 'post'});
        if (!result) {
            WmetWebMethodsComponent.InsertData({wmet_name: 'post'});
        } 
        var result = await WmetWebMethodsComponent.FindOne({wmet_name: 'put'});
        if (!result) {
            WmetWebMethodsComponent.InsertData({wmet_name: 'put'});
        } 
        var result = await WmetWebMethodsComponent.FindOne({wmet_name: 'delete'});
        if (!result) {
            WmetWebMethodsComponent.InsertData({wmet_name: 'delete'});
        } 
    }

    public async hasRole(content, request) {
        var isGrant = false;
        var apiGeneral;
        var apiSpecific;
        var accessPrivilegue;
        var user;
        if(content.email) {
            for (let superUser of config.module.superUsers) {
                if (superUser.user_email == content.email) return true;
            }            
            user = await UserUsersComponent.FindOne({user_email:content.email});
        } else {
            var query = content.preferred_username;
            var regex = new RegExp(["^", query, "$"].join(""), "i");
            user = await UserUsersComponent.FindOne({user_name:regex});
        }
                
        if(user) {
            var userGroups = await UsgrUserGrupRelationsComponent.FindData({usgr_user_id:user[UserUsersComponent.keyName]});
            if (userGroups && userGroups.length>0) {
                for(let group of userGroups) {
                    apiGeneral = await ApigApiGeneralsComponent.FindOne({apig_code: request.baseUrl});
                    if (apiGeneral) {
                        var buildURL = request.url
                        if (buildURL.includes("?")) {
                            var split = buildURL.split("?")[0];
                            buildURL = split.substring(0, split.length);
                        }
                        for (let i in request.params) {
                            if (request.url.includes(request.params[i]))
                                    buildURL = buildURL.replace(request.params[i], ":" + i);
                            }

                            
                        var webMethod = await WmetWebMethodsComponent.FindOne({ wmet_name: request.method.toLowerCase() });
                        apiSpecific = await ApisApiSpecificsComponent.FindOne({ apis_apig_id: apiGeneral[ApigApiGeneralsComponent.keyName], apis_code: buildURL, apis_wmet_id: webMethod[WmetWebMethodsComponent.keyName] });
                        if (apiSpecific) {
                            accessPrivilegue = await GaspGrupApisPrivileguesComponent.FindOne({ gasp_grup_id: ObjectId(group.usgr_grup_id), gasp_apis_id: apiSpecific[ApisApiSpecificsComponent.keyName], gasp_apig_id: apiGeneral[ApigApiGeneralsComponent.keyName] });
                            if (accessPrivilegue) {
                                isGrant = accessPrivilegue.gasp_grantaccess;
                            }
                        }
                    }                
                }
            }            
        }
        
        return isGrant;
    }
}


export {ApigApiGeneralsComponent, ApisApiSpecificsComponent, WmetWebMethodsComponent, GagpGrupApigPrivileguesComponent, GaspGrupApisPrivileguesComponent, GrfiGrupFieldsPrivileguesComponent, GrupGroupsComponent, UserUsersComponent, FielFieldsComponent, UsgrUserGrupRelationsComponent,  SecSecurityModule} ;

export default new SecSecurityModule();
