<script>
import { store } from "../store.js" //state management
import EventCard from '../components/EventCard.vue';

export default {
    name: "EventList",
    components: {
        EventCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h1>Eventi Disponibili</h1>

    <body>
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
    </body>
    <EventCard v-for="evento in store.eventList" :item="evento" />
</template>

<style scoped>
h1 {
    text-align: center;
}

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