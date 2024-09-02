import { Component } from '@angular/core';

@Component({
  selector: 'ave-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  codeContent = `.encapsulation h1 {
  color: yellow;
}`;
}
