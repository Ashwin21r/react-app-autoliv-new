import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure correct import

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
            // Example hardcoded credentials for demonstration
            const expectedUsername = 'admin';
            const expectedPassword = 'password123'; // Hardcoded for this example

            if (user === expectedUsername && pwd === expectedPassword) {
                // Simulate successful login
                setUser('');
                setPwd('');
                setShowError(false);

                // Navigate to the /main page
                navigate('/main');
            } else {
                // Handle authentication failure
                setErrMsg('Invalid Username or Password');
                setShowError(true);
                errRef.current.focus();
            }
        } catch (err) {
            console.error('Login error:', err); // Log errors
            setErrMsg('Login Failed');
            setShowError(true);
            errRef.current.focus();
        }
    };

    return (
        <section className="login-section">
            <p ref={errRef} className={showError ? 'errmsg' : 'offscreen'} aria-live="assertive">
                {errMsg}
            </p>
            <h1 className='Header-login'><b>Partner Portal Login</b></h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    className="input-control"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    className="input-control"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button className="btn">Sign In</button>
            </form>
            <div className="additional-links">
                <p><a className='Forgotpass' href="/reset-password">Forgot Password?</a></p>
                <p><a className='Forgotpass'  href="https://www.autoliv.biz/enovia/portal/alvPortalSiteUsageRequirements.jsp">Site Usage Agreement</a></p>
                <img className='login-logo' src='public\autoliv-logo-blue.gif'></img>
            </div>
        </section>
    );
};

export default LoginForm;
