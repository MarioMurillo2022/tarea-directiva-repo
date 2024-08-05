import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-fourth-case',
  templateUrl: './fourth-case.component.html',
  styleUrls: ['./fourth-case.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class FourthCaseComponent {

  nota: number = Math.floor(Math.random() * 101);

}
