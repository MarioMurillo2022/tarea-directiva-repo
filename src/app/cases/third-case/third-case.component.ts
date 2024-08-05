import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-third-case',
  standalone: true,
  templateUrl: './third-case.component.html',
  styleUrls: ['./third-case.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ThirdCaseComponent {

  dni: string = '';


}
