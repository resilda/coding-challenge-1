export interface GalleryAlbumParameterItem {
  id: number;
  title: string;
  slug: string;
}

export const galleryAlbumSections: Array<GalleryAlbumParameterItem> = [
  {
    id: 1,
    title: 'Top',
    slug: 'top',
  },
  {
    id: 2,
    title: 'Hot',
    slug: 'hot',
  },
  {
    id: 3,
    title: 'User',
    slug: 'user',
  },
];

export const galleryAlbumSortingList: Array<GalleryAlbumParameterItem> = [
  {
    id: 1,
    title: 'Top',
    slug: 'top',
  },
  {
    id: 2,
    title: 'Viral',
    slug: 'viral',
  },
  {
    id: 3,
    title: 'Time',
    slug: 'time',
  },
  {
    id: 4,
    title: 'Rising',
    slug: 'rising',
  },
];

export const galleryAlbumWindowList: Array<GalleryAlbumParameterItem> = [
  {
    id: 1,
    title: 'Day',
    slug: 'day',
  },
  {
    id: 2,
    title: 'Week',
    slug: 'week',
  },
  {
    id: 3,
    title: 'Month',
    slug: 'month',
  },
  {
    id: 4,
    title: 'Year',
    slug: 'year',
  },
  {
    id: 5,
    title: 'All',
    slug: 'all',
  },
];
