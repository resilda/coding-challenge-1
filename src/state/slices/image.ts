import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IImagesList {
  imagesList: Array<any>;
}

const initialState: IImagesList = {
  imagesList: [],
};

export const imagesListSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    imagesList: (state, action: PayloadAction<IImagesList>) => {
      state.imagesList = action.payload.imagesList;
    },
  },
});

export const imagesListSelector = (state: RootState) => state.imagesListSlice;

// Methods used in the application components', in order to update the state (modifies the reducer).
export const { imagesList } = imagesListSlice.actions;

// manages an individual data slice.
export default imagesListSlice.reducer;
