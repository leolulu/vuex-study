<template>
    <div>
        <el-card class="box-card">
            <div v-for='item in doneTodos' :key='item.id' class="imsg">
                <span>{{item.text}}</span>
            </div>
        </el-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["doneTodos"])
  }
};
</script>

<style scoped lang='scss'>
.imsg {
  margin-top: 20px;
}
</style>