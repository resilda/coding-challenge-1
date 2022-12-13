import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetGalleryAlbumQuery } from '../../state/services/api';
import ImageContainerComponent from '../image/image-container.component';
import { ImageProps } from '../image/image-interfaces';
import GalleryAlbumLoader from './loader/gallery-album-loader.component';
import reducer, { GalleryAlbumBaseActionType, GalleryAlbumBaseState } from './gallery-album-reducer';
import cx from 'classnames';
import GalleryAlbumHeaderSection from './header/gallery-album-header';
import {
  galleryAlbumSections,
  galleryAlbumSortingList,
  galleryAlbumWindowList,
} from './header/gallery-album-header-elements';

export default function GalleryAlbumLayout() {
  const [galleryAlbumImages, setGalleryAlbumImages] = useState<Array<ImageProps>>([]);
  const [showViralImages, setShowViralImages] = useState<boolean>(true);
  const initalState: GalleryAlbumBaseState = {
    section: 'hot',
    sort: 'viral',
    window: 'day',
  };
  const [state, dispatcher] = useReducer(reducer, initalState);

  const { data: galleryAlbumResponse, isLoading, isFetching } = useGetGalleryAlbumQuery({
    section: state.section || 'hot',
    sort: state.sort || 'viral',
    window: state.window || 'day',
    showViral: showViralImages,
  });

  function onGallerySectionChange(selectedSection: string) {
    dispatcher({
      type: GalleryAlbumBaseActionType.SetGallerySelectedSection,
      section: selectedSection,
    });
  }

  function onGallerySortingLabelChange(selectedSortingLabel: string) {
    dispatcher({
      type: GalleryAlbumBaseActionType.UpdateGallerySortLabel,
      sort: selectedSortingLabel,
    });
  }

  function onGalleryWindowFilterChange(selectedWindowFilter: string) {
    dispatcher({
      type: GalleryAlbumBaseActionType.UpdateGalleryWindowFilter,
      window: selectedWindowFilter,
    });
  }

  useEffect(() => {
    if (galleryAlbumResponse && !isLoading && !isFetching) {
      setGalleryAlbumImages(galleryAlbumResponse);
    }
  }, [galleryAlbumResponse, isLoading, isFetching, state.section, state.sort, state.window, showViralImages]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <GalleryAlbumHeaderSection
          listOfElements={galleryAlbumSections}
          updateStateMethod={onGallerySectionChange}
          className="border border-primary-3 text-primary-2 p-3 rounded-md hover:bg-primary-3 hover:text-primary-1 hover:cursor-pointer "
        />
        <button
          className={cx('bg-primary-3 text-primary-1 p-3 rounded-md hover:bg-primary-2', {
            'bg-gray-3 text-gray-1 hover:bg-gray-2': state.section !== 'user',
          })}
          disabled={state.section !== 'user'}
          onClick={() => setShowViralImages(!showViralImages)}
        >
          {showViralImages ? 'Show non-viral mages' : 'Show viral images'}
        </button>
      </div>
      <div className="mt-2">
        {state.section === 'user' ? (
          <div className="ml-1">
            <GalleryAlbumHeaderSection
              listOfElements={galleryAlbumSortingList}
              updateStateMethod={onGallerySortingLabelChange}
              className="text-primary-2 underline decoration-primary-2 hover:text-primary-1 hover:cursor-pointer "
            />
          </div>
        ) : state.section === 'top' ? (
          <div className="ml-1">
            <GalleryAlbumHeaderSection
              listOfElements={galleryAlbumWindowList}
              updateStateMethod={onGalleryWindowFilterChange}
              className="text-primary-2 underline decoration-primary-2 hover:text-primary-1 hover:cursor-pointer "
            />
          </div>
        ) : (
          <div />
        )}
      </div>
      {isLoading ? (
        <GalleryAlbumLoader />
      ) : (
        <div className="grid-cols-3 p-20 space-y-2 bg-yellow-200 lg:space-y-0 lg:grid lg:grid-rows-3 gap-4">
          {galleryAlbumImages.map((galleryAlbumImage) => {
            return (
              <Link to={`/${galleryAlbumImage.id}`} key={galleryAlbumImage.id}>
                <ImageContainerComponent {...galleryAlbumImage} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
