

// type
const GET_SINGLE_STOCK = 'stocks/GET_SINGLE_STOCK'

// action
const getSingleStock = stock => {
    return {
        type: GET_SINGLE_STOCK,
        stock
    }
}

// thunk action
export const loadAStock = () => async dispatch => {
    const finnhub = require('finnhub');
    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "cddutm2ad3i4an25va60cddutm2ad3i4an25va6g"
    const finnhubClient = new finnhub.DefaultApi()
    console.log('before finnhub api')
    finnhubClient.stockSymbols('US', (error, data, response) => {
        console.log('loadstock data: ', data)
        dispatch(getSingleStock(data))
    });
}

const assetReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SINGLE_STOCK:
            const stocks = {}
            return state

        default:
            return state
    }
}

export default assetReducer
