import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent } from './coche/coche.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'empleado',component:EmpleadoComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'coche',component:CocheComponent},
    {path:'plantillas',component:PlantillasComponent},
    {path:'**',component:HomeComponent}
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);