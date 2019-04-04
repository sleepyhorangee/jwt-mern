    import {combineReducers} from 'redux'
    import ItemReducer from './itemReducer'

    export default combineReducers({
        item: ItemReducer
         // auth: authReducer
    })
