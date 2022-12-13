export interface NavElement {
  id: number;
  title: string;
  slug: string;
}

export const navigationHederELement: Array<NavElement> = [
  {
    id: 1,
    title: 'About',
    slug: '/about',
  },
  {
    id: 2,
    title: 'Contact',
    slug: '/contacts',
  },
  {
    id: 3,
    title: 'Settings',
    slug: '/settings',
  },
];
