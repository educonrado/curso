import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{

    public url:string;

    constructor(
        private _http:Http
    ){
        this.url="https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return "Hola mundo desde Servicio Peticiones";
    }

    getArticulos(){
        return this._http.get(this.url)
                         .map(res=>res.json());//map recoge la respuesta que nos da una peticion HTTP
                         //res es una variable que se usa en callback
    }

}