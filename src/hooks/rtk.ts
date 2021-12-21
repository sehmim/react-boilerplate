import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch } from ".."
import { RootStateType } from "../store"

// RTK Hooks 
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector