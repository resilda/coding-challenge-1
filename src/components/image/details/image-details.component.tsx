import React from 'react';
import { ImageProps } from '../image-interfaces';

export default function ImageDetails({ id, title, description, upVotes, downVotes, score, link }: ImageProps) {
  const imageContainer =
    'transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:cursor-pointer hover:drop-shadow-md';
  const textStyle = 'text-md font-medium';

  return (
    <div className="flex gap-4 p-5 ml-5">
      <img src={link} alt={`image_${id}`} className={imageContainer} />
      <div className="flex flex-col ml-5">
        <div className="text-xl font-bold text-primary-1 hover:cursor-pointer hover:text-primary-2">{description}</div>
        <br />
        <div className="flex gap-4 ">
          <div className={textStyle}>UpVotes: {upVotes}</div>
          <div className={textStyle}>DownVotes: {downVotes}</div>
          <div className={textStyle}>Score: {score}%</div>
        </div>
      </div>
    </div>
  );
}
