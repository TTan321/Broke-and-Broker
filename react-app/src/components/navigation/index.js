import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

function Navigation() {
    const history = useHistory();
    const user = useSelector(state => state.session)
    const userArr = Object.values(user)

    return (
        <div id='navigation'>
            <div className="left">
                <div onClick={() => history.push('/')}>
                    Home - ['LOGO HERE']
                </div>
            </div>
            <div className="right">
                {userArr[0] === null && (
                    <>
                        <div id='navLogin' onClick={() => history.push('/login')}>
                            Log In
                        </div>
                        <div id='navSignUp' onClick={() => history.push('/sign-up')}>
                            Sign Up
                        </div>
                    </>
                )}
                {
                    userArr[0] !== null && (
                        <LogoutButton />
                    )
                }
            </div>
        </div>
    )
}

export default Navigation
