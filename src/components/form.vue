<template>
    <div>
        <el-form :model='formdata' label-width="80px" class="efrom">
            <el-form-item label="ID">
                <el-input v-model="formdata.id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="changevuexnumto(formdata.id)">{{newnum}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      formdata: {
        id: ""
      }
    };
  },
  methods: {
    ...mapMutations(["changevuexnumto"]),
    // onSubmit() {
    //   this.changevuexnumto(this.formdata.id);
    // }
  },
  computed: {
    ...mapState(["newnum"])
  }
};
</script>

<style scoped lang='scss'>
</style>