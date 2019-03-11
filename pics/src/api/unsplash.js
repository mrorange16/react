import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID a3067ad86b528565243312e40ba8bd6732e9730d8b587f5584a758dacdefb433'
  }
});
