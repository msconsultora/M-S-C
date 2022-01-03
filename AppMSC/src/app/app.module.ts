import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CertificadosISOComponent } from './modules/certificados-iso/certificados-iso.component';
import { TpmYleanComponent } from './modules/tpm-ylean/tpm-ylean.component';
import { SeguridadYsaludComponent } from './modules/seguridad-ysalud/seguridad-ysalud.component';
import { MejoraContinuaComponent } from './modules/mejora-continua/mejora-continua.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalsComponent } from './components/modals/modals.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormularioContactoComponent } from './modules/home/components/formulario-contacto/formulario-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CertificadosISOComponent,
    TpmYleanComponent,
    SeguridadYsaludComponent,
    MejoraContinuaComponent,
    ContactoComponent,
    FooterComponent,
    HeaderComponent,
    ModalsComponent,
    NotFoundComponent,
    FormularioContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
