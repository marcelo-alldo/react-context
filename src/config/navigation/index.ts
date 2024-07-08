interface NavigationType {
  url: string;
  label: string;
  key: string;
}

const navigation: NavigationType[] = [
  { key: 'nav-1', label: 'Home', url: '/' },
  { key: 'nav-2', label: 'Produtos', url: '/products' },
  { key: 'nav-3', label: 'Contato', url: '/contact' }
];

export default navigation;
