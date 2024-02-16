<script>
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import EventCard from './components/EventCard.vue';
import { RouterLink } from 'vue-router';

export default {
	components: {
		RouterLink
	},
	data() {
		return {
			menuitems: [
				{
					routeName: "home",
					label: "Homepage"
				},
				{
					routeName: "about",
					label: "Chi siamo"
				},
				{
					routeName: "events",
					label: "Eventi"
				}
			]
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
	<ul>
		<li class="header" v-for="(item, index) in menuitems" :key="index">
			<RouterLink :to="{ name: item.routeName }">
				{{ item.label }}
			</RouterLink>
		</li>
	</ul>
	<router-view></router-view>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
h1 {
	text-align: center;
}

.header {
	list-style-type: none;
	padding: 20px 100px;
}

a {
	color: white;
	text-decoration: none;
}

ul {
	display: flex;
	justify-content: center;
	background-color: rgb(113, 113, 219);
}
</style>