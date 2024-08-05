import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FirstCaseComponent } from "../cases/first-case/first-case.component";
import { SecondCaseComponent } from "../cases/second-case/second-case.component";
import { ThirdCaseComponent } from "../cases/third-case/third-case.component";
import { FifthCaseComponent } from '../cases/fifth-case/fifth-case.component';
import { SixthCaseComponent } from '../cases/sixth-case/sixth-case.component';
import { FourthCaseComponent } from "../cases/fourth-case/fourth-case.component";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FirstCaseComponent, SecondCaseComponent, ThirdCaseComponent, FourthCaseComponent, FifthCaseComponent, SixthCaseComponent],
})
export class HomePage {
  constructor() { }
}
