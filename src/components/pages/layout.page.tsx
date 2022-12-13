import React from 'react';
import GalleryAlbumLayout from '../gallery-album/gallery-album.layout';
import NavigationBar from '../navigation/navigation-bar.component';
import { navigationHederELement } from '../navigation/navigation-header-elements';

export default function LayoutPage() {
  const layoutWrapper = 'flex flex-col mx-5 gap-5';

  return (
    <div className={layoutWrapper}>
      <div className="box-border w-full p-4 border-transparent bg-primary-3" />
      <NavigationBar pageTitle="Imgur Gallery" navElements={navigationHederELement} />
      <GalleryAlbumLayout />
    </div>
  );
}
