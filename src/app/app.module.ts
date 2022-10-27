import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AbmComponent } from './abm/abm.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 09a75fd060b46b3d227254fc2ff1bb88818c41cd

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    CatalogoComponent,
    AbmComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
<<<<<<< HEAD
    FormsModule, 
    ReactiveFormsModule
=======
    MatSidenavModule,
    MatToolbarModule,
>>>>>>> 09a75fd060b46b3d227254fc2ff1bb88818c41cd
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
