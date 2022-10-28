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
        ports = dispatch(loadUserPortfolios())
    }, [dispatch])


    const makeNewPortfolio = async (e) => {
        e.preventDefault()
        await dispatch(addAPortfolio(portfolioName))
        setPortfolioName('')
        await dispatch(loadUserPortfolios())
    }

    let ports;
    const loadPorts = async () => {
        ports = await loadUserPortfolios()
        ports = Object.values(ports)
        console.log('loadports ports: ', ports)
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
                {loadPorts() && ports.map(portfolio => (
                    <div key={portfolio.id}>
                        <div>Portfolio</div>
                        {portfolio.accountName}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LoggedInHomepage
