import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';

import { ApiGeneralsComponent } from "./apigenerals/apigenerals.component"; 
import { ApiGeneralsService } from "./apigenerals/shared/apigenerals.service"; 
import { ApiGeneralsDetailComponent } from "./apigenerals/apigenerals-detail/apigenerals-detail.component"; 
import { ApiGeneralsAddComponent } from "./apigenerals/apigenerals-add/apigenerals-add.component"; 
import { ApiGeneralsEditComponent } from "./apigenerals/apigenerals-edit/apigenerals-edit.component"; 
import { ApiGeneralsSearchComponent } from "./apigenerals/apigenerals-search/apigenerals-search.component"; 
import { apiGeneralsRouting } from "./apigenerals/apigenerals.routing"; 
import { ApiSpecificsComponent } from "./apispecifics/apispecifics.component"; 
import { ApiSpecificsService } from "./apispecifics/shared/apispecifics.service"; 
import { ApiSpecificsDetailComponent } from "./apispecifics/apispecifics-detail/apispecifics-detail.component"; 
import { ApiSpecificsAddComponent } from "./apispecifics/apispecifics-add/apispecifics-add.component"; 
import { ApiSpecificsEditComponent } from "./apispecifics/apispecifics-edit/apispecifics-edit.component"; 
import { ApiSpecificsSearchComponent } from "./apispecifics/apispecifics-search/apispecifics-search.component"; 
import { apiSpecificsRouting } from "./apispecifics/apispecifics.routing"; 
import { WebMethodsComponent } from "./webmethods/webmethods.component"; 
import { WebMethodsService } from "./webmethods/shared/webmethods.service"; 
import { WebMethodsDetailComponent } from "./webmethods/webmethods-detail/webmethods-detail.component"; 
import { WebMethodsAddComponent } from "./webmethods/webmethods-add/webmethods-add.component"; 
import { WebMethodsEditComponent } from "./webmethods/webmethods-edit/webmethods-edit.component"; 
import { WebMethodsSearchComponent } from "./webmethods/webmethods-search/webmethods-search.component"; 
import { webMethodsRouting } from "./webmethods/webmethods.routing"; 
import { GrupApigPrivileguesComponent } from "./grupapigprivilegues/grupapigprivilegues.component"; 
import { GrupApigPrivileguesService } from "./grupapigprivilegues/shared/grupapigprivilegues.service"; 
import { GrupApigPrivileguesDetailComponent } from "./grupapigprivilegues/grupapigprivilegues-detail/grupapigprivilegues-detail.component"; 
import { GrupApigPrivileguesAddComponent } from "./grupapigprivilegues/grupapigprivilegues-add/grupapigprivilegues-add.component"; 
import { GrupApigPrivileguesEditComponent } from "./grupapigprivilegues/grupapigprivilegues-edit/grupapigprivilegues-edit.component"; 
import { GrupApigPrivileguesSearchComponent } from "./grupapigprivilegues/grupapigprivilegues-search/grupapigprivilegues-search.component"; 
import { grupApigPrivileguesRouting } from "./grupapigprivilegues/grupapigprivilegues.routing"; 
import { GrupApisPrivileguesComponent } from "./grupapisprivilegues/grupapisprivilegues.component"; 
import { GrupApisPrivileguesService } from "./grupapisprivilegues/shared/grupapisprivilegues.service"; 
import { GrupApisPrivileguesDetailComponent } from "./grupapisprivilegues/grupapisprivilegues-detail/grupapisprivilegues-detail.component"; 
import { GrupApisPrivileguesAddComponent } from "./grupapisprivilegues/grupapisprivilegues-add/grupapisprivilegues-add.component"; 
import { GrupApisPrivileguesEditComponent } from "./grupapisprivilegues/grupapisprivilegues-edit/grupapisprivilegues-edit.component"; 
import { GrupApisPrivileguesSearchComponent } from "./grupapisprivilegues/grupapisprivilegues-search/grupapisprivilegues-search.component"; 
import { grupApisPrivileguesRouting } from "./grupapisprivilegues/grupapisprivilegues.routing"; 
import { GrupFieldsPrivileguesComponent } from "./grupfieldsprivilegues/grupfieldsprivilegues.component"; 
import { GrupFieldsPrivileguesService } from "./grupfieldsprivilegues/shared/grupfieldsprivilegues.service"; 
import { GrupFieldsPrivileguesDetailComponent } from "./grupfieldsprivilegues/grupfieldsprivilegues-detail/grupfieldsprivilegues-detail.component"; 
import { GrupFieldsPrivileguesAddComponent } from "./grupfieldsprivilegues/grupfieldsprivilegues-add/grupfieldsprivilegues-add.component"; 
import { GrupFieldsPrivileguesEditComponent } from "./grupfieldsprivilegues/grupfieldsprivilegues-edit/grupfieldsprivilegues-edit.component"; 
import { GrupFieldsPrivileguesSearchComponent } from "./grupfieldsprivilegues/grupfieldsprivilegues-search/grupfieldsprivilegues-search.component"; 
import { grupFieldsPrivileguesRouting } from "./grupfieldsprivilegues/grupfieldsprivilegues.routing"; 
import { GroupsComponent } from "./groups/groups.component"; 
import { GroupsService } from "./groups/shared/groups.service"; 
import { GroupsDetailComponent } from "./groups/groups-detail/groups-detail.component"; 
import { GroupsAddComponent } from "./groups/groups-add/groups-add.component"; 
import { GroupsEditComponent } from "./groups/groups-edit/groups-edit.component"; 
import { GroupsSearchComponent } from "./groups/groups-search/groups-search.component"; 
import { groupsRouting } from "./groups/groups.routing"; 
import { UsersComponent } from "./users/users.component"; 
import { UsersService } from "./users/shared/users.service"; 
import { UsersDetailComponent } from "./users/users-detail/users-detail.component"; 
import { UsersAddComponent } from "./users/users-add/users-add.component"; 
import { UsersEditComponent } from "./users/users-edit/users-edit.component"; 
import { UsersSearchComponent } from "./users/users-search/users-search.component"; 
import { usersRouting } from "./users/users.routing"; 
import { FieldsComponent } from "./fields/fields.component"; 
import { FieldsService } from "./fields/shared/fields.service"; 
import { FieldsDetailComponent } from "./fields/fields-detail/fields-detail.component"; 
import { FieldsAddComponent } from "./fields/fields-add/fields-add.component"; 
import { FieldsEditComponent } from "./fields/fields-edit/fields-edit.component"; 
import { FieldsSearchComponent } from "./fields/fields-search/fields-search.component"; 
import { fieldsRouting } from "./fields/fields.routing"; 
import { UserGrupRelationsComponent } from "./usergruprelations/usergruprelations.component"; 
import { UserGrupRelationsService } from "./usergruprelations/shared/usergruprelations.service"; 
import { UserGrupRelationsDetailComponent } from "./usergruprelations/usergruprelations-detail/usergruprelations-detail.component"; 
import { UserGrupRelationsAddComponent } from "./usergruprelations/usergruprelations-add/usergruprelations-add.component"; 
import { UserGrupRelationsEditComponent } from "./usergruprelations/usergruprelations-edit/usergruprelations-edit.component"; 
import { UserGrupRelationsSearchComponent } from "./usergruprelations/usergruprelations-search/usergruprelations-search.component"; 
import { userGrupRelationsRouting } from "./usergruprelations/usergruprelations.routing"; 


import { DynamicFormsModule } from '../../dynamicforms/dynamicforms.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
	apiGeneralsRouting, 
apiSpecificsRouting, 
webMethodsRouting, 
grupApigPrivileguesRouting, 
grupApisPrivileguesRouting, 
grupFieldsPrivileguesRouting, 
groupsRouting, 
usersRouting, 
fieldsRouting, 
userGrupRelationsRouting, 

    DynamicFormsModule,
    
    

  ],
  declarations: [
    ApiGeneralsComponent, 
ApiGeneralsDetailComponent, 
ApiGeneralsAddComponent, 
ApiGeneralsEditComponent, 
ApiGeneralsSearchComponent, 
ApiSpecificsComponent, 
ApiSpecificsDetailComponent, 
ApiSpecificsAddComponent, 
ApiSpecificsEditComponent, 
ApiSpecificsSearchComponent, 
WebMethodsComponent, 
WebMethodsDetailComponent, 
WebMethodsAddComponent, 
WebMethodsEditComponent, 
WebMethodsSearchComponent, 
GrupApigPrivileguesComponent, 
GrupApigPrivileguesDetailComponent, 
GrupApigPrivileguesAddComponent, 
GrupApigPrivileguesEditComponent, 
GrupApigPrivileguesSearchComponent, 
GrupApisPrivileguesComponent, 
GrupApisPrivileguesDetailComponent, 
GrupApisPrivileguesAddComponent, 
GrupApisPrivileguesEditComponent, 
GrupApisPrivileguesSearchComponent, 
GrupFieldsPrivileguesComponent, 
GrupFieldsPrivileguesDetailComponent, 
GrupFieldsPrivileguesAddComponent, 
GrupFieldsPrivileguesEditComponent, 
GrupFieldsPrivileguesSearchComponent, 
GroupsComponent, 
GroupsDetailComponent, 
GroupsAddComponent, 
GroupsEditComponent, 
GroupsSearchComponent, 
UsersComponent, 
UsersDetailComponent, 
UsersAddComponent, 
UsersEditComponent, 
UsersSearchComponent, 
FieldsComponent, 
FieldsDetailComponent, 
FieldsAddComponent, 
FieldsEditComponent, 
FieldsSearchComponent, 
UserGrupRelationsComponent, 
UserGrupRelationsDetailComponent, 
UserGrupRelationsAddComponent, 
UserGrupRelationsEditComponent, 
UserGrupRelationsSearchComponent, 

  ],
  exports: [
    ApiGeneralsComponent, 
ApiSpecificsComponent, 
WebMethodsComponent, 
GrupApigPrivileguesComponent, 
GrupApisPrivileguesComponent, 
GrupFieldsPrivileguesComponent, 
GroupsComponent, 
UsersComponent, 
FieldsComponent, 
UserGrupRelationsComponent, 

  ],
  providers: [
    ApiGeneralsService, 
ApiSpecificsService, 
WebMethodsService, 
GrupApigPrivileguesService, 
GrupApisPrivileguesService, 
GrupFieldsPrivileguesService, 
GroupsService, 
UsersService, 
FieldsService, 
UserGrupRelationsService, 

  ]
})
export class SecurityModule { }
