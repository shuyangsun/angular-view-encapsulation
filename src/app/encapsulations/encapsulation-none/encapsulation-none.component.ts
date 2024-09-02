import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ave-encapsulation-none',
  standalone: true,
  imports: [],
  templateUrl: './encapsulation-none.component.html',
  styleUrl: './encapsulation-none.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'encapsulation',
  },
})
export class EncapsulationNoneComponent {}
