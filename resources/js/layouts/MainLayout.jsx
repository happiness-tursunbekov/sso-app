import {Outlet, useNavigate} from "react-router-dom";
import {fetchUser} from "../store/reducers/authReducer";
import {useDispatch} from "react-redux";
import {Suspense, useEffect} from "react";
import AppNav from "../components/AppNav";

const MainLayout = () => {

    const token = localStorage.getItem('token')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            (async () => {
                try {
                    await dispatch(fetchUser(token))
                } catch (e) {
                    navigate('/auth')
                }
            })();
        } else {
            navigate('/auth')
        }
    }, []);

    return (
        <Suspense>
            <AppNav/>
            <main>
                <Outlet/>
            </main>
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-body-secondary">© 2017–2024</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a>
                            </li>
                            <li><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="#">Business</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Education</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Government</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Gaming</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary text-decoration-none" href="#">Team</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
                            <li><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Suspense>
    )
}

export default MainLayout
