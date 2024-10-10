import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ONamaComponent } from './pages/o-nama/o-nama.component';
import { PocetnaStranicaComponent } from './pages/pocetna-stranica/pocetna-stranica.component';
import { TransportComponent } from './pages/transport/transport.component';
import { CaffeBarComponent } from './pages/caffe-bar/caffe-bar.component';
import { ProdajaDrvaComponent } from './pages/prodaja-drva/prodaja-drva.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent,RouterModule, KontaktComponent, ONamaComponent, PocetnaStranicaComponent, TransportComponent,CaffeBarComponent,ProdajaDrvaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PJ_OIL';
}
