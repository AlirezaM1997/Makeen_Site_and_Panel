import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalMode: null,
};

function showHideModal(state, action) {
  state.value = action.payload;
}

export const showHideModalSlice = createSlice({
  name: "modalMode",
  initialState,
  reducers: {
    showHideModal,
  },
});
export const { showHideModal: showHideModalAction } = showHideModalSlice.actions;

export default showHideModalSlice.reducer;
