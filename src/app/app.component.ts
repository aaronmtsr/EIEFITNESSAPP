import { Component, OnInit, HostListener } from '@angular/core';
import { defaultData } from './schedule/datasource.js';
import { AuthService } from './auth/auth.service';
import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contactForm: any;
  disabledSubmitButton: boolean;
  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
      }
  }
  constructor(private authService: AuthService)

  {}

  ngOnInit() {
    this.authService.autoLogin();
  }


  title = 'eiefitnessapp';

  // loadedFeature = 'recipe';
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

}
