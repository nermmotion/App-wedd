import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wedding-app';

  ngOnInit() {
    Aos.init({
      once: false,
      duration: 800,
      easing: 'ease',
    });
  }
}
