// Types
const GET_USER_PORTFOLIOS = 'Portfolio/getUserPortfolios'
const Add_Portfolio = 'Portfolio/addPortfolio'
const Edit_Portfolio = 'Portfolio/editPortfolio'
const Delete_Portfolio = 'Portfolio/deletePortfolio'

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

const editPortfolio = portfolio => {
    return {
        type: Edit_Portfolio,
        portfolio
    }
}

const removePortfolio = id => {
    return {
        type: Delete_Portfolio,
        id
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

export const updatePortfolio = (data) => async dispatch => {
    const response = await fetch(`/api/portfolios/${data.portfolioId}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            'accountName': data.portfolioName
        })
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(editPortfolio(data.portfolio));
        return data
    }
}

export const deletePortfolio = (portfolioId) => async dispatch => {
    const response = await fetch(`/api/portfolios/${portfolioId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const message = await response.json();
        dispatch(removePortfolio(portfolioId));
        return message;
    }

};

const portfolioReducer = (state = {}, action) => {
    let newState;
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
            newState = { ...state, ...newPortfolio }
            return newState

        case Edit_Portfolio:
            newState = { ...state }
            newState[action.portfolio.id] = action.portfolio
            return newState

        case Delete_Portfolio: {
            const newState = { ...state }
            delete newState[action.id];
            return newState;
        }

        default:
            return state
    }
}

export default portfolioReducer
