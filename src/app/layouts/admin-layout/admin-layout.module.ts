import { ArchiveDocumentComponent } from './../../pages/archive-document/archive-document.component';
import { BrowsingComponent } from './../../pages/browsing/browsing.component';
import { DocumentApprovalComponent } from './../../pages/document-approval/document-approval.component';
import { SearchDocComponent } from './../../pages/search-doc/search-doc.component';
import { SecurityService } from './../../Service/security.service';

import { AuthorisationComponent } from './../../pages/authorisation/authorisation.component';
import { AuthorisationService } from './../../Service/authorisation.service';
import { GroupeService } from './../../Service/groupe.service';
import { DocumentService } from './../../Service/document.service';
import { DocumentComponent } from './../../pages/document/document.component';
import { IndexeComponent } from './../../pages/indexe/indexe.component';
import { IndexeService } from './../../Service/indexe.service';
import { DepartementService } from './../../Service/departement.service';
import { PersonneService } from 'src/app/Service/personne.service';
import { PersonnesComponent } from './../../pages/personnes/personnes.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepartementComponent } from 'src/app/pages/departement/departement.component';
import { GroupeComponent } from 'src/app/pages/groupe/groupe.component';
import { SecurityComponent } from 'src/app/pages/security/security.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    PersonnesComponent,
    IndexeComponent,
    DepartementComponent,
    DocumentComponent,
    GroupeComponent,
    AuthorisationComponent,
    SecurityComponent,
    SearchDocComponent,
    DocumentApprovalComponent,
    BrowsingComponent,
    ArchiveDocumentComponent
  ],
  providers: [PersonneService,DepartementService,IndexeService,DocumentService,GroupeService,AuthorisationService,SecurityService],
      
})

export class AdminLayoutModule {}
