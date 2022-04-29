import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
  useDispatch,
} from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import filmCurrent from "./slices/film-current";
import filmSearch from "./slices/film-search";

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    thunk: false,
  }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: {
    films: filmSearch,
    film: filmCurrent,
  },
  middleware,
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export default store;
