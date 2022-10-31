import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navigation from "../navigation"
import LoggedInHomepage from "./UserLoggedInHomepage";
import { loadUserPortfolios } from '../../store/portfolio'


function Homepage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session)
    const portfolios = useSelector(state => state.portfolioState)
    const userArr = Object.values(user)
    console.log('PORTFOLIOS: ', portfolios)
    useEffect(() => {
        dispatch(loadUserPortfolios())
    }, [dispatch])

    if (userArr[0] !== null) {
        return (
            <LoggedInHomepage portfolios={portfolios} />
        )
    }
    return (
        <div>
            <Navigation />
            IMG
            Button redirects to sign up form page
            <button onClick={() => history.push('/sign-up')}>Get Started</button>
        </div>
    )
}

export default Homepage
