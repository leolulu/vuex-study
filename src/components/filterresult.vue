<template>
    <div>
        <el-card class="box-card">
            <div v-for='item in this.$store.getters.doneTodos' :key='item.id' class="imsg">
                <span>{{item.text}}</span>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.imsg{
    margin-top: 20px;
}
</style>