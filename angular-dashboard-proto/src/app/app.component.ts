import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'fiftyTruckDashBoardTest';
  advancedOptions=false;
  isLoading=true;
  text;

  constructor(private translateService: TranslateService, private languageService:LanguageService, private router: Router) {
    translateService.setDefaultLang(environment.language);
    translateService.use(environment.language);
  }

  ngOnInit() {
    this.translateService.get('allText')
      .subscribe(val => {
        this.languageService.text = val;
        this.isLoading = false;
      });
  }
}
