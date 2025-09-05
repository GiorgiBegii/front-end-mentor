import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mode = true
  icon = 'icon-sun.svg'
  logo = 'logo-dark.svg'

  changeMode(mode: boolean) {
    
    this.mode = mode;
    const body = document.body

    if(mode){
      body.classList.remove('light-theme');
      this.icon = "icon-sun.svg"
      this.logo = 'logo-dark.svg'
    }else {
      body.classList.add('light-theme');
      this.icon = "icon-moon.svg"
      this.logo = 'logo-light.svg'
    }
  }

}
