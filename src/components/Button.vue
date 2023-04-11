<template>
    <button @click="onClick()" :style="{background: color}" :class="`btn ${color}`">
        {{ text }}
    </button>
</template>


<script>

    export default{
        name: 'Button',
        props: {
            text: {
                default: 'Add Task'
            },
            color:{
                type: String,
                default: 'green'
            }
        },
        methods:{
            onClick(){
                console.log('click');
            }
        }
    }

</script>