import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { UISlice } from './slices'


const rootReducer = combineReducers({
    UI: UISlice
})

export const createStore = () =>
    configureStore({
        reducer: rootReducer,

        // default
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false
            })
        }
    })

export const store = createStore()
export type RootStateType = ReturnType<typeof rootReducer>