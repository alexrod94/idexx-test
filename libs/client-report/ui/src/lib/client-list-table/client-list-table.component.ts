import { Component, Input } from '@angular/core';
import { Client } from '@demo-repo/shared/core-api';

@Component({
  selector: 'demo-repo-client-list-table',
  templateUrl: './client-list-table.component.html',
  styleUrls: ['./client-list-table.component.scss'],
})
export class ClientListTableComponent {
  @Input() clientList: Client[] = [];

  columns = [
    { header: 'Action', field: 'action' },
    { header: 'Name', field: 'name' },
    { header: 'Gender', field: 'gender' },
    { header: 'Birth Date', field: 'birthDate' },
    { header: 'IBAN', field: 'iban' },
    { header: 'Email', field: 'email' },
    { header: 'Full Address', field: 'address' },
  ];
}
