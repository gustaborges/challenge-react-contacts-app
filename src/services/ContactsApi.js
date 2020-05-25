import axios from 'axios'

const contactsApi = axios.create({
    baseURL: 'https://5e82ac6c78337f00160ae496.mockapi.io/api'
});

export default contactsApi;