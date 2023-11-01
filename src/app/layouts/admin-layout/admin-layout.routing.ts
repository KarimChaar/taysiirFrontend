import { ArchiveDocumentComponent } from './../../pages/archive-document/archive-document.component';
import { BrowsingComponent } from './../../pages/browsing/browsing.component';
import { DocumentApprovalComponent } from './../../pages/document-approval/document-approval.component';
import { SearchDocComponent } from './../../pages/search-doc/search-doc.component';
import { AuthorisationComponent } from './../../pages/authorisation/authorisation.component';
import { DocumentindexComponent } from './../../pages/documentindex/documentindex.component';
import { DocumentComponent } from './../../pages/document/document.component';
import { IndexeComponent } from './../../pages/indexe/indexe.component';

import { Routes } from '@angular/router';
import {PersonnesComponent} from '../../pages/personnes/personnes.component'
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { DepartementComponent } from 'src/app/pages/departement/departement.component';
import { GroupeComponent } from 'src/app/pages/groupe/groupe.component';
import { SecurityComponent } from 'src/app/pages/security/security.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'icons',          component: IconsComponent },
    { path: 'personnes',      component: PersonnesComponent},
    { path: 'indexe',         component: IndexeComponent},
    { path: 'departement',    component: DepartementComponent},
    { path: 'document',       component: DocumentComponent},
    { path:'documentIndexe',  component:DocumentindexComponent},
    { path:'groupe',          component:GroupeComponent},
    { path:'authorisation',   component:AuthorisationComponent},
    { path:'security' ,       component:SecurityComponent},
    { path:'search' ,       component:SearchDocComponent},
    { path:'approval' ,       component:DocumentApprovalComponent},
    { path:'browsing' ,       component:BrowsingComponent},
    { path:'archive' ,       component:ArchiveDocumentComponent},
];
