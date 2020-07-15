import { PaddleNavigation } from '../interfaces/commons.interface';

export const navigation: PaddleNavigation[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    tooltip: 'Dashboard',
    icon: 'dashboard',
    url: '/home/dashboard'
  },
  {
    id: 'bookmarks',
    title: 'Bookmarks',
    tooltip: 'Bookmarks',
    icon: 'bookmarks',
    url: '/home/bookmarks'
  },
  {
    id: 'music',
    title: 'Music',
    tooltip: 'Music',
    icon: 'library_music',
    url: '/home/music'
  },
  {
    id: 'radio',
    title: 'Radio',
    tooltip: 'Radio',
    icon: 'radio',
    url: '/home/radio'
  },
  {
    id: 'settings',
    title: 'Settings',
    tooltip: 'Settings',
    icon: 'settings',
    url: '/home/settings'
  },
]
