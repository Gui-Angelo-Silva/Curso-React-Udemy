import { reducer } from './reducers'
import { numberAdd2 } from './actions/number'

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco no número
    number: 0
}

export {
    initialState,
    reducer,
    numberAdd2
}