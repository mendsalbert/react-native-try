import PRODUCTS from '../../data/dummy-data';
const initialState = {
    availableProducts: PRODUCTS,
    userProducts:PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

const reducer = (state = initialState, action) => {
   return state
}
export default reducer 