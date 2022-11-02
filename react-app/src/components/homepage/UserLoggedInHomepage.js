import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addAPortfolio, loadUserPortfolios } from "../../store/portfolio"
import Navigation from "../navigation"
import './UserLoggedInHomepage.css'



function LoggedInHomepage({ user, portfolios }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const userPortfoliosArr = Object.values(portfolios)
    const userPortfolios = userPortfoliosArr.filter(portfolio => portfolio.ownerId === user.user.id)

    const [portfolioName, setPortfolioName] = useState('')

    console.log('port array: ', userPortfoliosArr)
    console.log('USER: ', user.user.id)
    console.log('userPorts: ', userPortfolios)

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
            <div id='portfoliosContainer'>
                Your Portfolios
                {userPortfolios.map(portfolio => (
                    <div id='portfolioList' key={portfolio.id} onClick={() => history.push(`/portfolio/${portfolio.id}`)}>
                        <p style={{ fontWeight: 'bold' }}>{portfolio.accountName}</p>
                        <p>Buying Power: $<span style={{ fontWeight: 'bold' }}>{portfolio.buyingPower.toFixed(2)}</span></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoggedInHomepage
