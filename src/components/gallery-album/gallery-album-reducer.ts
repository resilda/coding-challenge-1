export interface GalleryAlbumBaseState {
  section?: string;
  sort?: string;
  window?: string;
}

export enum GalleryAlbumBaseActionType {
  SetGallerySelectedSection,
  UpdateGallerySortLabel,
  UpdateGalleryWindowFilter,
}

export interface GalleryAlbumBaseReducerAction {
  type: GalleryAlbumBaseActionType;
  section?: string;
  sort?: string;
  window?: string;
}

export default function reducer(
  state: GalleryAlbumBaseState,
  action: GalleryAlbumBaseReducerAction
): GalleryAlbumBaseState {
  switch (action.type) {
    case GalleryAlbumBaseActionType.SetGallerySelectedSection:
      if (action.section) {
        return {
          ...state,
          section: action.section,
        };
      }
      return { ...state };
    case GalleryAlbumBaseActionType.UpdateGallerySortLabel:
      if (action.sort) {
        return {
          ...state,
          sort: action.sort,
        };
      }
      return { ...state };
    case GalleryAlbumBaseActionType.UpdateGalleryWindowFilter:
      if (action.window) {
        return {
          ...state,
          window: action.window,
        };
      }
      return { ...state };
    default:
      return state;
  }
}
