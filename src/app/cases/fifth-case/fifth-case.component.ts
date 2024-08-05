import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonLabel } from "@ionic/angular/standalone";
@Component({
  selector: 'app-fifth-case',
  standalone: true,
  templateUrl: './fifth-case.component.html',
  styleUrls: ['./fifth-case.component.scss'],
  imports: [IonLabel, CommonModule, FormsModule]
})
export class FifthCaseComponent {

  colorTexto: string = '#2aff2b';

}
