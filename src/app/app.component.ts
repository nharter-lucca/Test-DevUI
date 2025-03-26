import { Component, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input-text/input-textcomponent';
import { ButtonComponent } from './components/button/button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrdersTableComponent } from './components/orders-table/orders-tables.components';
import { SelectComponent } from './components/select/select.component';
import orders from './orders.json';
import { Order } from './types/types';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    InputComponent,
    ButtonComponent,
    SidebarComponent,
    OrdersTableComponent,
    SelectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  orders = orders as Order[];
  search = signal('');
  selectedCategory = signal('');
  selectedBuyer = signal('');

  // Get unique buyers from orders
  buyers = [...new Set(this.orders.map((order) => order.client.name))].sort();

  // Get buyer options for the select component
  get buyerOptions() {
    return [
      { value: '', label: 'Acheteur' },
      ...this.buyers.map((buyer) => ({ value: buyer, label: buyer })),
    ];
  }

  filters = [
    {
      label: 'Payée',
      value: 'successful-payment',
    },
    {
      label: 'En attente',
      value: 'pending-payment',
    },
    {
      label: 'Échoué',
      value: 'failed-payment',
    },
  ];

  // Use linkedSignal instead of computed to be able to rewrite the value afterward
  filteredOrders = linkedSignal(() =>
    this.orders.filter(
      (order) =>
        (order.id.toLowerCase().includes(
          this.search()
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, '')
        ) ||
          order.client.name.toLowerCase().includes(
            this.search()
              .toLowerCase()
              .replace(/[^a-z0-9-]/g, '')
          )) &&
        (this.selectedCategory() === '' ||
          order.status === this.selectedCategory()) &&
        (this.selectedBuyer() === '' ||
          order.client.name === this.selectedBuyer())
    )
  );

  toggleCategory(category: string) {
    if (this.selectedCategory() === category) {
      this.resetCategory();
    } else {
      this.selectedCategory.set(category);
    }
  }

  resetCategory() {
    this.selectedCategory.set('');
  }

  resetBuyer() {
    this.selectedBuyer.set('');
  }
}
