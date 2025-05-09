import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
    name: 'genreOrCategory',
    initialState: {
        genreOrCategoryName: '',
        page: 1,
        searchQuery: '',
    },
    reducers: {
        selectGenreOrCategory: (state, action) => {
            console.log("Genre or Category Selected:", action.payload);
            state.genreOrCategoryName = action.payload;
        },
    },
});


export const { selectGenreOrCategory } = genreOrCategory.actions;
export default genreOrCategory.reducer;