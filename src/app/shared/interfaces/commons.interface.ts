/* Navigation */
export interface PaddleNavigation {
  id: string;
  title: string;
  tooltip: string;
  icon: string;
  url: string;
}

/* Dahboard */
export interface Item {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}
export interface Dashboard {
  id: string;
  title: string;
  items: Item[];
}
