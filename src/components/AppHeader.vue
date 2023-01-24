<script>

export default {
    name: 'AppHeader',
    components: {

    }
}

</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-center">
                <router-view :to="{ name: 'home' }">
                </router-view>
            </div>
        </div>
    </header>
</template>

<style lang="scss">

</style>