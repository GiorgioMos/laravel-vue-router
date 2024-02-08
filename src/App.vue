<script>
import AppComponent from "./components/AppComponent.vue"

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent
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
	<body>
		<AppComponent />
		<main>
			<div class="card" style="width: 18rem;" v-for="evento in store.eventList">
				<img src="..." class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">{{ evento.name }}</h5>
					<p class="card-text">Available Tickets:{{ evento.available_tickets }} <br> Date:{{ evento.date }}</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</main>
		<button class="btn btn-primary">
			<font-awesome-icon icon="fa-solid fa-home" class="me-1" />
			<span>Primary button</span>
		</button>
	</body>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	display: flex;
	flex-wrap: wrap;
	margin: 0 12%;
	padding: 1rem;
}

.card {
	margin: 30px;
}
</style>