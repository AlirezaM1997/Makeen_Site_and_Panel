import { configureStore } from '@reduxjs/toolkit';
import  showHideModalReducer from '../slices/showRegistrationModalSlice';
import  _showHideModalReducer from '../slices/showConsultationModal';

export const store = configureStore({
  reducer: {
    modalMode: showHideModalReducer,
    _modalMode: _showHideModalReducer
  },
});
