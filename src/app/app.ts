import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Hi EveryOne'
  name = 'Rohit'
  x = 5
  y = 10
  cnt = 0
  
  onClick() {
    this.cnt++;
    alert(this.cnt)
    
  }
}
