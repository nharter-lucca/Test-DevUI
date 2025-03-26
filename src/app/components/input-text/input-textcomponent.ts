import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-text',
  imports: [FormsModule],
  template: `
    <div class="input-container">
      <input
        type="text"
        [class]="icon() ? 'input-with-icon' : 'input-no-icon'"
        [placeholder]="placeholder()"
        [(ngModel)]="value"
      />
      @if (icon()) {
      <i [class]="icon()" class="icon"></i>
      }
    </div>
  `,
  styleUrls: ['./input-text.component.css'],
})
export class InputComponent {
  value = model('');
  placeholder = input.required<string>();
  icon = input<string>('');
}
