<script>
import { store } from "../store.js" //state management

export default {
    name: 'EventDetail',
    props: ["id"],

    data() {
        return {
            store,
            evento: null
        }
    },
    mounted() {

        for (const evento of this.store.eventList) {
            if (evento.id == this.id) {
                this.evento = item;
            }
        }

        this.evento = this.store.eventList.find(item => item.id == this.id);
    }
}
</script>

<template>
    <section>
        <div>
            <h1>Dettagio evento{{ id }}</h1>
            <h2>{{ evento?.name }}</h2>
            <p>Da qui posso solo leggere id</p>
            <p>Oppure...</p>
        </div>
    </section>
</template>

<style scoped></style>