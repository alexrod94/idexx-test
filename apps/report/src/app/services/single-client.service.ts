import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class SingleClientService {

  constructor(public client: Client) {
  }

  setClient(obj: any) {
    this.client = obj;
  }

}
