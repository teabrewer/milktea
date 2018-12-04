<template>
    <input type="text" v-model="inputContent" @keyup.enter="clickListItem">
</template>

<script>
export default {
    props: ['propsInput', 'propsIdx'],
    data () {
        return {
            idx: this.propsIdx,
            inputContent: this.propsInput
        }
    },
    methods: {
        clickListItem () {
            this.$emit('listItemKeyupEnter', this.inputContent, this.idx)
        }
    }
}
</script>

<style>

</style>
