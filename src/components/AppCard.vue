<script>

export default {
    name: 'AppCard',
    data() {
        return {
            contentMaxLength: 200,
            baseUrl: "http://127.0.0.1:8000",
        }
    },
    props: {
        project: Object,
    },

    // computed: {
    //     contentPreview() {
    //         if (this.project.content && this.project.content.length > this.contentMaxLength) {
    //             return this.project.content.substr(0, this.contentMaxLength) + '...';
    //         }
    //         return this.project.content;
    //     }
    // },

}
</script>

<template>

    <div class="card" style="width: 18rem;">

        <img class="card-img-top" v-if="project.cover_image" :src="`${baseUrl}/storage/${project.cover_image}`" alt="">
        <div v-else>
            Nessuna immagine
        </div>

        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text"></p>
        </div>

    </div>


</template>