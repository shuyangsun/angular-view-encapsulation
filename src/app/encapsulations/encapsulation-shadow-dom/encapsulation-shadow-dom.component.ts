import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ave-encapsulation-shadow-dom',
  standalone: true,
  imports: [],
  templateUrl: './encapsulation-shadow-dom.component.html',
  styleUrl: './encapsulation-shadow-dom.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  host: {
    class: 'encapsulation',
  },
})
export class EncapsulationShadowDomComponent {}
