import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { rootReducer } from "../config/store"
import { store } from '../index'

// Get the types of the dispatch and reducer from store
export type AppDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof rootReducer>

// RTK Hooks 
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector