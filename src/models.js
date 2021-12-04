import { httpPost } from './http'


const apiPath = 'http://192.168.0.104:3000/api';


export const covid = {
    state: {
        globalAddOptions: {},
        globalCakeOptions: {},
        globalSumOptions: {},
        globalCountriesList: []
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
        async getGlobalAddOptions() {
            httpPost(apiPath + '/getGlobalAddOptions', {}).then((response) => {
                return response.json();
            }).then((data) => {
                this.updateState('globalAddOptions', data);
            }).catch(function (err) {
                console.log(err)
            })
        },
        async getGlobalCakeOptions() {
            httpPost(apiPath + '/getGlobalCakeOptions', {}).then((response) => {
                return response.json();
            }).then((data) => {
                this.updateState('globalCakeOptions', data);
            }).catch(function (err) {
                console.log(err)
            })
        },
        async getGlobalSumOptions() {
            httpPost(apiPath + '/getGlobalSumOptions', {}).then((response) => {
                return response.json();
            }).then((data) => {
                this.updateState('globalSumOptions', data);
            }).catch(function (err) {
                console.log(err)
            })
        },
        async getGlobalCountriesList() {
            httpPost(apiPath + '/getGlobalCountriesList', {}).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                this.updateState('globalCountriesList', data);
            }).catch(function (err) {
                console.log(err)
            })
        }
    }
}
