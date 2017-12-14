import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CapasService } from '../../../services/capas/capas.service'
import { CategoriasService } from '../../../services/categorias/categorias.service'

@Component({
  selector: 'app-crear-capas',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearCapasComponent implements OnInit {

  capaNueva: any;

  propiedadNueva: any;

  categorias: any;

  @Input() capa: any;
  @Output() creacionTerminada = new EventEmitter<boolean>();

  constructor(
  			private capasService: CapasService,
  			private categoriasService: CategoriasService){}

  ngOnInit() {

  	this.propiedadNueva = {
  		nombre: "",
  		tipo: ""
  	}

    this.capaNueva = this.capa;


	this.categoriasService.obtener().subscribe(data =>{

		if(data.code == 200){			
			this.categorias = data.data;
		}
		else{
		  	this.categorias = [];
		}
	},
		error => {
			console.log(error);
		}
	);

	this.categorias = [
		{
			codigo: "1",
			nombre: "Categoria 1",
			descripcion: "Descripcion 1",
			eliminable: false
		},
		{
			codigo: "2",
			nombre: "Categoria 2",
			descripcion: "Descripcion 2",
			eliminable: true
		},
		{
			codigo: "3",
			nombre: "Categoria 3",
			descripcion: "Descripcion 3",
			eliminable: false
		}
	]
    eval("window.yo = this");
  }

  agregarPropiedad(){

  	if(this.propiedadNueva.nombre == ""){
  		return false;
  	}  	

  	if(this.propiedadNueva.tipo == ""){
  		return false;
  	}

  	if( this.capaNueva.propiedades.find((element) =>{return element.nombre == this.propiedadNueva.nombre}) ){
  		return false;
  	}

  	this.capaNueva.propiedades.push({nombre: this.propiedadNueva.nombre, tipo: this.propiedadNueva.tipo});

  	this.propiedadNueva.nombre = "";
  	this.propiedadNueva.tipo = "";

  }

  removerPropiedad(i){

  	let propiedades = this.capaNueva.propiedades.filter((element) =>{return element.nombre != this.capaNueva.propiedades[i].nombre});
  	this.capaNueva.propiedades = propiedades;
  }

  terminarCreacion(){

    this.creacionTerminada.emit(true);
  }

  crearCapa(){

    this.capasService.agregar(this.capaNueva).subscribe(data =>{

        if(data.code == 200){

          this.terminarCreacion();
        }
        else{


        }
      },
      error => {
        console.log(error);
      }
    );

  }

}