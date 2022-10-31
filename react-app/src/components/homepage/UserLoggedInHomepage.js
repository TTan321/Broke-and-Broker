import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addAPortfolio, loadUserPortfolios } from "../../store/portfolio"
import Navigation from "../navigation"



function LoggedInHomepage({ portfolios }) {
    const dispatch = useDispatch()
    // const userPortfolios = useSelector(state => state.portfolioState)
    const userPortfoliosArr = Object.values(portfolios)

    const [portfolioName, setPortfolioName] = useState('')

    console.log('port array: ', userPortfoliosArr)

    useEffect(() => {
        dispatch(loadUserPortfolios())
    }, [dispatch])


    const makeNewPortfolio = async (e) => {
        e.preventDefault()
        await dispatch(addAPortfolio(portfolioName))
        setPortfolioName('')
        await dispatch(loadUserPortfolios())
    }

    return (
        <div>
            <Navigation />
            <div>
                <form onSubmit={makeNewPortfolio}>
                    <label htmlFor="portfolioName">Portfolio Name</label>
                    <input
                        name="portfolioName"
                        type="text"
                        value={portfolioName}
                        onChange={(e) => setPortfolioName(e.target.value)}
                        required
                    />
                    <button type="submit">Add portfolio</button>
                </form>
            </div>
            <div>
                Your Portfolios
                {userPortfoliosArr.map(portfolio => (
                    <div key={portfolio.id}>
                        {portfolio.accountName}
                        {portfolio.buyingPower}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoggedInHomepage
