import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IAppState {
    bookSearch: string;
}

const initialState: IAppState = {
    bookSearch: ""
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setBookSearch: (state, action: PayloadAction<string>) => {
            state.bookSearch = action.payload
        }
    }
})

export const {
    setBookSearch
} = appSlice.actions
