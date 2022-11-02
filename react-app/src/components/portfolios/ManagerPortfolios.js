import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addAPortfolio, deletePortfolio, loadUserPortfolios } from "../../store/portfolio"
import Navigation from "../navigation";
import './ManagePortfolio.css'



function ManagePortfolios() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const portfolios = useSelector(state => state.portfolioState)
    const userPortfoliosArr = Object.values(portfolios)
    const userPortfolios = userPortfoliosArr.filter(portfolio => portfolio.ownerId === user.id)

    const [portfolioName, setPortfolioName] = useState('')
    const [editPortfolioName, setEditPortfolioName] = useState('')

    const makeNewPortfolio = async (e) => {
        e.preventDefault()
        await dispatch(addAPortfolio(portfolioName))
        setPortfolioName('')
        await dispatch(loadUserPortfolios())
    }

    const deletePort = async (id) => {
        console.log('id: ', id)
        await dispatch(deletePortfolio(id))
        await dispatch(loadUserPortfolios())
    }

    return (
        <div>
            <Navigation />
            <div id='managePortPage'>
                <h1>Manage Portfolios</h1>
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
                <div id='portfoliosContainer'>
                    Your Portfolios
                    {userPortfolios.map(portfolio => (
                        <div id='portfolioList' key={portfolio.id}>
                            <p style={{ fontWeight: 'bold' }}>{portfolio.accountName}</p>
                            <p>Buying Power: $<span style={{ fontWeight: 'bold' }}>{portfolio.buyingPower.toFixed(2)}</span>{" "}
                                <button onClick={() => deletePort(portfolio.id)}>Remove</button>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManagePortfolios
