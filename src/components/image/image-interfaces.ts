export interface GalleryImageResponse {
  data: ImageProps;
}

export interface ImageProps {
  id: string;
  title: string;
  description: string;
  upVotes?: number;
  downVotes?: number;
  score?: number;
  link?: string;
}
