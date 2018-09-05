<template>
    <div class="topdiv">
        <el-button type="primary" icon="el-icon-edit" @click='haddle1'></el-button>
    </div>
</template>

<script>
    export default {
        methods: {
            haddle1() {
                this.$store.commit('vuexnumplus')
            }
        },
    }
</script>

<style scoped lang='scss'>
.topdiv{
    border: 1px dotted green;
    padding: 50px;
}
</style>