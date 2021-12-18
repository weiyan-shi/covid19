import { httpGet, httpPost, GET, POST } from './http'
import { mock_news, mock_newsDetail, mock_videos } from './mock';


const apiPath = 'http://127.0.0.1:3000/api';


export const covid = {
  state: {
    globalAddOptions: {},
    globalCakeOptions: {},
    globalSumOptions: {},
    globalCountriesList: [],
    globalBasicInfo: {},
    currentDate: '2021-3-20',
    currentCountry: ['China', 'Beijing'],
    options: [],
    countryAddOptions: {},
    countrySumOptions: {},
    countryLineOptions: {},
    currentCountryDate: '2021-3-20',
    news: {},
    newsDetail: {},
    videos: {}
  },
  reducers: {
    updateState(state, id, payload) {
      return {
        ...state,
        [id]: payload
      }
    },
  },
  effects: {
    async getGlobalBasicInfo(date) {
      httpPost(apiPath + '/getGlobalBasicInfo', date).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('globalBasicInfo', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getGlobalAddOptions(date) {
      httpPost(apiPath + '/getGlobalAddOptions', date).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('globalAddOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getGlobalCakeOptions(date) {
      httpPost(apiPath + '/getGlobalCakeOptions', date).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('globalCakeOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getGlobalSumOptions(date) {
      httpPost(apiPath + '/getGlobalSumOptions', date).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('globalSumOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getGlobalCountriesList(date) {
      httpPost(apiPath + '/getGlobalCountriesList', date).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('globalCountriesList', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getSelectedOptions() {
      httpPost(apiPath + '/getSelectedOptions', {}).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('options', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getCountryLineOptions({ country, date }) {
      httpPost(apiPath + '/getCountryLineOptions', { country: country, date: date }).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('countryLineOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getCountryAddOptions({ country, date }) {
      httpPost(apiPath + '/getCountryAddOptions', { country: country, date: date }).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('countryAddOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getCountrySumOptions({ country, date }) {
      httpPost(apiPath + '/getCountrySumOptions', { country: country, date: date }).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('countrySumOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async queryNews({ keyword, page, pageSize }) {
      httpGet(apiPath + '/queryNews', { keyword: keyword, page: page, pageSize: pageSize }).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('news', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getNews({ id }) {
      httpGet(apiPath + '/getNews', { id: id }).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('newsDetail', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async queryVideo({ keyword, page, pageSize }) {
      httpGet(apiPath + '/queryVideo', { keyword: keyword, page: page, pageSize: pageSize }).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('videos', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
  },
}
