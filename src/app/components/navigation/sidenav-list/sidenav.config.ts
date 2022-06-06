export interface SidenavItem {
  routerLink: string;
  icon: string;
  title: string;
  cssClass: string;
}

export const sidenavItems: SidenavItem[] = [
  {
    routerLink: '/board',
    icon: 'shutter_speed',
    title: 'Board',
    cssClass: '',
  }, 
  {
    routerLink: '/projects',
    icon: 'menu',
    title: 'Projects',
    cssClass: '',
  },
  {
    routerLink: '',
    icon: 'settings',
    title: 'Settings',
    cssClass: '',
  },
  {
    routerLink: '',
    icon: 'update',
    title: 'Upgrade',
    cssClass: 'sidenav_item_update',
  },
  {
    routerLink: '',
    icon: 'radio_button_checked',
    title: 'Logout',
    cssClass: 'sidenav_item_logout',
  },
]