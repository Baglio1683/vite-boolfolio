<script>
import axios from 'axios';
import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',
    components: {
        AppCard
    },

    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            projects: [],
            loading: false
        };
    },


    created() {
        this.getProjects();
    },

    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/user`).then(resp => {
                this.projects = resp.data.results;
                console.log(this.projects);
                this.loading = false;
            });
        }
    },

}

</script>

<template>

    <main>
        <div class="container">
            <div class="row">
                <AppCard :project="project" v-for="project in projects" :key="project.id" />
            </div>
        </div>
    </main>

</template>

<style lang="scss">

</style>