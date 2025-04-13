import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',//slice name
    initialState: null,//initial defalt value to the slice
    reducers: {
        addUser: (state, action) => {
            return action.payload;//the state becomes action.payload
        },
        removeUser: (state, action) => {
            return null;
        }
    }
})
// export the actions
export const { addUser, removeUser } = userSlice.actions;
//export the reducer
export default userSlice.reducer;