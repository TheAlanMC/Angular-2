import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  formularioUno = new FormGroup({
    nombre : new FormControl(''),
    correo : new FormControl(''),
    numero : new FormControl('')
}); 

}
