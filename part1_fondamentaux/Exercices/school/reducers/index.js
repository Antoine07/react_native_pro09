import { combineReducers } from 'redux';

import load from './load';
import school from './school';

// assembler les reducers en un unique reducer global avec des clés
export default combineReducers({
     load ,
     school 
});