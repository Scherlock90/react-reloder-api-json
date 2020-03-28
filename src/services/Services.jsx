import axios from 'axios';

export const Services = {
    getApiPostDate () {
        const options = {
            method: 'GET',
            url: 'https://api.dane.gov.pl/articles?page=1&per_page=5&sort=-created',
        }
        return axios(options)
    }
}
