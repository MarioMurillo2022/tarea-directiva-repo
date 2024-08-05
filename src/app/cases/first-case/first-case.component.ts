import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonInput, IonItem } from "@ionic/angular/standalone";

@Component({
  selector: 'app-first-case',
  templateUrl: './first-case.component.html',
  standalone: true,
  styleUrls: ['./first-case.component.scss'],
  imports: [IonItem, IonInput, IonButton, CommonModule]
})
export class FirstCaseComponent {

  contador: number = 0;
  mostrarMensaje: boolean = false;

  incrementar() {
    this.contador++;
    if (this.contador >= 18) {
      this.mostrarMensaje = true;
    }
  }

}
