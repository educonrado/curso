import { Component } from '@angular/core';
import { Coche } from './coche';
//importar servicio patra http
import { PeticionesService } from '../services/peticiones.services';

@Component({
    selector:'coche',
    templateUrl:'coche.component.html',
    //servicio http
    providers:[PeticionesService]
})

export class CocheComponent{
    public titulo:string='Coches';

    public coche:Coche;
    public coches:Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService:PeticionesService
    ){
        this.coche=new Coche(null,null,0,0,null);
        this.coches=[
            new Coche("Volkswagen","Gol", 2007,1800,"café"),
            new Coche("BMW","X303", 2018,2000,"rojo")
        ];


    }

    ngOnInit(){
        
        this._peticionesService.getArticulos().subscribe(
            result=>{
                this.articulos=result;
                if(!this.articulos){
                    console.log("Error en el Servidor"); 
                }
                console.log(result);
            },
            error=>{
                var errorMessage=<any> error;
                console.log(errorMessage);
            }
        );
        console.log(this._peticionesService.getPrueba());
    }
    
    onSubmit(){
        console.log(this.coche);
        this.coches.push(this.coche);
        this.coche=new Coche(null,null,0,0,null);
    }
}