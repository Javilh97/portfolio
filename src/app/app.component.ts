import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ThemeComponent } from './pages/theme/theme.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatIconModule, MatTabsModule, MatSlideToggleModule,  MatDividerModule, MatButtonModule, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private route: Router
  ){

  }


  onTabChange(event: any){

    const tabIndex = event.index;

    switch (tabIndex){
      case 0:
        this.route.navigate(['/home']);
        break;
      case 1:
        this.route.navigate(['/projects']);
        break;
      case 2:
        this.route.navigate(['/contact']);
        break;
      default:
        break;
    }
  }


}
