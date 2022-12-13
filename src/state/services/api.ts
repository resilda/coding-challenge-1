import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import e from 'express';
import { GalleryAlbumResponse } from '../../components/gallery-album/gallery-album-interfaces';
import { GalleryImageResponse } from '../../components/image/image-interfaces';

const baseQuery = fetchBaseQuery({
  baseUrl: `https://api.imgur.com/3`,
  prepareHeaders: (headers) => {
    // header authorization
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['Album', 'Image'],
  endpoints: (builder) => ({
    getGalleryAlbum: builder.query({
      query: (args: { section: string; sort?: string; window?: string; showViral?: boolean }) => {
        let galleryAlbumApi = `/gallery/${args.section}`;

        if (args.sort) {
          galleryAlbumApi += `/${args.sort}`;
        }

        if (args.window) {
          galleryAlbumApi += `/${args.window}`;
        }

        if (args.showViral) {
          galleryAlbumApi += `?showViral=${args.showViral}`;
        }

        return galleryAlbumApi;
      },
      transformResponse: (result: GalleryAlbumResponse) => {
        return result.data.images;
      },
      providesTags: ['Album'],
    }),
    getGalleryImageById: builder.query({
      query: (args: { id: number }) => `/gallery/image/${args.id}`,
      transformResponse: (result: GalleryImageResponse) => {
        return result.data;
      },
      providesTags: ['Image'],
    }),
  }),
});

export const { useGetGalleryAlbumQuery, useGetGalleryImageByIdQuery } = api;
