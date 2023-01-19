<script>
import axios from 'axios';

export default {
    name: 'AppMain',

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
                <ul>
                    <li v-for="project in projects">
                        {{ project.title }}
                    </li>
                </ul>
            </div>
        </div>
    </main>

</template>

<style lang="scss">

</style>