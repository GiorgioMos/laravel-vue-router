<script>
export default {
    name: "AppHome",
    methods: {
        GotoAbout() {
            this.$router.push({ name: 'about' })
        }
    }
}
</script>

<template>
    <section>
        <h1>Homepage</h1>
        <a class="btn" @click="GotoAbout">Go to About</a>
    </section>
</template>

<style scoped>
h1 {
    text-align: center;
}

.btn {
    border-radius: 10px;
    background-color: rgb(113, 113, 219);
    color: white;
}
</style>