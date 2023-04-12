<template>
    <footer>
        <router-link to="/say-hello">Say hello</router-link>
    </footer>
</template>


<script>

    export default {
        name: 'Footer',

    }

</script>


<style scoped>
    footer{
        text-align: center;
        padding: 20px 0px;
    }
    a{
        color: #333;
    }
</style>