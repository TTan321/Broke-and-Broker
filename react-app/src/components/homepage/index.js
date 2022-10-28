import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";
import Navigation from "../navigation"
import LoggedInHomepage from "./UserLoggedInHomepage";


function Homepage() {
    const history = useHistory();
    const user = useSelector(state => state.session)
    const portfolios = useSelector(state => state.portfolioState)
    const userArr = Object.values(user)

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
