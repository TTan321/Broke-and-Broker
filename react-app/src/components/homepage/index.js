import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";
import Navigation from "../navigation"


function Homepage() {
    const history = useHistory();
    const user = useSelector(state => state.session)
    console.log('USER', user)
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
