import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-theme',
  imports: [MatSlideToggleModule, CommonModule, FormsModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {

  activeDarkTheme: boolean = false;

  onChange(value:boolean){
    console.log(value);
    
  }

}
