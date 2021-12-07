import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedCoreApiModule } from '@demo-repo/shared/core-api';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from './components/modal/modal.component';

const routes: Routes = [
  {
    path: 'client-list',
    loadChildren: () =>
      import('@demo-repo/client-report/views').then(
        (m) => m.ClientReportViewsModule
      ),
  },
  { path: 'form/:id', component: FormComponent},
  { path: '', redirectTo: '/client-list', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, FormComponent, NgbdModalContentComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    SharedCoreApiModule.forRoot(),
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
