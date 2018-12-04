<template>
    <input type="text" v-model="inputContent">
</template>

<script>
export default {
    props: ['inputContent'],
    data () {
        return {
            inputContent
        }
    }
}
</script>

<style>

</style>
