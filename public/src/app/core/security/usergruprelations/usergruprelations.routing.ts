import { Routes, RouterModule } from '@angular/router';
import {default as config} from '../config/config.json';
import { UserGrupRelationsComponent } from './usergruprelations.component';
import {UserGrupRelationsDetailComponent} from "./usergruprelations-detail/usergruprelations-detail.component";
import {UserGrupRelationsAddComponent} from "./usergruprelations-add/usergruprelations-add.component";
import {UserGrupRelationsEditComponent} from "./usergruprelations-edit/usergruprelations-edit.component";
import {UserGrupRelationsSearchComponent} from "./usergruprelations-search/usergruprelations-search.component";

const userGrupRelationsRoutes: Routes = [

    { path: config['userGrupRelations'].component.name.toLowerCase() , component: UserGrupRelationsComponent, pathMatch: 'full' },
    { path: config['userGrupRelations'].component.name.toLowerCase()  + '/:id', component: UserGrupRelationsDetailComponent},
    { path: config['userGrupRelations'].component.name.toLowerCase()  + 'add', component: UserGrupRelationsAddComponent},
    { path: config['userGrupRelations'].component.name.toLowerCase() + 'edit/:id', component: UserGrupRelationsEditComponent},
	{ path: config['userGrupRelations'].component.name.toLowerCase() + 'search', component: UserGrupRelationsSearchComponent}
];

export const userGrupRelationsRouting = RouterModule.forChild(userGrupRelationsRoutes);
