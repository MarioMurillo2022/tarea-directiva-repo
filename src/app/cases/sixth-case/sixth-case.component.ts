import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-sixth-case',
  templateUrl: './sixth-case.component.html',
  styleUrls: ['./sixth-case.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class SixthCaseComponent {

  colorButton: string = 'dark';

}
