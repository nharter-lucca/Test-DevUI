import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [FormsModule],
  template: `
    <div class="checkbox-container" (click)="toggleCheck()">
      <div class="custom-checkbox" [class.checked]="checked()">
        @if (checked()) {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          class="bi bi-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.485 1.929a.75.75 0 0 1 1.06 1.06l-8.5 8.5a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06L6 9.439l7.485-7.51z"
          />
        </svg>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .checkbox-container {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .custom-checkbox {
        width: 20px;
        border-radius: 6px;
        height: 20px;
        padding: 2px;
        padding-top: 4px;
        border: 2px solid #667799;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .custom-checkbox.checked {
        background-color: #667799;
      }
    `,
  ],
})
export class CheckboxComponent {
  checked = model(false);
  label = input<string>('');

  toggleCheck() {
    this.checked.set(!this.checked());
  }
}
