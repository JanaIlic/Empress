import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { ZajednickaComponent } from './zajednicka/zajednicka.component';
import { VencaniceComponent } from './vencanice/vencanice.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ZakazivanjeComponent } from './zakazivanje/zakazivanje.component';
import { VencanicaComponent } from './vencanica/vencanica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: NaslovnaComponent},
  {path: 'naslovna', component: NaslovnaComponent},
  {path: 'vencanice', component: VencaniceComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'vencanica', component: VencanicaComponent},
  {path: 'vencanica/:id', component: VencanicaComponent},
 {path: 'zakazivanje', component: ZakazivanjeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NaslovnaComponent, 
    ZajednickaComponent, 
    VencaniceComponent,
    KontaktComponent,
    ZakazivanjeComponent,
    VencanicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent, NaslovnaComponent, ZajednickaComponent, VencaniceComponent, KontaktComponent, VencanicaComponent, ZakazivanjeComponent]
})

export class AppModule { }
