import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
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
                                    <i className="bi-house"></i>
                                </a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Tour</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Enterprise</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">
                                    <i className="bi-person"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
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
        </>
    )
}

export default MainLayout
