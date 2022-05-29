import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios, { AxiosStatic } from "axios";
import { API } from "./config";
import { countriesReducer } from "./features/countries/contriesSlice";
import { detailsReducer } from "./features/details/detailsSlice";
import { themeReducer } from "./features/theme/themeSlice";
import { controlsReducer } from "./features/controls/controlsSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface IExtraParams {
  client: AxiosStatic,
  API: typeof API
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme']
}

const rootReducer = combineReducers({
    countries: countriesReducer,
    theme: themeReducer,
    controls: controlsReducer,
    details: detailsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          API,
        },
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE]
      }
    }),
});

export const persistor = persistStore(store)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
