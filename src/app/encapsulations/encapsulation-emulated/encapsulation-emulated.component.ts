import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ave-encapsulation-emulated',
  standalone: true,
  imports: [],
  templateUrl: './encapsulation-emulated.component.html',
  styleUrl: './encapsulation-emulated.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  host: {
    class: 'encapsulations',
  },
})
export class EncapsulationEmulatedComponent {}
