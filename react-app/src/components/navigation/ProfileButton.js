import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const loggingOut = async (e) => {
        e.preventDefault();
        await dispatch(logout());
        return history.push('/');
    };

    return (
        <div className="navright-profile-div">
            <div className="profile-button-container">
                <button onClick={openMenu} className="profile-dropdown">
                    <div className="icon-div">
                        <i className="fas fa-user-circle" />
                    </div>
                </button>
            </div>
            {showMenu && user && (
                <ul className="profile-details">
                    <li className="profile-details-li">
                        <div>{user.firstname}</div>
                    </li>
                    <li className="profile-details-li">
                        <div className="signout-div" onClick={loggingOut}>Sign out</div>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default ProfileButton
