import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Navigation from "../navigation"
import LoggedInHomepage from "./UserLoggedInHomepage";
import { loadUserPortfolios } from '../../store/portfolio'
import './Index.css'


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
            <LoggedInHomepage user={user} portfolios={portfolios} />
        )
    }
    return (
        <div id='homepageContainer'>
            <Navigation />
            <div id='imgContainer'>
                <img id='homepageImg' src="https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='' />
            </div>
            <div id='textAndButtonContainer'>
                <p>Investing is simple here</p>
                <button id='getStartedButton' onClick={() => history.push('/sign-up')}>Get Started</button>
            </div>
        </div>
    )
}

export default Homepage
