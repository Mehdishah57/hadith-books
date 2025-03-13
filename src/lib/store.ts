import { configureStore } from '@reduxjs/toolkit'

import { appSlice } from './slices/app'

export const makeStore = () => {
  return configureStore({
    reducer: {
        app: appSlice.reducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
