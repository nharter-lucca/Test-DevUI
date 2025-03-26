import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [class]="{
        'button-primary': variant() === 'primary',
        'button-secondary': variant() === 'secondary'
      }"
      [type]="type()"
    >
      <i [class]="icon()" class="icon"></i>
      {{ label() }}
    </button>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  label = input.required<string>();
  variant = input<'primary' | 'secondary'>('primary');
  type = input<'button' | 'submit'>('button');
  icon = input<string>('');
}
