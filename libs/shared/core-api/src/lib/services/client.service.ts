import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { tap, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clientList$ = new BehaviorSubject<Client[]>([]);
  client = {};
  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<any>('../assets/clients-large.json').pipe(
      tap((response) => {
        response = this.adjustAddress(response);
        this.clientList$.next(response);
      })
    );
  }

  private adjustAddress(responseClientList: Client[]) {
    responseClientList.forEach((client) => {
      client.address =
        client.houseNr +
        '-' +
        client.addition +
        ',' +
        client.street +
        ',' +
        client.city +
        ' ' +
        client.country;
    });
    return responseClientList;
  }

  public setClient(obj: any) {
    this.client = obj;
  }

  public getClient() {
    return this.client;
  }

  public getClientById(id:any){
    this.clientList$.pipe(
      map(users => users.find(user => user._id === id)))
   .subscribe(res => {
      this.setClient(res);
   });
  }

}
