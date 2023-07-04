import { numberReducer } from './number'
import { userReducer } from './user'

export function reducer(state, action) {
    let newState = numberReducer(state, action)
    userReducer(newState, action)
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'numberMultiply7':
            return { ...state, number: state.number * 7 }
        case 'numberDivided25':
            return { ...state, number: state.number / 25 }
        case 'numberInt':
            return { ...state, number: parseInt(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + action.payload }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}