import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [FormsModule],
  template: `
    <div class="select-container">
      <select [(ngModel)]="value">
        @for (option of options(); track option.value) {
        <option [value]="option.value">{{ option.label }}</option>
        }
      </select>
    </div>
  `,
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  value = model('');
  options = input.required<{ value: string; label: string }[]>();
}
