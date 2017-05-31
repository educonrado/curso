import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'empleado',component:EmpleadoComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'**',component:HomeComponent}
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);