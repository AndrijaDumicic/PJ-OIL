import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodaja-drva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodaja-drva.component.html',
  styleUrl: './prodaja-drva.component.css'
})
export class ProdajaDrvaComponent {
  public skladisteVisible: boolean = false;
  public dostavaVisible: boolean = false;
  public cijenaVisible: boolean = false;
}
