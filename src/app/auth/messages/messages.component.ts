import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './../../servicios/api.service'
import { AuthService } from './../../servicios/autorización.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  enviarmensaje: boolean = true
  errorMessage: any
  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this._api.postTypeRequest('user/message', form.value).subscribe((res: any) => {
     
      if (res.status) { 
       
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
        this._auth.setDataInLocalStorage('token', res.token);  
        this._router.navigate(['/listamensajes']);
      }
    })
  }
  isUserLogin(){
    if(this._auth.getUserDetails() != null){
        this.enviarmensaje = true;
        this._router.navigate(['/listamensajes']);
    }
  }
}
