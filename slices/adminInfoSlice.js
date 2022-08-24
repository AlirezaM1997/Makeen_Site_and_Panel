import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    info: null,
};
function adminInfo(state, action) {
  state.value = action.payload;
}
export const adminInfoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    adminInfo,
  },
});
export const { adminInfo: adminInfoAction } = adminInfoSlice.actions;
export default adminInfoSlice.reducer;
