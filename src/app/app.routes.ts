import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ONamaComponent } from './pages/o-nama/o-nama.component';
import { PocetnaStranicaComponent } from './pages/pocetna-stranica/pocetna-stranica.component';
import { TransportComponent } from './pages/transport/transport.component';

export const routes: Routes = [
    {path:'home-component', component:HomeComponent},
    {path:'kontakt-component', component:KontaktComponent},
    {path:'O nama-component', component:ONamaComponent},
    {path:'Pocetna stranice-component',component:PocetnaStranicaComponent},
    {path:'Transport-component',component:TransportComponent},
    
];
