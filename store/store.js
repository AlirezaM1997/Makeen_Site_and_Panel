import { configureStore } from '@reduxjs/toolkit';

import  showHideModalSlice from '../slices/showRegistrationModalSlice';

export const store = configureStore({
  reducer: {
    modalMode: showHideModalSlice,
  },
});
