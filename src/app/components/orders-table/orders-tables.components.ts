import { Component, input } from '@angular/core';
import { Order } from '../types/types';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-tables.components.html',
  styleUrls: ['./orders-tables.components.css'],
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
