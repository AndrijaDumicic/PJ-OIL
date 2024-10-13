import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ONamaComponent } from './pages/o-nama/o-nama.component';
import { PocetnaStranicaComponent } from './pages/pocetna-stranica/pocetna-stranica.component';
import { TransportComponent } from './pages/transport/transport.component';
import { CaffeBarComponent } from './pages/caffe-bar/caffe-bar.component';
import { ProdajaDrvaComponent } from './pages/prodaja-drva/prodaja-drva.component';
import { BenzinskaPostajaComponent } from './pages/benzinska-postaja/benzinska-postaja.component';
import { GumiServisComponent } from './pages/gumi-servis/gumi-servis.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Pocetna stranice-component', pathMatch: 'full' },
    {path:'home-component', component:HomeComponent},
    {path:'kontakt-component', component:KontaktComponent},
    {path:'O nama-component', component:ONamaComponent},
    {path:'Pocetna stranice-component',component:PocetnaStranicaComponent},
    {path:'Transport-component',component:TransportComponent},
    {path:'CaffeBar-component',component:CaffeBarComponent},
    {path:'Prodaja-drva', component:ProdajaDrvaComponent},
    {path:'Benzinska-postaja',component:BenzinskaPostajaComponent},
    {path:'Gumi-servis', component:GumiServisComponent},
    
];
