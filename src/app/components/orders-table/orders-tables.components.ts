import { Component, input } from '@angular/core';
import { Order } from '../types/types';
import { CheckboxComponent } from '../checkbox/checkbox.component';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-tables.components.html',
  styleUrls: ['./orders-tables.components.css'],
  imports: [CheckboxComponent],
})
export class OrdersTableComponent {
  orders = input<Order[]>([]);

  formatDate(dateString: string): string {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    });
  }
}
