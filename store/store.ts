import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { courierSlice } from '../features/courier/courierSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    courier: courierSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
    },
});
export const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
