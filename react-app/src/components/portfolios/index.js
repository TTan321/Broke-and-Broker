import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { loadAStock } from "../../store/finnhub"
import { loadUserPortfolios } from "../../store/portfolio"
import Navigation from "../navigation"
import Transactions from "../transactions/Transactions"
import './indexPortfolio.css'

function Portfolio() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { portfolioId } = useParams()
    const portfolios = useSelector(state => state.portfolioState)
    const portfoliosArr = Object.values(portfolios)
    const currentPortfolio = portfoliosArr.find(portfolio => portfolio.id === +portfolioId)
    const stock = useSelector(state => state.assetState)
    const stocksArr = Object.values(stock)


    // console.log('STOCKS: ', typeof stock[1].price_change_percentage_24h, stock[1].price_change_percentage_24h)

    useEffect(() => {
        dispatch(loadUserPortfolios())
        dispatch(loadAStock())
    }, [dispatch])

    console.log('stockstate', stock)

    return !!portfoliosArr.length && stock && (
        <div>
            <Navigation />
            <div>
                <div id='headerStocks'>
                    {stocksArr.map((stock, idx) => (
                        <div key={idx} className='stockContainer' onClick={() => history.push(`/stocks/${stock.symbol}`)}>
                            <p className='ticker'>{stock.symbol}/usd <span className='stockPrice'>${stock.current_price.toFixed(2)}</span></p>
                            <p className='stockChangePercent' style={stock.price_change_percentage_24h > 0 ? { color: 'green' } : { color: 'red' }} >{stock.price_change_percentage_24h.toFixed(2)}% <span className="stockChange">({stock.price_change_24h.toFixed(2)})</span></p>
                        </div>
                    ))}
                </div>
                <h1>{currentPortfolio.accountName}</h1>
                <Transactions />
            </div>
        </div >
    )
}

export default Portfolio
