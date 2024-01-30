import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './app/body/body.component';
import { HeaderComponent } from './app/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-assist';
}
