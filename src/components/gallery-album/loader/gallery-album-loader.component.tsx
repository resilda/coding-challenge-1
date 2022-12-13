import React from 'react';
import ImageLoader from './image-loader.component';

export default function GalleryAlbumLoader() {
  return (
    <div className="grid-cols-3 p-20 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:grid-rows-3 gap-4">
      <ImageLoader />
      <ImageLoader />
      <ImageLoader />
    </div>
  );
}
