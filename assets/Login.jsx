
;function Login() {
     console.log('Email:', );
    console.log('Password:',);
   
 

  return (
    <div className="login-container">
      <h2>Login</h2>
      
        <div className="input-group">
          <label htmlFor="email">User ID:</label>
          <input
            type="email"
            id="email"

            onChange={(e) => (e.target.value)}
            required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value />
          
    


        </div><button type="submit">Login</button>

    </div>
  
  
  );







}

export default Login;

     

