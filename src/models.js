import { httpPost } from './http'


const apiPath = 'http://192.168.0.104:3000/api';


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
    countryLineOptions: {}
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
    async getCountryLineOptions(currentCountry) {
      httpPost(apiPath + '/getCountryLineOptions', currentCountry).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('countryLineOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getCountryAddOptions(currentCountry) {
      httpPost(apiPath + '/getCountryAddOptions', currentCountry).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('countryAddOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
    async getCountrySumOptions(currentCountry) {
      httpPost(apiPath + '/getCountrySumOptions', currentCountry).then((response) => {
        return response.json();
      }).then((data) => {
        this.updateState('countrySumOptions', data);
      }).catch(function (err) {
        console.log(err)
      })
    },
  },
}
