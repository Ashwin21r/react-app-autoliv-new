import axios from 'axios';

const login = async () => {
    try {
        console.log('Sending request...');
        const response = await axios.post('https://reqres.in/api/login', {
            email: 'ashwin.holt@reqres.in',
            password: 'pistol'
        });

        console.log('Response:', response.data);
        // Handle successful login
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        // Handle error
    }
};

login();
