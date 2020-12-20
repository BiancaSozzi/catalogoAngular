import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalleComponent } from './detalle/detalle.component'

const routes: Routes = [
    {path: "", component: UsersComponent},
    {path: "home", redirectTo: "/catalogo"},
    {path: "catalogo", component: CatalogoComponent},
    {path: "product/:id", component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
