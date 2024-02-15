<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import EventCard from './components/EventCard.vue';

export default {
	components: {

	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.getEventList();
	},
	methods: {
		getEventList() {

			let url = this.store.apiUrl + this.store.apiEventEndpoint;

			axios.get(url).then(risultato => {
				if (risultato.status === 200 && risultato.data.success) {
					console.log(risultato.data.results);
					this.store.eventList = risultato.data.results;
				} else {
					console.error("Ops... qualcosa e andato storto");
				}
			}).catch(errore => {
				console.error(errore);
			});
		}
	}
}
</script>

<template>
	<router-view></router-view>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

h1 {
	text-align: center;
}
</style>