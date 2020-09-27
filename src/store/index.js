import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from "@/services/ApiService";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		allImagesList: []
	},

	mutations: {
		setAllImagesList(state, data) {
			state.allImagesList = data
		},

		setFavouriteImagesList(state, data) {
			state.favouriteImagesList = data;
		}
	},

	actions: {
		async getImagesList({commit}) {
			await ApiService.getAllImagesList().then(response => {
				if (response.status === 200 && response.statusText === 'OK') {
					commit('setAllImagesList', response.data);
				}
			}).catch(error => { console.log(error) })
		}
	},

	getters: {
		allImagesList(state) {
			return state.allImagesList;
		}
	}
})
