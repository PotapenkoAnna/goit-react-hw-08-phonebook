const { createSlice } = require('@reduxjs/toolkit');

const filterInit = {
  select: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInit,
  reducers: {
    setFilter: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer; 