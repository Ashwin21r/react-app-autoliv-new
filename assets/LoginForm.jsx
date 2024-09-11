import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
        setShowError(false);
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5173/auth', {
                email: user,
                password: pwd,
            });

            if (response.data.token) {
                // Save the token to localStorage or sessionStorage
                localStorage.setItem('authToken', response.data.token);

                // Clear input fields and error message
                setUser('');
                setPwd('');
                setShowError(false);

                // Redirect to the /support page
                navigate('/support');
            } else {
                setErrMsg('Invalid Username or Password');
                setShowError(true);
                errRef.current.focus();
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrMsg('Login Failed');
            setShowError(true);
            errRef.current.focus();
        }
    };


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="login-section">
                        <div className="login-logo">
                            <img src="public/autoliv-logo-blue.gif" alt="Logo" />
                        </div>
                        <h2 className="Header-login">Sign In</h2>
                        <h2 className="Header-title">Autoliv Partner Portal</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    ref={userRef}
                                    className="form-control input-control"
                                    placeholder="Username"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control input-control"
                                    placeholder="Password"
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Sign In</button>

                            {showError && (
                                <p ref={errRef} className="errmsg">{errMsg}</p>
                            )}

                            <div className="Forgotpass">
                                <a href="#">Forgot Password?</a>
                            </div>

                            <div className="signup-link">
                                <p className='signup-text'>Don&apos;t have an account? <a href="#">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="additional-links">
               
                <p><a className="siteusage" href="https://www.autoliv.biz/enovia/portal/alvPortalSiteUsageRequirements.jsp">Site Usage Agreement</a></p>
            </div>
        </div>
    );
};

export default LoginForm;
