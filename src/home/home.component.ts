import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public loadingPage: boolean = true;
  
  constructor () {
    this.loadingPage = false;
  }
  
  slider1: any = 'url("../assets/images/slider.jpg")';
  slider2: any = 'url("../assets/images/slider2.jpg")';
  slider3: any = 'url("../assets/images/slider3.jpg")';
  
  imagenFondo2: any = 'url("../assets/images/banner-5.jpg")';

  /* Menu icon transition */
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
