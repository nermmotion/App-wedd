import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  slider1: string = 'url("../assets/images/slider.jpg")';
  slider2: string = 'url("../assets/images/slider2.jpg")';
  slider3: string = 'url("../assets/images/slider3.jpg")';
  
  imagenFondo2: string = 'url("../assets/images/banner-3.jpg")';

  /* Menu icon transition */
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
