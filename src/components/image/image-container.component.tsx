import React from 'react';
import { ImageProps } from './image-interfaces';

export default function ImageContainerComponent({ id, title, description, link }: ImageProps) {
  const imageContainer =
    'max-w-xs transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:cursor-pointer hover:drop-shadow-md';

  return (
    <div className={imageContainer}>
      <img src={link} alt={`image_${id}`} className="h-48 w-48" />
      <div className="bg-gradient-to-r from-primary-3 to-primary-2 text-center text-primary-1">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
