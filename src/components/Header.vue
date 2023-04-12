<template>
    <header>
        <h1>{{ title }}</h1>
        <Button :color="showAddTask ? 'red' : 'green'" :text="showAddTask ? 'Close form' : 'Open form'" @btn-click="$emit('toggle-form')"/>
    </header>
</template>


<script>

    import Button from './Button.vue';

    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                default: 'Task Tracker'
            },
            showAddTask: Boolean
        },
        components:{
            Button
        }
    }

</script>


<style scoped>

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

</style>