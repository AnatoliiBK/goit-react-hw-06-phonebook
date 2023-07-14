import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from "./contactsSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const middleware = getDefaultMiddleware({
  serializableCheck: false, // Вимкнення перевірки серіалізованості для дій
});

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
