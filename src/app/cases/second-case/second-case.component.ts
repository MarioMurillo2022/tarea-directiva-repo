import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonList, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-second-case',
  standalone: true,
  templateUrl: './second-case.component.html',
  styleUrls: ['./second-case.component.scss'],
  imports: [CommonModule, IonItem, IonList]
})
export class SecondCaseComponent {
  animals: string[] = ["Tortuga", "Gallina", "Tigre", "zarigüeya", "Babuino"];

}
