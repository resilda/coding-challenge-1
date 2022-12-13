import { ImageProps } from '../image/image-interfaces';

export interface GalleryAlbumDataProps {
  title: string;
  description: string;
  images: Array<ImageProps>;
}

export interface GalleryAlbumResponse {
  data: GalleryAlbumDataProps;
}
