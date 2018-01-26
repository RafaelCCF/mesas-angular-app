import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormControl } from '@angular/forms/src/model';


@Component({
  selector: 'app-form-mesa',
  templateUrl: './form-mesa.component.html',
  styleUrls: ['./form-mesa.component.css'],
})

export class FormMesaComponent implements OnInit {

  mesaFormulario :FormGroup;

  constructor(private fb : FormBuilder) {
    this.crearForm();
   }

   crearForm(){
     this.mesaFormulario = this.fb.group({
       material: ['',Validators.required],
       precio: ['',Validators.required],
       patas:['',Validators.required],
       dimensiones:['',Validators.required],
       forma:['',Validators.required],
       descripcion:['',Validators.required],
       modelo:['',Validators.required],
       marca:['',Validators.required]
     });
   }

   
    get material() { 
      return this.mesaFormulario.get('material'); 
    }
    get precio() { 
      return this.mesaFormulario.get('precio'); 
    }
    get patas() { 
      return this.mesaFormulario.get('patas'); 
    }
    get dimensiones() { 
      return this.mesaFormulario.get('dimensiones'); 
    }
    get forma() { 
      return this.mesaFormulario.get('forma'); 
    }
    get descripcion() { 
      return this.mesaFormulario.get('descripcion'); 
    }
    get modelo() { 
      return this.mesaFormulario.get('modelo'); 
    }
    get marca() { 
      return this.mesaFormulario.get('marca'); 
    }
   
   guardar(){
    var mesaJSON = JSON.stringify(this.mesaFormulario.value);
    console.log(mesaJSON);
  }



  ngOnInit() {
  }
}
