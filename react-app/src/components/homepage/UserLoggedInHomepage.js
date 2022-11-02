import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { loadUserPortfolios } from "../../store/portfolio"
import Navigation from "../navigation"
import './UserLoggedInHomepage.css'



function LoggedInHomepage({ user, portfolios }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const userPortfoliosArr = Object.values(portfolios)
    const userPortfolios = userPortfoliosArr.filter(portfolio => portfolio.ownerId === user.user.id)

    console.log('port array: ', userPortfoliosArr)
    console.log('USER: ', user.user.id)
    console.log('userPorts: ', userPortfolios)

    useEffect(() => {
        dispatch(loadUserPortfolios())
    }, [dispatch])

    return (
        <div>
            <Navigation />
            <div id='portfoliosContainer'>
                Your Portfolios
                {userPortfolios.map(portfolio => (
                    <div id='portfolioList' key={portfolio.id} onClick={() => history.push(`/portfolio/${portfolio.id}`)}>
                        <p style={{ fontWeight: 'bold' }}>{portfolio.accountName}</p>
                        <p>Buying Power: $<span style={{ fontWeight: 'bold' }}>{portfolio.buyingPower.toFixed(2)}</span></p>
                    </div>
                ))}
            </div>
            <button onClick={() => history.push('/portfolio/manage')}>Manage Portfolios</button>
        </div>
    )
}

export default LoggedInHomepage
