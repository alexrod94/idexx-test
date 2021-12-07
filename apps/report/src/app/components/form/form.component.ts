import { Component, OnInit } from '@angular/core';
import { ClientService } from '@demo-repo/shared/core-api';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbdModalContentComponent } from '../modal/modal.component';

@Component({
  selector: 'demo-repo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  currentClient: any;
  allClients: any;
  valid = false;
  dateValid = true;
  emailValid = true;
  postCodeValid = true;
  ibanValid = true;
  showModal = false;

  constructor(private client: ClientService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal, private http: HttpClient) {
    this.allClients = []
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.client.getClientById(id);
    this.currentClient = this.client.getClient();
    console.log(this.currentClient);

  }

  checkIfFuture() {
    const q = new Date();
    const m = q.getMonth();
    const d = q.getDate();
    const y = q.getFullYear();
    const a = this.currentClient.birthDate.split('/');
    const clientDate = new Date(a[2], a[1] - 1, a[0]);

    const currentDate = new Date(y,m,d);

    if(currentDate>clientDate)
    {
        this.dateValid = true;
        return true;
    }
    else
    {
        this.dateValid = false;
        return false;
    }
  }
      
  validateEmail() {
    const email = this.currentClient.email;
    const re = /\S+@\S+\.\S+/;
    const valid = re.test(email);

    if(valid) {
      this.emailValid = true;
      return true;
    } else {
      this.emailValid = false;
      return false;
    }
  }

  validatePostCode() {
    const postCode = this.currentClient.postCode;
    const formattedPostCode  = postCode.split(' ');
    console.log(formattedPostCode[0])
    const half1 = formattedPostCode[0];
    const half2 = formattedPostCode[1];
    let valid = true;
    for(let i = 0; i < half1.length; i++) {
      const result = (/[0-9]/).test(half1[i]);
      if(!result) valid = false
    }
    for(let j = 0; j < half2.length; j++) {
      const result = (/[a-zA-Z]/).test(half2[j]);
      if(!result) valid = false
    }
    if(half1.length !== 4 || half2.length !== 2) valid = false;
    this.postCodeValid = valid;
    return valid;
  }

  validateIban() {
    this.http.get<any>('https://api.ibanapi.com/v1/validate/NL13ABNA65195744a14?api_key=dd71bfab8d2090b3126627ebe6fad795a4c9a779').subscribe( data => {
      // The API blocks me due to CORS policy
      /* 
      I'm guessing that's due to me running a local environment. However, if I were to deploy the app, here's what would go inside the subscribe function:
      if(data.result === 200) {
        this.ibanValid = true;
      } else {
        this.ibanValid = false;
      }
      */
    })
  }

  runValidations() {
    const isDateValid = this.checkIfFuture();
    const isEmailValid = this.validateEmail();
    const isPostCodeValid = this.validatePostCode();
    if(isDateValid && isEmailValid && isPostCodeValid) {
      console.log(true)
      const modalRef = this.modalService.open(NgbdModalContentComponent);
      modalRef.componentInstance.name = 'Modal'
    }
    // this.validateIban();
  }

  goBack() {
    this.router.navigate(['/client-list']);
  }

}
