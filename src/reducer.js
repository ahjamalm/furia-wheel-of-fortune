import AsyncStorage from '@react-native-async-storage/async-storage';
import log from './reducers/logs';

import { persistCombineReducers } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const rootReducer = persistCombineReducers(persistConfig, {
    log,
});

export default rootReducer;