import { configureStore } from '@reduxjs/toolkit';
import imagesListSlice from './slices/image';
import { api } from './services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    imagesListSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

/**
 * The last value returned by the store's reducer.
 * @returns { RootState } - current state tree of your application
 */
export type RootState = ReturnType<typeof store.getState>;

// Expanding original store object with new dispatch property.
export type AppDispatch = typeof store.dispatch;
