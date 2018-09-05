<template>
    <div>
        <el-form :model='formdata' label-width="80px" class="efrom">
            <el-form-item label="ID">
                <el-input v-model="formdata.id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">changevuexnumto</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        id: ""
      }
    };
  },
  methods: {
      onSubmit() {
          this.$store.commit('changevuexnumto',this.formdata.id)
      }
  },
};
</script>

<style scoped lang='scss'> 
</style>