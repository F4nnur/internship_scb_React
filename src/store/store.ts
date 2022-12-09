import {configureStore} from "@reduxjs/toolkit";
import {entitiesReducer} from "./reducers/entities/entities.reducer";
import {profileReducer} from "./reducers/profile/profile.reducer";
import {loginReducer} from "./reducers/login/login.reducer";

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type GetState = typeof store["getState"];

export const store = configureStore({
    reducer: {
        [profileReducer.name]: profileReducer.reducer,
        [entitiesReducer.name]: entitiesReducer.reducer,
        [loginReducer.name]: loginReducer.reducer,
    } as const,
});
