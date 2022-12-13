import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useGetGalleryImageByIdQuery } from '../../state/services/api';
import ImageLoader from '../gallery-album/loader/image-loader.component';
import ImageDetails from '../image/details/image-details.component';
import { ImageProps } from '../image/image-interfaces';

export default function ImageDetailsLayoutPage() {
  const [imageDetails, setImageDetails] = useState<ImageProps>();
  const location = useLocation();
  const id = location.pathname.split('/')[1];

  const { data: imageDetailsResponse, isLoading, isFetching } = useGetGalleryImageByIdQuery({ id: Number(id) });

  useEffect(() => {
    if (imageDetailsResponse && !isLoading && !isFetching) {
      setImageDetails(imageDetailsResponse);
    }
  }, [imageDetailsResponse, isLoading, isFetching]);

  return isLoading ? (
    <ImageLoader />
  ) : imageDetails ? (
    <div className="flex flex-col items-between items-center">
      <div className="box-border w-3/4 p-4 border-transparent bg-primary-3" />
      <div className="text-xl font-bold text-primary-1 hover:cursor-pointer hover:text-primary-2 m-5">
        {imageDetails.title}
      </div>
      <div key={id}>
        <ImageDetails
          id={id}
          title={imageDetails.title}
          description={imageDetails.description}
          upVotes={imageDetails.upVotes}
          downVotes={imageDetails.downVotes}
          score={imageDetails.score}
          link={imageDetails.link}
        />
      </div>
    </div>
  ) : (
    <div />
  );
}
