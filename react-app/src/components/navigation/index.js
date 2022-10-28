import { useHistory } from 'react-router-dom'
import './NavBar.css'

function Navigation() {
    const history = useHistory();
    return (
        <div id='navigation'>
            <div className="left">
                <div onClick={() => history.push('/')}>
                    Home - ['LOGO HERE']
                </div>
            </div>
            <div className="right">
                <div onClick={() => history.push('/login')}>
                    Log In
                </div>
                <div onClick={() => history.push('/sign-up')}>
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default Navigation
