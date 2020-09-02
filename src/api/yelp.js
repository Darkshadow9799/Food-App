import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer y2WideS37jSBhNNwQDNSXEli6B7zkoMM1b6O3Z6EZjTqtTlj-DGozicMz2yX_gU1gmTEwfrmCBmn6jmw--PLfTbABQAgmuyo3aE-JiYpXsm6jT7vJdVqBrOHovpMX3Yx'
    }
});