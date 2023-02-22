import { animation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { TableComponent } from './page/table/table.component';
import { slideInAnimation } from './animation';
import { OneComponent } from './page/solution/one/one.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'table', component:TableComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'login', component:LoginComponent},
  {path: 'solution', loadChildren: () => import('./page/solution/solution.module').then(m => m.SolutionModule)}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
