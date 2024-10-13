import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benzinska-postaja',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benzinska-postaja.component.html',
  styleUrl: './benzinska-postaja.component.css'
})
export class BenzinskaPostajaComponent {
  public isEurosuperVisible: boolean = false;
  public isXMileSuperVisible: boolean = false;

  public isDizelVisible: boolean = false;
  public isXMileDieselVisible: boolean = false;

  public isEkoPrednostiVisible: boolean = false;
  public isEkonomskePrednostiVisible: boolean = false;

  public isAkumTQVisible: boolean = false;
  public isAkumEXIDEVisible: boolean = false;
  public isAkumVARTAVisible: boolean = false;
  public isAkumMotoExideVisible: boolean = false;
  public isMobileVisible: boolean = false;
  public isShellVisible: boolean = false;
  public isCastrolVisible:boolean=false;
  public isTotalVisible:boolean=false;
  public isInaVisible:boolean=false;
  public isMotulVisible:boolean=false;
  public isMannolVisible:boolean=false;
  public isYaccoVisible:boolean=false;
  public isNigrinVisible:boolean=false;
  public isMotulkVisible:boolean=false;
  public isSonaxVisible:boolean=false;

  public isProtechVisible:boolean=false;
  public isKamperskeVisible:boolean=false;
  public isPlinBocaVisible:boolean=false;
}
