import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedCoreApiModule } from '@demo-repo/shared/core-api';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'client-list',
    loadChildren: () =>
      import('@demo-repo/client-report/views').then(
        (m) => m.ClientReportViewsModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent, ListComponent, FormComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    SharedCoreApiModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
