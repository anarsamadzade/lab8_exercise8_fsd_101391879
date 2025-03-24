import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: true, // ✅ MUST be here
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // your logic here
}
