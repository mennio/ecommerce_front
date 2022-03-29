import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  
  constructor() { }

  connexionForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)])
});

  ngOnInit() : void {
    
  }

  onLogin(){

  }

}
