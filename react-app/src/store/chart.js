// type
const GET_CHART = "charts/GET_CHART"

// action
const getChart = chart => {
    return {
        type: GET_CHART,
        chart
    }
}

// thunk
export const loadChart = (coingeckoId) => async dispatch => {
    const reponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coingeckoId}/market_chart?vs_currency=usd&days=1&interval=hourly`)
    const data = await reponse.json()
    data.coingeckoId = coingeckoId
    dispatch(getChart(data))
}

// reducer

const chartReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_CHART:
            newState = { ...action.chart }
            return newState

        default:
            return state
    }
}
export default chartReducer
