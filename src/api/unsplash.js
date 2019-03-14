import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1beaf6a47938984d62f474b620cb01cb6c3137b325fafb72b7a82f30e3a91bed'
    }

});