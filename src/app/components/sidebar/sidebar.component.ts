import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sibebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onMobileClick() {
    if (window.innerWidth < 1024) {
      // lg breakpoint
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    if (window.innerWidth < 1024 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  links = [
    {
      label: 'Accueil',
      href: 'https://www.lucca.fr/',
      icon: 'icon-home',
      external: true,
    },
    {
      label: 'Commandes',
      href: '/',
      active: true,
      icon: 'icon-checklist',
    },
    {
      label: 'Produits',
      href: 'https://www.shopify.com/fr',
      icon: 'icon-computer',
      external: true,
    },
    {
      label: 'Clients',
      href: 'https://www.salesforce.com/fr/',
      icon: 'icon-users',
      external: true,
    },
    {
      label: 'Rapport',
      href: 'https://www.salesforce.com/fr/',
      icon: 'icon-mileage',
      external: true,
    },
  ];
}
