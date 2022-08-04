import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _modalMode: null,
};

function showHideModal(state, action) {
  state.value = action.payload;
}

export const _showHideModalSlice = createSlice({
  name: "_modalMode",
  initialState,
  reducers: {
    showHideModal,
  },
});
export const { showHideModal: _showHideModalAction } = _showHideModalSlice.actions;

export default _showHideModalSlice.reducer;
