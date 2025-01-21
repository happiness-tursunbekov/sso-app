import {useState} from "react";
import {fetchUser} from "../store/reducers/authReducer";
import {store} from "../store";
import {useNavigate} from "react-router-dom";

const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('/api/auth/sign-in', {
            email,
            password,
            rememberMe,
            deviceName: navigator.userAgent
        }).then(res => {
            const token = `Bearer ${res.data}`
            localStorage.setItem('token', token)
            store.dispatch(fetchUser(token))
            navigate('/')
        })
    }

    return (
        <div className="d-flex align-items-center py-4 bg-body-tertiary vh-100 position-relative">
            <main className="form-signin m-auto">
                <form onSubmit={onSubmit}>
                    <h1 className="h3 mb-3 fw-normal"><i className="bi-person-lock"></i> Please sign in</h1>

                    <div className="form-floating">
                        <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input required value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input onChange={() => setRememberMe(!rememberMe)} className="form-check-input" type="checkbox" value={rememberMe ? 'on' : ''} id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">GlobalLogic © 2025</p>
                </form>
            </main>
        </div>
    )
}

export default Auth
