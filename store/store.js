import { configureStore,combineReducers } from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer,persistStore } from "redux-persist"
import thunk from "redux-thunk"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler:autoMergeLevel2,
    
}

const rootReducer = combineReducers({
    counter:counterSlice
})

const persistedReducer = persistReducer(persistConfig,rootReducer)
  
  
export const store = configureStore({
    reducer:persistedReducer,
    middleware:[thunk]
})
export const persistor = persistStore(store)