import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a POST route for login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await axios.post('https://reqres.in/api/login', {
            email,
            password
        });

        if (response.data.token) {
            // Simulate successful login with a token
            res.json({ token: response.data.token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(401).json({ message: 'Login Failed' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
