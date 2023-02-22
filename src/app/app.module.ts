import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductsComponent } from './page/products/products.component';
import { TableComponent } from './page/table/table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UniqueFilterPipe } from './pipes/unique-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './page/header/header.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { SolutionModule } from "./page/solution/solution.module";

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        TableComponent,
        FilterPipe,
        UniqueFilterPipe,
        HeaderComponent,
        ProjectsComponent,
        ContactComponent,
        AboutComponent,
        HomeComponent,
        LoginComponent,
          ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        SolutionModule
          ]
})
export class AppModule { }
