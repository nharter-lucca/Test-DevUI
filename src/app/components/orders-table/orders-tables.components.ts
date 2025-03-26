import { Component, input, signal } from '@angular/core';
import { Order } from '../../types/types';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-tables.components.html',
  styleUrls: ['./orders-tables.components.css'],
  imports: [CheckboxComponent, FormsModule],
})
export class OrdersTableComponent {
  orders = input<Order[]>([]);
  selectedOrders = signal<Set<string>>(new Set());
  selectAll = signal<boolean>(false);

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

  toggleSelectAll() {
    this.selectAll.set(!this.selectAll());
    if (this.selectAll()) {
      this.selectedOrders.set(new Set(this.orders().map((order) => order.id)));
    } else {
      this.selectedOrders.set(new Set());
    }
  }

  toggleOrderSelection(orderId: string) {
    const currentSelected = this.selectedOrders();
    if (currentSelected.has(orderId)) {
      currentSelected.delete(orderId);
    } else {
      currentSelected.add(orderId);
    }
    this.selectedOrders.set(currentSelected);
    this.selectAll.set(currentSelected.size === this.orders().length);
  }

  isOrderSelected(orderId: string): boolean {
    return this.selectedOrders().has(orderId);
  }
}
