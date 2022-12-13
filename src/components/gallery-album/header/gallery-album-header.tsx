import React from 'react';

export interface GalleryAlbumHeaderSectionProps {
  listOfElements: Array<any>;
  updateStateMethod: (value: string) => void;
  className: string;
}

export default function GalleryAlbumHeaderSection({
  listOfElements,
  updateStateMethod,
  className,
}: GalleryAlbumHeaderSectionProps) {
  return (
    <div className="flex gap-x-3 ml-4">
      {listOfElements.map((element) => {
        return (
          <div key={element.id} onClick={() => updateStateMethod(element.slug)} className={className}>
            {element.title}
          </div>
        );
      })}
    </div>
  );
}
