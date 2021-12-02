import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListTableComponent } from './client-list-table/client-list-table.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";

@NgModule({
  imports: [CommonModule, TableModule, ButtonModule],
  declarations: [ClientListTableComponent],
  exports: [ClientListTableComponent],
})
export class ClientReportUiModule {}
