import {useDispatch, useSelector} from "react-redux";
import {auth, signOut} from "../store/reducers/authReducer";
import {useNavigate} from "react-router-dom";

const AppNav = () => {

    const user = useSelector(auth).user
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSignOut = () => {
        dispatch(signOut())

        navigate('/auth')
    }

    return (
        <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand d-md-none" href="#">
                    <i className="bi-key"></i> Aperture
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvas"
                        aria-controls="offcanvas" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas"
                     aria-labelledby="offcanvasLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 justify-content-between">
                            <li className="nav-item"><a className="nav-link" href="#">
                                <i className="bi-house"></i> Home
                            </a></li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi-person"></i> {user.name}
                                </a>
                            </li>
                            <li className="nav-item">
                                <button onClick={onSignOut} className="nav-link">
                                    <i className="bi-box-arrow-right"></i> Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default AppNav
