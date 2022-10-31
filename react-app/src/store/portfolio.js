// Types
const GET_USER_PORTFOLIOS = 'Portfolio/getUserPortfolios'
const Add_Portfolio = 'Portfolio/addPortfolio'

// Action
const getUserPortfolios = portfolios => {
    return {
        type: GET_USER_PORTFOLIOS,
        portfolios
    }
}

const addPortfolio = portfolio => {
    return {
        type: Add_Portfolio,
        portfolio
    }
}

// Thunk Action
export const loadUserPortfolios = () => async dispatch => {
    const response = await fetch('/api/portfolios/')
    if (response.ok) {
        const data = await response.json();
        dispatch(getUserPortfolios(data.portfolios));
        return data
    }
}

export const addAPortfolio = (portfolioName) => async dispatch => {
    const response = await fetch('/api/portfolios', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            'accountName': portfolioName
        })
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(addPortfolio(data));
        return data
    }
}

const portfolioReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_PORTFOLIOS:
            const allUserPortfolios = {}
            action.portfolios.forEach(portfolio => {
                allUserPortfolios[portfolio.id] = portfolio
            })
            return allUserPortfolios

        case Add_Portfolio:
            const newPortfolio = {}
            newPortfolio[action.portfolio.id] = action.portfolio
            const newState = { ...state, ...newPortfolio }
            return newState

        default:
            return state
    }
}

export default portfolioReducer
