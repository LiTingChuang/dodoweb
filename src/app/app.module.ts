import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';
import { AA070312listComponent } from './aa070312-list/aa070312-list.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberFormComponent } from './member/member-form/member-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerFormComponent,
    ConfirmModalComponent,
    AA070312listComponent,
    MemberListComponent,
    MemberFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  entryComponents: [ CustomerFormComponent, ConfirmModalComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
