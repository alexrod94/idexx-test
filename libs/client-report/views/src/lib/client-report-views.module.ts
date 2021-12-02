import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ClientReportUiModule } from '@demo-repo/client-report/ui';
import { ReactiveComponentModule } from '@ngrx/component';

export const clientReportViewsRoutes: Route[] = [
  {
    path: '',
    component: ListClientsComponent,
  },
];

export const routerModule = RouterModule.forChild(clientReportViewsRoutes);

@NgModule({
  imports: [
    CommonModule,
    routerModule,
    ClientReportUiModule,
    ReactiveComponentModule,
  ],
  declarations: [ListClientsComponent],
})
export class ClientReportViewsModule {}
