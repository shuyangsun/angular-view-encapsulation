import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncapsulationEmulatedComponent } from './encapsulations/encapsulation-emulated/encapsulation-emulated.component';
import { EncapsulationNoneComponent } from './encapsulations/encapsulation-none/encapsulation-none.component';
import { EncapsulationShadowDomComponent } from './encapsulations/encapsulation-shadow-dom/encapsulation-shadow-dom.component';

@Component({
  selector: 'ave-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EncapsulationEmulatedComponent,
    EncapsulationNoneComponent,
    EncapsulationShadowDomComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-view-encapsulation';
}
