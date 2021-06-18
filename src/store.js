import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const userInfoFromStorage = localStorage.getItem('userInfo_taskapp')
    ? JSON.parse(localStorage.getItem('userInfo_taskapp'))
    : null

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage
    }
}

const middleWare = [thunk]

const devtools = process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleWare)
    : composeWithDevTools(applyMiddleware(...middleWare))

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

const store = createStore(
    reducer,
    initialState,
    devtools
)

export default store